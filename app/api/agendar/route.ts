import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"
import twilio from "twilio"
import { format, parseISO, addHours } from "date-fns"
import { ptBR } from "date-fns/locale"
import { agendarSchema } from "@/lib/agendar-schema"

type FormData = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  motivo?: string
}

// ─── Google Calendar ──────────────────────────────────────────────────────────
async function createCalendarEvent(data: FormData) {
  // CRÍTICO: Vercel armazena \n como literal — precisa converter de volta
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(
    /\\n/g,
    "\n"
  )

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  })

  const calendar = google.calendar({ version: "v3", auth })

  const startDateTime = parseISO(`${data.date}T${data.time}:00`)
  const endDateTime = addHours(startDateTime, 1)

  const submittedAt = format(new Date(), "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBR,
  })

  const description = [
    `Paciente: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.phone}`,
    data.motivo ? `Motivo: ${data.motivo}` : null,
    ``,
    `Agendado via site Clínica NeuroViva em ${submittedAt}`,
  ]
    .filter(Boolean)
    .join("\n")

  const response = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: `Consulta — ${data.name}`,
      description,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/Sao_Paulo",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "America/Sao_Paulo",
      },
      attendees: [{ email: data.email, displayName: data.name }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 1 dia antes
          { method: "popup", minutes: 60 },        // 1 hora antes
        ],
      },
    },
    // Envia email de confirmação automático ao paciente
    sendUpdates: "all",
  })

  return response.data
}

// ─── Twilio WhatsApp ──────────────────────────────────────────────────────────
async function sendWhatsAppNotification(data: FormData) {
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  )

  const formattedDate = format(
    parseISO(`${data.date}T${data.time}:00`),
    "dd/MM/yyyy 'às' HH:mm",
    { locale: ptBR }
  )

  const body = [
    `🏥 *Nova consulta solicitada — Clínica NeuroViva*`,
    ``,
    `👤 *Paciente:* ${data.name}`,
    `📧 *E-mail:* ${data.email}`,
    `📱 *Telefone:* ${data.phone}`,
    `📅 *Data solicitada:* ${formattedDate}`,
    data.motivo ? `📝 *Motivo:* ${data.motivo}` : null,
    ``,
    `✅ Evento criado no Google Agenda.`,
  ]
    .filter(Boolean)
    .join("\n")

  return client.messages.create({
    from: process.env.TWILIO_WHATSAPP_FROM!,
    to: process.env.DOCTOR_WHATSAPP!,
    body,
  })
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Requisição inválida" }, { status: 400 })
  }

  const parsed = agendarSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const data = parsed.data

  // Executa os dois serviços em paralelo — um não bloqueia o outro
  const [calendarResult, whatsappResult] = await Promise.allSettled([
    createCalendarEvent(data),
    sendWhatsAppNotification(data),
  ])

  if (calendarResult.status === "rejected") {
    console.error("[agendar] Erro no Google Calendar:", calendarResult.reason)
  }
  if (whatsappResult.status === "rejected") {
    console.error("[agendar] Erro no Twilio WhatsApp:", whatsappResult.reason)
  }

  return NextResponse.json(
    {
      success: true,
      calendarCreated: calendarResult.status === "fulfilled",
      whatsappSent: whatsappResult.status === "fulfilled",
    },
    { status: 200 }
  )
}

import { z } from "zod"
import { isValid, parseISO, isWeekend, isBefore, startOfDay } from "date-fns"

export const AVAILABLE_TIMES = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
] as const

export const agendarSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),

  email: z.string().email("E-mail inválido"),

  phone: z
    .string()
    .min(10, "Telefone inválido")
    .max(15, "Telefone inválido")
    .regex(/^[\d\s()\-+]+$/, "Telefone inválido"),

  date: z
    .string()
    .refine((val) => isValid(parseISO(val)), { message: "Data inválida" })
    .refine((val) => !isBefore(parseISO(val), startOfDay(new Date())), {
      message: "A data não pode ser no passado",
    })
    .refine((val) => !isWeekend(parseISO(val)), {
      message: "Atendimento somente de segunda a sexta",
    }),

  time: z
    .string()
    .refine((val) => (AVAILABLE_TIMES as readonly string[]).includes(val), {
      message: "Horário inválido",
    }),

  motivo: z.string().max(500, "Mensagem muito longa").optional(),
})

export type AgendarFormValues = z.infer<typeof agendarSchema>

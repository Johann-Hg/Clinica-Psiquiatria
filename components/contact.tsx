"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Paulista, 1578 - Sala 402, Bela Vista, São Paulo - SP",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 3456-7890",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Sexta, 8h às 18h",
  },
]

export function Contact() {
  return (
    <section id="contato" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Fale conosco
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl lg:text-4xl">
            Agende sua consulta
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Entre em contato conosco e dê o primeiro passo para uma vida com
            mais qualidade. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  Nome completo
                </label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos brevemente sobre sua necessidade..."
                  rows={4}
                  className="bg-background"
                />
              </div>
              <Button type="submit" size="lg" className="mt-2 w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border/60 bg-background p-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5511345678900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-[#fff] transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  agendarSchema,
  type AgendarFormValues,
  AVAILABLE_TIMES,
} from "@/lib/agendar-schema"

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
  const form = useForm<AgendarFormValues>({
    resolver: zodResolver(agendarSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      motivo: "",
    },
  })

  const { isSubmitting } = form.formState

  const today = new Date().toISOString().split("T")[0]

  async function onSubmit(values: AgendarFormValues) {
    try {
      const response = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error("Erro no servidor")

      toast.success("Solicitação enviada com sucesso!", {
        description:
          "Em breve entraremos em contato para confirmar o horário. Verifique seu e-mail.",
        duration: 7000,
      })

      form.reset()
    } catch {
      toast.error("Erro ao enviar solicitação", {
        description:
          "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        duration: 8000,
      })
    }
  }

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
          {/* Formulário */}
          <div className="flex-1">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* Nome */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* E-mail */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone / WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Data + Horário lado a lado */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data preferida</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            min={today}
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Horário</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-background">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {AVAILABLE_TIMES.map((t) => (
                              <SelectItem key={t} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Motivo (opcional) */}
                <FormField
                  control={form.control}
                  name="motivo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Motivo da consulta{" "}
                        <span className="font-normal text-muted-foreground">
                          (opcional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos brevemente sobre sua necessidade..."
                          rows={3}
                          className="bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="mr-2 size-4" />
                      Enviando...
                    </>
                  ) : (
                    "Solicitar agendamento"
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Sidebar de contato */}
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
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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

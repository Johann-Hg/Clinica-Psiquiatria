import { ShieldCheck, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Procedimentos realizados com equipamentos de última geração e protocolos rigorosos de segurança.",
  },
  {
    icon: Heart,
    title: "Acolhimento",
    description:
      "Ambiente acolhedor e equipe dedicada ao bem-estar de cada paciente, com atendimento humanizado.",
  },
  {
    icon: Sparkles,
    title: "Inovação",
    description:
      "Tratamentos baseados em evidências científicas e tecnologias avançadas da neurociência moderna.",
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sobre a clínica
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl lg:text-4xl">
            Excelência em saúde mental
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A Clinica Hummig é referência em tratamentos de saúde mental com
            Estimulação Magnética Transcraniana. Nossa equipe combina
            profissionalismo, ética médica e tecnologia de ponta para oferecer o
            melhor cuidado aos nossos pacientes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-xl border border-border/60 bg-background p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

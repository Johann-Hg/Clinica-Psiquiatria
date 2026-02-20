import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CloudRain, Brain, Repeat, Zap, Activity } from "lucide-react"

const conditions = [
  {
    icon: CloudRain,
    title: "Depressão",
    description:
      "Tratamento eficaz para depressão resistente e episódios depressivos maiores, com resultados significativos desde as primeiras sessões.",
  },
  {
    icon: Brain,
    title: "Ansiedade",
    description:
      "Redução dos sintomas de ansiedade generalizada, crises de pânico e fobias com estimulação magnética direcionada.",
  },
  {
    icon: Repeat,
    title: "Transtorno Obsessivo-Compulsivo (TOC)",
    description:
      "Alívio de pensamentos obsessivos e comportamentos compulsivos através de protocolos específicos de EMT.",
  },
  {
    icon: Zap,
    title: "Transtorno Bipolar",
    description:
      "Manejo de episódios depressivos em pacientes bipolares com protocolos seguros e personalizados.",
  },
  {
    icon: Activity,
    title: "Dor Crônica",
    description:
      "Controle de quadros de dor crônica, incluindo fibromialgia e enxaqueca, através da neuromodulação.",
  },
]

export function Conditions() {
  return (
    <section id="tratamentos" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Especialidades
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl lg:text-4xl">
            Condições tratadas com EMT
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A Estimulação Magnética Transcraniana é indicada para diversas
            condições neuropsiquiátricas. Confira abaixo os principais
            tratamentos oferecidos em nossa clínica.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <Card
              key={condition.title}
              className="border-border/60 bg-background transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <condition.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-base text-foreground">
                  {condition.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {condition.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react"

const benefits = [
  "Procedimento não invasivo",
  "Sem necessidade de anestesia",
  "Procedimento seguro e indolor",
  "Resultados comprovados cientificamente",
  "Alternativa moderna aos tratamentos tradicionais",
  "Sessões rápidas de aproximadamente 20 minutos",
  "Sem efeitos colaterais sistêmicos",
  "Aprovado por órgãos reguladores internacionais",
]

export function WhatIsEMT() {
  return (
    <section id="emt" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Conheça o tratamento
            </span>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              O que é Estimulação Magnética Transcraniana?
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A Estimulação Magnética Transcraniana (EMT) é uma técnica
              neuromoduladora não invasiva que utiliza campos magnéticos para
              estimular áreas específicas do cérebro. É indicada para o
              tratamento de diversos transtornos neuropsiquiátricos, oferecendo
              uma alternativa segura e eficaz para pacientes que não responderam
              adequadamente a outros tratamentos.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              O procedimento é realizado em consultório, sem necessidade de
              internação ou anestesia. O paciente permanece acordado e confortável
              durante toda a sessão, podendo retornar às suas atividades normais
              imediatamente após o tratamento.
            </p>
          </div>

          <div className="flex-1">
            <div className="rounded-xl border border-border/60 bg-card p-8">
              <h3 className="text-lg font-semibold text-card-foreground">
                Benefícios da EMT
              </h3>
              <ul className="mt-6 flex flex-col gap-4" role="list">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed text-card-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

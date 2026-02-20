import Image from "next/image"
import { Award, GraduationCap, Stethoscope } from "lucide-react"

export function Doctor() {
  return (
    <section id="medico" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Corpo clínico
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Médico Responsável
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="relative shrink-0">
            <div className="relative size-64 overflow-hidden rounded-2xl shadow-xl lg:size-80">
              <Image
                src="/images/doctor.jpg"
                alt="Dr. João Silva, psiquiatra especialista em EMT"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-card px-4 py-2 shadow-md">
              <p className="text-xs font-medium text-muted-foreground">CRM/SP</p>
              <p className="text-sm font-bold text-primary">123.456</p>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-foreground">
              Dr. João Silva
            </h3>
            <p className="mt-1 text-base font-medium text-primary">
              Especialista em Psiquiatria e Neuromodulação
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Com mais de 15 anos de experiência em psiquiatria, o Dr. João Silva
              é referência nacional em Estimulação Magnética Transcraniana.
              Formado pela Universidade de São Paulo (USP), realizou
              especialização em neuromodulação nos Estados Unidos e é membro da
              Associação Brasileira de Psiquiatria.
            </p>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Dedicado à aplicação de tecnologias inovadoras no tratamento de
              transtornos neuropsiquiátricos, já realizou mais de 5.000 sessões
              de EMT com resultados expressivos para seus pacientes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">USP</p>
                  <p className="text-xs text-muted-foreground">Formação</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">15+ anos</p>
                  <p className="text-xs text-muted-foreground">Experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Stethoscope className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">5.000+</p>
                  <p className="text-xs text-muted-foreground">Sessões EMT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

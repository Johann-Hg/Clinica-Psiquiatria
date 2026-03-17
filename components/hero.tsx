import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Tecnologia de ponta em saúde mental
          </span>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tratamento com{" "}
            <span className="text-primary">
              Estimulação Magnética Transcraniana
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            Tecnologia avançada e segura para tratamento de depressão, ansiedade
            e outros transtornos. Recupere sua qualidade de vida com um
            procedimento indolor e aprovado cientificamente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <a href="#contato">
                Agendar Consulta
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <a href="#emt">
                <PlayCircle className="size-4" />
                Saiba mais
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" />
              <span>Aprovado pela ANVISA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" />
              <span>Sem anestesia</span>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl lg:aspect-[3/2]">
            <Image
              src="/images/hero-emt.jpg"
              alt="Ambiente moderno da Clinica Hummig com equipamento de Estimulação Magnética Transcraniana"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg lg:block">
            <p className="text-2xl font-bold text-primary">+5.000</p>
            <p className="text-sm text-muted-foreground">Sessões realizadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

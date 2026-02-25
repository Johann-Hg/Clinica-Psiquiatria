import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  FileText,
  BookOpen,
  ScrollText,
  ArrowRight,
  Clock,
  Bell,
  Brain,
  ShieldCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Loja",
  description:
    "PDFs, livros e artigos científicos sobre saúde mental, psiquiatria e Estimulação Magnética Transcraniana. Em breve disponíveis para download.",
}

type ProductStatus = "em-breve" | "disponivel"

type Product = {
  id: number
  title: string
  description: string
  type: "pdf" | "livro" | "artigo"
  status: ProductStatus
  pages?: number
  price?: string
}

const pdfs: Product[] = [
  {
    id: 1,
    title: "Guia do Paciente: O que Esperar da EMT",
    description:
      "Material completo para pacientes que iniciarão o tratamento com Estimulação Magnética Transcraniana. Orientações, etapas e cuidados.",
    type: "pdf",
    status: "em-breve",
    pages: 28,
  },
  {
    id: 2,
    title: "Manejo da Depressão Resistente",
    description:
      "Protocolo clínico baseado em evidências para profissionais de saúde mental. Critérios diagnósticos e abordagens terapêuticas.",
    type: "pdf",
    status: "em-breve",
    pages: 45,
  },
  {
    id: 3,
    title: "Perguntas Frequentes sobre EMT",
    description:
      "Respostas claras e acessíveis para as dúvidas mais comuns sobre segurança, eficácia e indicações da estimulação magnética.",
    type: "pdf",
    status: "em-breve",
    pages: 18,
  },
]

const livros: Product[] = [
  {
    id: 4,
    title: "Neuromodulação: Da Teoria à Prática Clínica",
    description:
      "E-book abrangente sobre os fundamentos neurobiológicos e aplicações clínicas da neuromodulação não invasiva em psiquiatria.",
    type: "livro",
    status: "em-breve",
    pages: 180,
  },
  {
    id: 5,
    title: "Saúde Mental no Século XXI",
    description:
      "Uma visão integrada das terapias modernas para transtornos neuropsiquiátricos, combinando ciência, tecnologia e humanização.",
    type: "livro",
    status: "em-breve",
    pages: 224,
  },
]

const artigos: Product[] = [
  {
    id: 6,
    title: "EMT e Depressão Resistente: Revisão Sistemática",
    description:
      "Compilação e análise crítica dos principais estudos clínicos sobre eficácia da EMT em pacientes com depressão refratária ao tratamento farmacológico.",
    type: "artigo",
    status: "em-breve",
  },
  {
    id: 7,
    title: "Neuroplasticidade e Recuperação Emocional",
    description:
      "Estudo sobre os mecanismos de neuroplasticidade induzidos pela EMT e seu papel nos processos de recuperação em transtornos do humor.",
    type: "artigo",
    status: "em-breve",
  },
]

const categoryConfig = {
  pdf: {
    icon: FileText,
    label: "PDF",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  livro: {
    icon: BookOpen,
    label: "E-book",
    color: "bg-violet-500/10 text-violet-600 border-violet-200",
  },
  artigo: {
    icon: ScrollText,
    label: "Artigo",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
}

function ProductCard({ product }: { product: Product }) {
  const config = categoryConfig[product.type]
  const Icon = config.icon

  return (
    <div className="group flex flex-col rounded-xl border border-border/60 bg-background p-6 transition-shadow hover:shadow-md">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${config.color}`}
        >
          {config.label}
        </span>
      </div>

      {/* Content */}
      <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
        {product.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      {/* Meta */}
      {product.pages && (
        <p className="mt-3 text-xs text-muted-foreground">
          {product.pages} páginas
        </p>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600">
          <Clock className="size-3.5" />
          Em breve
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled
          className="gap-1.5 text-xs opacity-60"
        >
          <Bell className="size-3.5" />
          Avisar-me
        </Button>
      </div>
    </div>
  )
}

function SectionHeader({
  tag,
  title,
  description,
  anchor,
}: {
  tag: string
  title: string
  description: string
  anchor: string
}) {
  return (
    <div id={anchor} className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-primary">
        {tag}
      </span>
      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export default function LojaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Conhecimento em saúde mental
              </span>
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Loja{" "}
                <span className="text-primary">NeuroViva</span>
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                PDFs, e-books e artigos científicos produzidos pelos especialistas
                da clínica. Conteúdo baseado em evidências para pacientes,
                familiares e profissionais de saúde.
              </p>

              {/* Category quick-links */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { label: "PDFs", href: "#pdfs", icon: FileText },
                  { label: "E-books", href: "#livros", icon: BookOpen },
                  { label: "Artigos", href: "#artigos", icon: ScrollText },
                ].map(({ label, href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="size-4 text-primary" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <div className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-muted-foreground sm:gap-10">
              {[
                { icon: ShieldCheck, text: "Conteúdo baseado em evidências" },
                { icon: Brain, text: "Produzido por psiquiatras especialistas" },
                { icon: FileText, text: "Download imediato após a compra" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="size-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PDFs */}
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              anchor="pdfs"
              tag="Guias e Protocolos"
              title="PDFs"
              description="Materiais práticos e objetivos para orientar pacientes e profissionais de saúde nas diferentes etapas do tratamento."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pdfs.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* E-books */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              anchor="livros"
              tag="Leitura aprofundada"
              title="E-books"
              description="Obras completas desenvolvidas pelos especialistas da NeuroViva, com profundidade clínica e linguagem acessível."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {livros.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Artigos */}
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              anchor="artigos"
              tag="Ciência e pesquisa"
              title="Artigos"
              description="Revisões e estudos clínicos produzidos ou comentados pela equipe da clínica, com foco em aplicação prática."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {artigos.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA — notify */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Bell className="mx-auto mb-4 size-10 text-primary-foreground/80" />
              <h2 className="text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Seja o primeiro a saber
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
                Nossa loja está chegando. Entre em contato para ser avisado assim
                que os materiais estiverem disponíveis, ou para solicitar um
                conteúdo específico.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="gap-2"
                >
                  <a href="/#contato">
                    Entrar em contato
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="/">Voltar ao site</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

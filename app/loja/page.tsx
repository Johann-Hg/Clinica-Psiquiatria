"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import {
  FileText,
  BookOpen,
  ScrollText,
  Clock,
  ArrowRight,
  LayoutGrid,
} from "lucide-react"

type ProductType = "pdf" | "livro" | "artigo"

type Product = {
  id: number
  title: string
  description: string
  type: ProductType
  pages?: number
}

const products: Product[] = [
  {
    id: 1,
    title: "Guia do Paciente: O que Esperar da EMT",
    description:
      "Material completo para pacientes que iniciarão o tratamento com Estimulação Magnética Transcraniana. Orientações, etapas e cuidados.",
    type: "pdf",
    pages: 28,
  },
  {
    id: 2,
    title: "Manejo da Depressão Resistente",
    description:
      "Protocolo clínico baseado em evidências para profissionais de saúde mental. Critérios diagnósticos e abordagens terapêuticas.",
    type: "pdf",
    pages: 45,
  },
  {
    id: 3,
    title: "Perguntas Frequentes sobre EMT",
    description:
      "Respostas claras e acessíveis para as dúvidas mais comuns sobre segurança, eficácia e indicações da estimulação magnética.",
    type: "pdf",
    pages: 18,
  },
  {
    id: 4,
    title: "Neuromodulação: Da Teoria à Prática Clínica",
    description:
      "E-book abrangente sobre os fundamentos neurobiológicos e aplicações clínicas da neuromodulação não invasiva em psiquiatria.",
    type: "livro",
    pages: 180,
  },
  {
    id: 5,
    title: "Saúde Mental no Século XXI",
    description:
      "Uma visão integrada das terapias modernas para transtornos neuropsiquiátricos, combinando ciência, tecnologia e humanização.",
    type: "livro",
    pages: 224,
  },
  {
    id: 6,
    title: "EMT e Depressão Resistente: Revisão Sistemática",
    description:
      "Compilação e análise crítica dos principais estudos clínicos sobre eficácia da EMT em pacientes com depressão refratária ao tratamento farmacológico.",
    type: "artigo",
  },
  {
    id: 7,
    title: "Neuroplasticidade e Recuperação Emocional",
    description:
      "Estudo sobre os mecanismos de neuroplasticidade induzidos pela EMT e seu papel nos processos de recuperação em transtornos do humor.",
    type: "artigo",
  },
]

const categoryConfig: Record<ProductType, { icon: React.ElementType; label: string; color: string; bg: string }> = {
  pdf: {
    icon: FileText,
    label: "PDF",
    color: "text-blue-600",
    bg: "bg-blue-500/10",
  },
  livro: {
    icon: BookOpen,
    label: "E-book",
    color: "text-violet-600",
    bg: "bg-violet-500/10",
  },
  artigo: {
    icon: ScrollText,
    label: "Artigo",
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
}

type Filter = "todos" | ProductType

const filters: { value: Filter; label: string; icon: React.ElementType }[] = [
  { value: "todos", label: "Todos", icon: LayoutGrid },
  { value: "pdf", label: "PDFs", icon: FileText },
  { value: "livro", label: "E-books", icon: BookOpen },
  { value: "artigo", label: "Artigos", icon: ScrollText },
]

function ProductCard({ product }: { product: Product }) {
  const cfg = categoryConfig[product.type]
  const Icon = cfg.icon

  return (
    <div className="flex flex-col rounded-xl border border-border/60 bg-background p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${cfg.bg}`}>
          <Icon className={`size-5 ${cfg.color}`} />
        </div>
        <span className={`ml-auto text-xs font-semibold ${cfg.color}`}>
          {cfg.label}
        </span>
      </div>

      <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground">
        {product.title}
      </h3>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      {product.pages && (
        <p className="mt-2 text-xs text-muted-foreground/60">{product.pages} páginas</p>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
        <span className="flex items-center gap-1 text-xs font-medium text-amber-600">
          <Clock className="size-3.5" />
          Em breve
        </span>
        <span className="text-xs text-muted-foreground/50">Gratuito</span>
      </div>
    </div>
  )
}

export default function LojaPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("todos")

  const filtered =
    activeFilter === "todos"
      ? products
      : products.filter((p) => p.type === activeFilter)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero compacto */}
        <section className="border-b border-border bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Conhecimento em saúde mental
            </span>
            <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Loja <span className="text-primary">Hummig</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              PDFs, e-books e artigos científicos produzidos pelos especialistas da clínica.
              Conteúdo baseado em evidências para pacientes, familiares e profissionais de saúde.
            </p>
          </div>
        </section>

        {/* Filtros + Grid */}
        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
          {/* Filtros */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {filters.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeFilter === value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <Icon className="size-3.5" />
                {label}
                <span
                  className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${
                    activeFilter === value
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {value === "todos"
                    ? products.length
                    : products.filter((p) => p.type === value).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-sm text-muted-foreground">
              Nenhum item nesta categoria.
            </p>
          )}
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-xl px-4 text-center lg:px-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Quer ser avisado quando lançar?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Entre em contato pela nossa página principal e deixe seu e-mail — avisamos você no lançamento.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href="/#contato">
                  Entrar em contato
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/">Voltar ao site</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

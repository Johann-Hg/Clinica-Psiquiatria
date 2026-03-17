"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain } from "lucide-react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "O que é EMT", href: "#emt" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Médico", href: "#medico" },
  { label: "Contato", href: "#contato" },
  { label: "Loja", href: "/loja" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="/" className="flex items-center gap-2" aria-label="Clinica Hummig - Página inicial">
          <Brain className="size-7 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Hummig
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contato">Agendar Consulta</a>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden" aria-label="Navegação mobile">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a href="#contato" onClick={() => setMobileOpen(false)}>
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

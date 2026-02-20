import { Brain } from "lucide-react"

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "O que é EMT", href: "#emt" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Médico", href: "#medico" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2" aria-label="Clínica NeuroViva - Página inicial">
              <Brain className="size-6 text-primary-foreground" />
              <span className="text-lg font-semibold tracking-tight text-primary-foreground">
                NeuroViva
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Clínica especializada em Estimulação Magnética Transcraniana.
              Tratamento seguro e inovador para a sua saúde mental.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Links rápidos
            </h4>
            <ul className="mt-3 flex flex-col gap-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contato
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/60">
              <p>Av. Paulista, 1578 - Sala 402</p>
              <p>Bela Vista, São Paulo - SP</p>
              <p>(11) 3456-7890</p>
              <p>contato@clinicanuroviva.com.br</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Clínica NeuroViva. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

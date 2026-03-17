import { Brain, MapPin } from "lucide-react"

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
      {/* Mapa */}
      <div className="w-full">
        <div className="flex items-center gap-2 bg-foreground/95 px-4 py-2 lg:px-8">
          <MapPin className="size-4 text-primary-foreground/60" />
          <span className="text-xs text-primary-foreground/60">
            Av. Paulista, 1578 - Sala 402, Bela Vista, São Paulo - SP
          </span>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Av.+Paulista+1578+Sao+Paulo+SP+Brazil&output=embed"
          width="100%"
          height="220"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block border-0 grayscale"
          title="Localização da Clinica Hummig"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2" aria-label="Clinica Hummig - Página inicial">
              <Brain className="size-6 text-primary-foreground" />
              <span className="text-lg font-semibold tracking-tight text-primary-foreground">
                Hummig
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
              <p>contato@clinicahummig.com.br</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Clinica Hummig. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}


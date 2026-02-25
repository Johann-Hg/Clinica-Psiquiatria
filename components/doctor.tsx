"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, GraduationCap, Stethoscope, BookOpen, Brain, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type Doctor = {
  id: number
  name: string
  specialty: string
  crm: string
  image: string
  imageAlt: string
  stats: { icon: React.ElementType; label: string; sub: string }[]
  modal: {
    description: string[]
    methods: string[]
    courses: string[]
  }
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. João Silva",
    specialty: "Especialista em Psiquiatria e Neuromodulação",
    crm: "123.456",
    image: "/images/doctor.jpg",
    imageAlt: "Dr. João Silva, psiquiatra especialista em EMT",
    stats: [
      { icon: GraduationCap, label: "USP", sub: "Formação" },
      { icon: Award, label: "15+ anos", sub: "Experiência" },
      { icon: Stethoscope, label: "5.000+", sub: "Sessões EMT" },
    ],
    modal: {
      description: [
        "Com mais de 15 anos de experiência em psiquiatria, o Dr. João Silva é referência nacional em Estimulação Magnética Transcraniana. Formado pela Universidade de São Paulo (USP), realizou especialização em neuromodulação nos Estados Unidos e é membro da Associação Brasileira de Psiquiatria.",
        "Dedicado à aplicação de tecnologias inovadoras no tratamento de transtornos neuropsiquiátricos, já realizou mais de 5.000 sessões de EMT com resultados expressivos para seus pacientes.",
      ],
      methods: [
        "Estimulação Magnética Transcraniana (EMT)",
        "Estimulação Transcraniana por Corrente Contínua (ETCC)",
        "Psicofarmacologia baseada em evidências",
        "Psiquiatria integrativa",
      ],
      courses: [
        "Residência em Psiquiatria – USP (2008)",
        "Especialização em Neuromodulação – Johns Hopkins University, EUA (2012)",
        "Certificação Internacional em EMT – ISES (2014)",
        "MBA em Gestão em Saúde – FGV (2016)",
        "Curso Avançado em Neurociências – Harvard Medical School (2019)",
      ],
    },
  },
  {
    id: 2,
    name: "Dra. Ana Costa",
    specialty: "Especialista em Psiquiatria e Saúde Mental",
    crm: "654.321",
    image: "/images/doctor.jpg",
    imageAlt: "Dra. Ana Costa, psiquiatra especialista em saúde mental",
    stats: [
      { icon: GraduationCap, label: "UNICAMP", sub: "Formação" },
      { icon: Award, label: "10+ anos", sub: "Experiência" },
      { icon: Stethoscope, label: "3.000+", sub: "Sessões EMT" },
    ],
    modal: {
      description: [
        "Com mais de 10 anos dedicados à psiquiatria clínica, a Dra. Ana Costa é especialista no tratamento de transtornos de ansiedade, depressão e trauma. Formada pela Universidade Estadual de Campinas (UNICAMP), realizou fellowship em saúde mental integrativa na Europa.",
        "Sua abordagem combina o melhor da psiquiatria baseada em evidências com práticas de atenção plena, promovendo o bem-estar global do paciente e resultados duradouros.",
      ],
      methods: [
        "Estimulação Magnética Transcraniana (EMT)",
        "Terapia Cognitivo-Comportamental (TCC) integrada",
        "Psicofarmacologia personalizada",
        "Mindfulness e neurociência aplicada",
      ],
      courses: [
        "Residência em Psiquiatria – UNICAMP (2013)",
        "Fellowship em Saúde Mental Integrativa – Universidade de Lisboa (2016)",
        "Certificação em EMT Clínica – ABP (2017)",
        "Especialização em Trauma e TEPT – ISTSS (2019)",
        "Curso em Neurobiologia da Ansiedade – USP (2021)",
      ],
    },
  },
]

export function Doctor() {
  const [selected, setSelected] = useState<Doctor | null>(null)

  return (
    <section id="medico" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Corpo clínico
          </span>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Médicos Responsáveis
          </h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-16">
          {doctors.map((doctor) => (
            <button
              key={doctor.id}
              onClick={() => setSelected(doctor)}
              className="group flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-left shadow-sm transition-all duration-200 hover:shadow-lg hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:flex-row lg:gap-8"
            >
              {/* Image */}
              <div className="relative shrink-0">
                <div className="relative size-48 overflow-hidden rounded-2xl shadow-xl lg:size-56">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-card px-4 py-2 shadow-md">
                  <p className="text-xs font-medium text-muted-foreground">CRM/SP</p>
                  <p className="text-sm font-bold text-primary">{doctor.crm}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-bold text-foreground">{doctor.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{doctor.specialty}</p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                  {doctor.modal.description[0]}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
                  {doctor.stats.map(({ icon: Icon, label, sub }) => (
                    <div key={sub} className="flex items-center gap-2">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs font-medium text-primary group-hover:underline">
                  Ver perfil completo →
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-5">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl shadow-md">
                    <Image
                      src={selected.image}
                      alt={selected.imageAlt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-xl">{selected.name}</DialogTitle>
                    <p className="mt-0.5 text-sm font-medium text-primary">{selected.specialty}</p>
                    <span className="mt-1 inline-block rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                      CRM/SP {selected.crm}
                    </span>
                  </div>
                </div>
              </DialogHeader>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 pt-2">
                {selected.stats.map(({ icon: Icon, label, sub }) => (
                  <div key={sub} className="flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-3 pt-2">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <Brain className="size-4 text-primary" />
                  Sobre
                </h4>
                {selected.modal.description.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              {/* Methods */}
              <div className="space-y-3 pt-2">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <Stethoscope className="size-4 text-primary" />
                  Métodos e Abordagens
                </h4>
                <ul className="space-y-2">
                  {selected.modal.methods.map((method) => (
                    <li key={method} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div className="space-y-3 pt-2">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <BookOpen className="size-4 text-primary" />
                  Formação e Certificações
                </h4>
                <ul className="space-y-2">
                  {selected.modal.courses.map((course) => (
                    <li key={course} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

// TODO: atualize para o domínio real antes de publicar
const siteUrl = 'https://neuroviva.com.br'

export const metadata: Metadata = {
  title: {
    default: 'Clínica NeuroViva | Estimulação Magnética Transcraniana (EMT)',
    template: '%s | Clínica NeuroViva',
  },
  description:
    'Clínica especializada em Estimulação Magnética Transcraniana (EMT). Tratamento avançado e seguro para depressão, ansiedade, TOC e outros transtornos neuropsiquiátricos em São Paulo.',
  keywords: [
    'Estimulação Magnética Transcraniana',
    'EMT',
    'psiquiatria',
    'neuromodulação',
    'depressão',
    'ansiedade',
    'TOC',
    'transtorno bipolar',
    'dor crônica',
    'saúde mental',
    'clínica psiquiátrica',
    'São Paulo',
    'ETCC',
  ],
  authors: [{ name: 'Clínica NeuroViva' }],
  creator: 'Clínica NeuroViva',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Clínica NeuroViva',
    title: 'Clínica NeuroViva | Estimulação Magnética Transcraniana (EMT)',
    description:
      'Clínica especializada em Estimulação Magnética Transcraniana (EMT). Tratamento avançado e seguro para depressão, ansiedade, TOC e outros transtornos neuropsiquiátricos em São Paulo.',
    images: [
      {
        url: `${siteUrl}/images/hero-emt.jpg`,
        width: 1200,
        height: 630,
        alt: 'Clínica NeuroViva - Estimulação Magnética Transcraniana em São Paulo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica NeuroViva | Estimulação Magnética Transcraniana (EMT)',
    description:
      'Tratamento avançado para depressão, ansiedade, TOC e outros transtornos. Agende sua consulta.',
    images: [`${siteUrl}/images/hero-emt.jpg`],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#4A7CDB',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Clínica NeuroViva',
  description:
    'Clínica especializada em Estimulação Magnética Transcraniana (EMT) para tratamento de depressão, ansiedade, TOC e outros transtornos neuropsiquiátricos.',
  url: siteUrl,
  telephone: '+55-11-3456-7890',
  image: `${siteUrl}/images/hero-emt.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Paulista, 1578 - Sala 402',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01310-200',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  medicalSpecialty: 'Psychiatry',
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Estimulação Magnética Transcraniana (EMT)',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Estimulação Transcraniana por Corrente Contínua (ETCC)',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

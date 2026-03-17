import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhatIsEMT } from "@/components/what-is-emt"
import { Conditions } from "@/components/conditions"
import { Doctor } from "@/components/doctor"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIsEMT />
        <Conditions />
        <Doctor />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

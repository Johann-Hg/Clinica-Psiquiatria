"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511345678900"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="size-7 fill-white text-white" />
    </a>
  )
}

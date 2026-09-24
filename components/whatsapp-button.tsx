"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MessageCircle } from "lucide-react"
import { waContacts, waLink } from "@/lib/site"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            className="w-[300px] overflow-hidden border-2 border-foreground bg-card shadow-soft-lg md:w-[340px]"
          >
            <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wide leading-none">Hubungi Kami</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-primary-foreground/80">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] ring-2 ring-white/40" />
                  WhatsApp &middot; online sekarang
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Tutup"
                className="flex h-8 w-8 items-center justify-center border-2 border-primary-foreground/30 transition-colors hover:bg-primary-foreground/15"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2 p-3">
              {waContacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={waLink(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-transparent p-3 transition-colors hover:border-foreground hover:bg-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MessageCircle size={18} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-highlight">{contact.role}</span>
                    <span className="truncate text-sm font-semibold">{contact.name}</span>
                    <span className="text-xs text-muted-foreground">{contact.label}</span>
                  </span>
                </a>
              ))}
            </div>
            <p className="border-t-2 border-foreground/10 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              Tanggapan cepat selama jam operasional.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      >
        <button
          className={`relative h-14 w-14 overflow-hidden border-2 border-foreground p-0 shadow-soft transition-all duration-300 md:h-16 md:w-16 ${
            isOpen ? "bg-highlight" : "bg-[#25D366] hover:scale-105 hover:bg-[#20BD5A] active:scale-95"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Kontak WhatsApp"
          aria-expanded={isOpen}
        >
          <span className="relative flex h-full w-full items-center justify-center">
            <Image
              src="/images/whatsapp.png"
              alt=""
              fill
              className={`object-contain p-3 transition-all duration-300 md:p-3.5 ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
            />
            <X
              className={`absolute text-white transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
              size={28}
            />
          </span>
        </button>
      </motion.div>
    </div>
  )
}

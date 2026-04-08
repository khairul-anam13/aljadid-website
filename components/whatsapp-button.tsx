"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    { name: "Mba Lala Kantor 1", phone: "6283836323255", label: "+62 838-3632-3255", role: "CUSTOMER SERVICE" },
    { name: "Mba Yuni Kantor 2", phone: "6283866649071", label: "+62 838-6664-9071", role: "CUSTOMER SERVICE" },
    { name: "Khusus Partai Besar", phone: "6281246419239", label: "+62 812-4641-9239", role: "KHUSUS" },
  ]

  return (
    <div className="fixed bottom-24 md:bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-background border-[3px] border-border p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-[290px] md:w-[340px] mb-2"
          >
            <div className="flex items-center justify-between mb-4 border-b-[3px] border-border pb-3">
              <div className="flex flex-col">
                <h3 className="font-display font-black text-xl uppercase tracking-tight leading-none">HUBUNGI KAMI</h3>
                <p className="font-mono text-[9px] font-bold text-muted-foreground mt-1">WHATSAPP PORTAL // ONLINE</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center border-[2px] border-border hover:bg-primary hover:text-background transition-all"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="space-y-2">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 border-[2px] border-border hover:bg-primary transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex flex-col relative z-10">
                    <span className="font-mono text-[9px] font-bold text-muted-foreground group-hover:text-background uppercase opacity-70">
                      {contact.role}
                    </span>
                    <span className="font-bold text-[15px] group-hover:text-background uppercase tracking-tight">
                      {contact.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/80 mt-1">
                      {contact.label}
                    </span>
                  </div>
                  <MessageCircle size={20} className="group-hover:text-background relative z-10 transition-transform group-hover:scale-110" />
                  
                  {/* Hover Background Animation */}
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
                </a>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t-[2px] border-border">
              <p className="text-[10px] font-medium text-muted-foreground text-center">Tanggapan cepat selama jam operasional.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.5,
        }}
      >
        <button
          className={`rounded-full w-16 h-16 p-0 shadow-xl border-[4px] border-border overflow-hidden relative transition-all duration-300
            ${isOpen ? 'bg-primary' : 'bg-[#25D366] hover:bg-[#20BD5A] hover:scale-105 active:scale-95'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="WhatsApp Contacts"
        >
          <div className="relative w-full h-full flex items-center justify-center p-3.5">
             <Image 
              src="/images/whatsapp.png" 
              alt="WhatsApp" 
              fill
              className={`object-contain p-3.5 transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
            />
            <X 
              className={`absolute transition-all duration-300 text-background ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} 
              size={32}
            />
          </div>
        </button>
      </motion.div>
    </div>
  )
}

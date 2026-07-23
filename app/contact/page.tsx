"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  const locations = [
    {
      name: "Al Jadid 1 – Barat",
      desc: "Pusat Produksi Cetak Massal",
      address: "Jalan Menteri Supeno, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.8122660831666!2d110.95672755050514!3d-7.601548781398075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1881ae22a67b%3A0x79fb09f7d40afd81!2sAl%20Jadid%20Offset!5e0!3m2!1sid!2sid!4v1775208060693!5m2!1sid!2sid",
    },
    {
      name: "Al Jadid 2 – Timur",
      desc: "Desain, ATK, & Produksi Spesialis",
      address: "Jl. Rm. Said No.74, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57751",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.4050709903312!2d110.95599397592463!3d-7.600863518159444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1919d31479f9%3A0xfc9c190f0f2e534!2sAl%20Jadid%20Offset%202!5e0!3m2!1sid!2sid!4v1775208103938!5m2!1sid!2sid",
    },
  ]

  const contacts = [
    { name: "Mba Lala – Kantor 1", phone: "6283836323255", label: "+62 838-3632-3255", role: "Customer Service", accent: "secondary" },
    { name: "Mba Yuni – Kantor 2", phone: "6283866649071", label: "+62 838-6664-9071", role: "Customer Service", accent: "secondary" },
    { name: "Pesanan Partai Besar", phone: "6281246419239", label: "+62 812-4641-9239", role: "Prioritas & Marketing", accent: "destructive" },
  ]

  const accentClasses = {
    primary: { text: "text-primary", groupHoverText: "group-hover:text-primary" },
    secondary: { text: "text-secondary", groupHoverText: "group-hover:text-secondary" },
    destructive: { text: "text-destructive", groupHoverText: "group-hover:text-destructive" },
  } as const

  return (
    <div className="w-full bg-background min-h-screen">
      {/*
        HERO / HEADER
      */}
      <section className="w-full section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-[2rem] bg-foreground text-background p-8 md:p-14 flex flex-col justify-between min-h-[320px] shadow-soft">
              <div className="text-xs font-semibold text-[#2AA192] tracking-[0.3em] uppercase">
                Terminal Komunikasi
              </div>
              <h1 className="font-display text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.02] mt-16 text-background">
                Sapa <span className="text-primary italic">kami.</span>
              </h1>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex-1 rounded-[2rem] bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-center shadow-soft">
                <span className="w-12 h-[3px] rounded-full bg-primary-foreground/70 mb-6"></span>
                <p className="text-2xl md:text-3xl font-medium leading-snug">
                  Konsultasi material, estimasi biaya, dan eksekusi produksi tanpa basa-basi.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-[1.5rem] bg-muted p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">Respons</span>
                  <span className="font-display text-2xl font-medium">Cepat</span>
                </div>
                <div className="rounded-[1.5rem] bg-foreground text-background p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-[#2AA192] uppercase tracking-wide mb-1">Akses</span>
                  <span className="font-display text-2xl font-medium">Langsung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        MODULAR CONTACTS
      */}
      <section className="w-full section-padding pt-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, idx) => {
              const accent = accentClasses[contact.accent as keyof typeof accentClasses]
              return (
                <a
                  key={idx}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-soft flex flex-col p-8 hover:-translate-y-1 transition-transform"
                >
                  <div className={`tag-pill w-fit mb-6 border ${accent.text} ${accent.text === "text-primary" ? "bg-primary/10 border-primary/25" : accent.text === "text-secondary" ? "bg-secondary/10 border-secondary/25" : "bg-destructive/10 border-destructive/25"}`}>
                    {contact.role}
                  </div>
                  <h3 className={`text-2xl font-display font-medium mb-2 transition-colors ${accent.groupHoverText}`}>
                    {contact.name}
                  </h3>
                  <div className="text-base text-muted-foreground">
                    {contact.label}
                  </div>
                  <div className={`mt-10 flex items-center text-xs font-semibold uppercase tracking-wide text-muted-foreground/60 transition-colors ${accent.groupHoverText}`}>
                    Hubungi via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/*
        MAP LOCATION GRID
      */}
      <section className="w-full section-padding pt-0">
        <div className="container flex flex-col gap-6">
          {locations.map((loc, i) => (
            <div key={i} className="card-soft flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="tag-pill w-fit bg-destructive/10 text-destructive border border-destructive/25 mb-5">Lokasi 0{i + 1}</span>
                <h3 className="font-display text-2xl md:text-4xl font-medium leading-tight mb-5">{loc.name}</h3>
                <div className="w-10 h-1 rounded-full bg-destructive mb-5"></div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {loc.address}
                </p>
              </div>
              <div className="w-full md:w-1/2 min-h-[320px] relative bg-muted">
                <iframe src={loc.mapUrl} className="absolute inset-0 w-full h-full border-none opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

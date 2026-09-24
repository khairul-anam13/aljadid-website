"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Clock, MapPin, MessageCircle, Navigation, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { businessHours, locations, mainPhone, services, waContacts, waLink } from "@/lib/site"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [need, setNeed] = useState(services[0].title)
  const [recipient, setRecipient] = useState(waContacts[0].phone)
  const [message, setMessage] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = [`Halo Al Jadid, saya ${name.trim()}.`, `Kebutuhan: ${need}`, message.trim()].filter(Boolean).join("\n")
    window.open(waLink(recipient, text), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Kontak & Lokasi"
        description="Konsultasi bahan, estimasi biaya, dan jadwal produksi langsung dijawab tim kami — tanpa basa-basi."
        image="/images/kantor2.png"
      />

      {/*
        CONTACT CHANNELS + FORM
      */}
      <section className="section-padding">
        <div className="container grid gap-8 lg:grid-cols-12">
          <Reveal className="space-y-5 lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="border-2 border-foreground bg-muted p-6">
                <span className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground">Jam Operasional</h3>
                <p className="mt-1 font-serif font-bold">{businessHours}</p>
              </div>
              <a
                href={`tel:+${mainPhone.wa}`}
                className="group border-2 border-foreground bg-muted p-6 transition-colors hover:bg-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-highlight text-highlight-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground">Telepon</h3>
                <p className="mt-1 font-serif font-bold group-hover:text-primary">{mainPhone.label}</p>
              </a>
            </div>

            <div className="border-2 border-foreground bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg uppercase tracking-tight">WhatsApp Customer Service</h3>
              <p className="mt-1 font-serif text-sm text-muted-foreground">Pilih kontak sesuai kebutuhan Anda.</p>
              <ul className="mt-5 space-y-3">
                {waContacts.map((contact) => (
                  <li key={contact.phone}>
                    <a
                      href={waLink(contact.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-2 border-foreground/15 p-4 transition-colors hover:border-foreground hover:bg-accent"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-foreground bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[11px] font-bold uppercase tracking-wide text-highlight">{contact.role}</span>
                        <span className="block truncate font-serif font-semibold">{contact.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{contact.label}</span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <form onSubmit={handleSubmit} className="h-full border-2 border-foreground bg-card p-6 shadow-soft sm:p-10">
              <span className="eyebrow mb-3">Kirim Pesan</span>
              <h2 className="heading-md">Ceritakan kebutuhan cetak Anda</h2>
              <p className="mt-2 font-serif text-muted-foreground">
                Isi formulir di bawah, pesan Anda akan langsung terkirim melalui WhatsApp.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wide">Nama / Instansi</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi – SMK Negeri 1"
                    className="field"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wide">Kebutuhan</span>
                  <select value={need} onChange={(e) => setNeed(e.target.value)} className="field">
                    {services.map((service) => (
                      <option key={service.title}>{service.title}</option>
                    ))}
                    <option>Lainnya</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wide">Kirim ke</span>
                  <select value={recipient} onChange={(e) => setRecipient(e.target.value)} className="field">
                    {waContacts.map((contact) => (
                      <option key={contact.phone} value={contact.phone}>
                        {contact.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wide">Pesan</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Jumlah, ukuran, bahan, tenggat waktu, dll."
                    className="field h-auto resize-y py-3"
                  />
                </label>
              </div>

              <Button type="submit" size="lg" className="mt-6 h-12 w-full sm:w-auto">
                <Send /> Kirim via WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      {/*
        LOCATIONS
      */}
      <section className="section-padding bg-muted">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Lokasi Kami"
              title={
                <>
                  Kunjungi <span className="text-primary">bengkel kami</span>
                </>
              }
              description="Dua lokasi di Tegalgede, Karanganyar — siap melayani pesanan Anda secara langsung."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden border-2 border-foreground bg-card shadow-soft">
                  <div className="relative aspect-[16/9] border-b-2 border-foreground bg-muted">
                    <iframe
                      src={loc.mapUrl}
                      title={`Peta lokasi ${loc.name}`}
                      className="absolute inset-0 h-full w-full border-0 grayscale-[0.3] contrast-[1.05]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <span className="tag-pill w-fit border-highlight text-highlight">Lokasi 0{i + 1}</span>
                    <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">{loc.name}</h3>
                    <p className="mt-1 font-mono text-sm font-semibold text-primary">{loc.desc}</p>
                    <p className="mt-4 flex flex-1 items-start gap-3 font-serif leading-relaxed text-muted-foreground">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-highlight" />
                      {loc.address}
                    </p>
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 border-2 border-primary px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Navigation className="h-4 w-4" /> Petunjuk Arah
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

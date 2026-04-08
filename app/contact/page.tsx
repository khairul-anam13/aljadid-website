"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  const locations = [
    {
      name: "AL JADID 1 - BARAT",
      desc: "PUSAT PRODUKSI CETAK MASSAL",
      address: "Jalan Menteri Supeno, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.8122660831666!2d110.95672755050514!3d-7.601548781398075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1881ae22a67b%3A0x79fb09f7d40afd81!2sAl%20Jadid%20Offset!5e0!3m2!1sid!2sid!4v1775208060693!5m2!1sid!2sid",
    },
    {
      name: "AL JADID 2 - TIMUR",
      desc: "DESAIN, ATK, & PRODUKSI SPESIALIS",
      address: "Jl. Rm. Said No.74, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57751",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.4050709903312!2d110.95599397592463!3d-7.600863518159444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1919d31479f9%3A0xfc9c190f0f2e534!2sAl%20Jadid%20Offset%202!5e0!3m2!1sid!2sid!4v1775208103938!5m2!1sid!2sid",
    },
  ]

  const contacts = [
    { name: "Mba Lala Kantor 1", phone: "6283836323255", label: "+62 838-3632-3255", role: "CUSTOMER SERVICE" },
    { name: "Mba Yuni Kantor 2", phone: "6283866649071", label: "+62 838-6664-9071", role: "CUSTOMER SERVICE" },
    { name: "Pesanan Partai Besar", phone: "6281246419239", label: "+62 812-4641-9239", role: "PRIORITAS / MARKETING" },
  ]

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HERO / HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-foreground text-background overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh] xl:min-h-[60vh]">
          {/* Kiri: Tipografi Masif */}
          <div className="p-8 md:p-16 xl:p-24 flex flex-col justify-end border-b-[3px] border-background/20 lg:border-b-0 lg:border-r-[3px] relative">
            <div className="font-mono text-xs font-bold text-primary mb-auto tracking-[0.4em] uppercase pt-4">
              [ TERMINAL KOMUNIKASI ]
            </div>
            <h1 className="text-[5rem] md:text-[8rem] xl:text-[11rem] font-display font-black uppercase tracking-tighter leading-[0.75] mt-24 text-background">
              SAPA<br/>
              <span className="text-primary italic">KAMI.</span>
            </h1>
          </div>
          
          {/* Kanan: Blok Informasi Terstruktur */}
          <div className="flex flex-col">
             <div className="flex-1 p-8 md:p-16 xl:p-24 flex flex-col justify-center bg-primary text-foreground border-b-[3px] border-foreground">
                <span className="w-16 h-[6px] bg-foreground mb-8"></span>
                <p className="text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-tight">
                  Konsultasi material, estimasi biaya, dan eksekusi produksi tanpa basa-basi.
                </p>
             </div>
             <div className="grid grid-cols-2 h-auto md:h-48 text-background">
                <div className="p-8 border-r-[3px] border-background/20 flex flex-col justify-center bg-muted text-foreground">
                  <span className="font-mono text-xs font-black text-primary uppercase mb-2">RESPONS</span>
                  <span className="font-display text-2xl md:text-4xl font-black uppercase">CEPAT</span>
                </div>
                <div className="p-8 flex flex-col justify-center bg-foreground text-background">
                  <span className="font-mono text-xs font-bold text-primary uppercase mb-2">AKSES</span>
                  <span className="font-display text-2xl md:text-4xl font-black uppercase">LANGSUNG</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 
        MODULAR CONTACTS
      */}
      <section className="w-full border-b-[3px] border-border bg-background">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {contacts.map((contact, idx) => (
              <a 
                key={idx}
                href={`https://wa.me/${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border last:border-r-0 hover:bg-muted transition-colors"
              >
                <div className="font-mono text-[10px] font-bold text-primary mb-8 tracking-widest uppercase">
                  {contact.role}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase mb-2 group-hover:text-primary transition-colors">
                  {contact.name}
                </h3>
                <div className="text-lg font-mono font-bold text-muted-foreground">
                  {contact.label}
                </div>
                <div className="mt-12 flex items-center text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors">
                  HUBUNGI VIA WA <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 
        MAP LOCATION GRID
      */}
      <section className="w-full bg-background">
         <div className="w-full">
           {locations.map((loc, i) => (
             <div key={i} className="flex flex-col md:flex-row border-b-[3px] border-border last:border-b-0">
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center border-b-[3px] md:border-b-0 md:border-r-[3px] border-border">
                   <span className="font-mono text-[10px] font-bold text-primary mb-4 block uppercase tracking-widest">// LOKASI 0{i+1}</span>
                   <h3 className="font-display font-black text-3xl md:text-5xl uppercase leading-none mb-6">{loc.name}</h3>
                   <div className="w-12 h-1 bg-primary mb-6"></div>
                   <p className="font-medium text-lg md:text-xl uppercase text-muted-foreground leading-snug">
                     {loc.address}
                   </p>
                </div>
                <div className="w-full md:w-1/2 min-h-[350px] relative bg-muted">
                  <iframe src={loc.mapUrl} className="absolute inset-0 w-full h-full border-none opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
             </div>
           ))}
         </div>
      </section>
    </div>
  )
}

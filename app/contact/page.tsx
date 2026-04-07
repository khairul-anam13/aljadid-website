"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PageHeaderStatic } from "@/components/ui/page-header-static"

export default function ContactPage() {
  const locations = [
    {
      name: "AL JADID 1 - BARAT",
      desc: "Operasi Mesin Cetak",
      address: "Jalan Menteri Supeno, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.8122660831666!2d110.95672755050514!3d-7.601548781398075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1881ae22a67b%3A0x79fb09f7d40afd81!2sAl%20Jadid%20Offset!5e0!3m2!1sid!2sid!4v1775208060693!5m2!1sid!2sid",
    },
    {
      name: "AL JADID 2 - TIMUR",
      desc: "Desain, ATK, Dan Produksi Sampul Rapot",
      address: "Jl. Rm. Said No.74, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57751",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.4050709903312!2d110.95599397592463!3d-7.600863518159444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1919d31479f9%3A0xfc9c190f0f2e534!2sAl%20Jadid%20Offset%202!5e0!3m2!1sid!2sid!4v1775208103938!5m2!1sid!2sid",
    },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault() }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HERO / HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-foreground text-background">
        <div className="container px-6 py-24 md:py-32 border-x-[3px] border-foreground mx-auto flex flex-col justify-end">
          <div className="inline-block bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest mb-6 self-start">
             HUBUNGI KAMI
          </div>
          <h1 className="heading-xl text-balance">
            <span className="block text-primary">LAYANAN</span>
            <span className="block">RESPONSIF.</span>
          </h1>
        </div>
      </section>

      {/* 
        GRID SPLIT: COMMUNICATION CHANNELS vs DIRECT FORM
      */}
      <section className="w-full border-b-[3px] border-border">
         <div className="swiss-grid border-none">
           {/* LEFT: INFORMATION */}
           <div className="col-span-1 md:col-span-2 xl:col-span-5 p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border bg-muted flex flex-col justify-between">
              <div>
                <h2 className="font-display font-black text-4xl lg:text-6xl uppercase tracking-tighter mb-4 leading-[0.9]">
                  SIAP MEMBANTU<br/><span className="text-primary">ANDA</span>
                </h2>
                <p className="text-lg font-medium text-muted-foreground">
                  Kami siap mendiskusikan kebutuhan cetak Anda, memberikan penawaran harga terbaik, hingga konsultasi spesifikasi material yang tepat.
                </p>
              </div>
              
              <div className="mt-16 space-y-0 border-[3px] border-border bg-background">
                <div className="p-6 border-b-[3px] border-border">
                   <div className="font-mono text-xs text-primary font-bold uppercase mb-2">/ TELEPON VOKAL</div>
                   <a href="tel:+622711234567" className="font-bold text-2xl md:text-3xl hover:text-primary transition-colors">+62 271 1234 5678</a>
                </div>
                <div className="p-6 border-b-[3px] border-border">
                   <div className="font-mono text-xs text-primary font-bold uppercase mb-2">/ WHATSAPP FAST-TRACK</div>
                   <a href="https://wa.me/6281234567890" className="font-bold text-2xl md:text-3xl hover:text-[#25d366] transition-colors">+62 812 3456 7890</a>
                </div>
                <div className="p-6">
                   <div className="font-mono text-xs text-primary font-bold uppercase mb-2">/ SURAT ELEKTRONIK</div>
                   <a href="mailto:info@aljadidoffset.com" className="font-bold text-2xl md:text-3xl hover:text-primary transition-colors break-words">INFO@ALJADID.COM</a>
                </div>
              </div>
           </div>

           {/* RIGHT: DATA INGEST FORM */}
           <div className="col-span-1 md:col-span-2 xl:col-span-7 p-8 md:p-12 xl:p-16 flex flex-col justify-center bg-background">
              <div className="font-mono text-xs uppercase tracking-widest font-bold text-muted-foreground mb-8">
                  [ FORMULIR PESANAN & KONSULTASI ]
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold uppercase font-mono">ID KLIEN (NAMA)</Label>
                    <Input id="name" className="h-14 rounded-none border-[3px] border-border focus-visible:ring-primary focus-visible:ring-offset-0 bg-transparent text-lg font-medium" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-bold uppercase font-mono">NOMOR KONTAK</Label>
                    <Input id="phone" className="h-14 rounded-none border-[3px] border-border focus-visible:ring-primary focus-visible:ring-offset-0 bg-transparent text-lg font-medium" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-bold uppercase font-mono">KATEGORI PRODUKSI</Label>
                  <select id="service" className="w-full h-14 px-4 rounded-none border-[3px] border-border focus-visible:outline-none focus:ring-2 focus:ring-primary bg-transparent text-lg font-medium uppercase appearance-none" required>
                    <option value="" className="uppercase">-- PILIH KATEGORI CETAK --</option>
                    <option value="mmt" className="uppercase">OUTDOOR MMT / BANNER</option>
                    <option value="kertas" className="uppercase">KERTAS / BROSUR / BUKU</option>
                    <option value="rapot" className="uppercase">MANAJEMEN SAMPUL RAPOT</option>
                    <option value="sablon" className="uppercase">SABLON KAOS / TAS</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold uppercase font-mono">SPESIFIKASI TEKNIS / PESAN</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    className="rounded-none border-[3px] border-border focus-visible:ring-primary focus-visible:ring-offset-0 bg-transparent text-lg font-medium resize-none"
                    placeholder="DIMENSI, JUMLAH EKSEMPLAR, MATERIAL..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-16 rounded-none text-xl font-bold tracking-widest bg-foreground text-background hover:bg-primary border-[3px] border-foreground hover:border-primary transition-colors">
                  KIRIM PESAN
                </Button>
              </form>
           </div>
         </div>
      </section>

      {/* 
        MAP LOCATION GRID
      */}
      <section className="w-full bg-foreground text-background border-b-[3px] border-border">
         <div className="swiss-grid border-none">
           {locations.map((loc, i) => (
             <div key={i} className="col-span-1 md:col-span-2 xl:col-span-6 flex flex-col md:flex-row border-b-[3px] md:border-b-0 md:border-r-[3px] last:border-r-0 border-border/80 min-h-[400px]">
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between border-b-[3px] md:border-b-0 md:border-r-[3px] border-border/40">
                   <div>
                     <h3 className="font-display font-black text-3xl lg:text-5xl uppercase leading-[0.9] text-primary">{loc.name}</h3>
                     <p className="font-mono text-sm font-bold uppercase tracking-widest text-background/50 mt-4">{loc.desc}</p>
                   </div>
                   <div className="mt-8 font-medium text-lg lg:text-xl uppercase border-t-[3px] border-border/40 pt-6">
                     {loc.address}
                   </div>
                </div>
                <div className="w-full md:w-1/2 relative bg-muted opacity-80 hover:opacity-100 hover:scale-[1.01] transform-gpu transition-all duration-300">
                  <iframe src={loc.mapUrl} className="absolute inset-0 w-full h-full border-none pointer-events-auto" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  {/* Subtle overlay to fit the theme until hover */}
                  <div className="absolute inset-0 bg-primary/10 hover:bg-transparent pointer-events-none transition-colors duration-300"></div>
                </div>
             </div>
           ))}
         </div>
      </section>
    </div>
  )
}

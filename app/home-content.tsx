"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HomeContent() {
  const services = [
    { id: "01", category: "KERTAS / LAPORAN", title: "Cetak Kertas", desc: "Dokumen, formulir, dan manajemen arsip cetak terpadu." },
    { id: "02", category: "OUTDOOR / DISPLAY", title: "Cetak MMT & Banner", desc: "Solusi visual skala besar untuk promosi luar ruang." },
    { id: "03", category: "INDUSTRI / RETAIL", title: "Cetak Sticker", desc: "Sticker vinyl, chromo, dan custom transparan presisi." },
    { id: "04", category: "EDUKASI", title: "Sampul Rapot", desc: "Sampul sistem rapot sekolah berdaya tahan tinggi." },
    { id: "05", category: "EVENT / KOMPETISI", title: "Piala & Trophy", desc: "Fabrikasi penghargaan dan apresiasi kustom." },
    { id: "06", category: "MERCHANDISE", title: "Sablon Kaos & Tas", desc: "Cetak saring untuk pakaian seragam dan tas promosi." },
  ]

  const stats = [
    { number: "20+", label: "TAHUN PENGALAMAN" },
    { number: "5000+", label: "KLIEN PRODUKTIF" },
    { number: "500.000+", label: "PROYEK SELESAI" },
    { number: "09.00-17.00 | Senin-Sabtu", label: "JAM OPERASIONAL" },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  }

  return (
    <div className="w-full">
      {/* 
        HERO SECTION 
        Asymmetrical layout, massive typography, strict borders.
      */}
      <section className="relative w-full border-b-[3px] border-border overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 pointer-events-none">
          <Image src="/images/kantor1.png" alt="Kantor Al Jadid Background" fill className="object-cover object-center" priority />
        </div>
        
        <div className="swiss-grid border-none relative z-10">
          {/* Left Column (Text & Impact) */}
          <div className="pt-24 pb-12 md:pt-40 md:pb-24 col-span-1 md:col-span-3 xl:col-span-8 flex flex-col justify-end p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r-[3px] border-border bg-background/80 dark:bg-background/80 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest mb-6">
                EST. 2005 / KARANGANYAR / JAWA TENGAH
              </div>
              <h1 className="heading-xl text-balance mb-6">
                <span className="block">DESAIN,</span>
                <span className="block text-primary">CETAK,</span>
                <span className="block">DAN ATK</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-2xl leading-tight text-foreground/90 lowercase">
                Infrastruktur percetakan dan sablon kelas industrial dengan efisiensi tinggi, memprioritaskan presisi, kecepatan, dan durabilitas mutlak.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-none h-14 px-8 text-base font-bold tracking-wider hover:bg-foreground hover:text-background transition-colors border-2 border-primary bg-primary shadow-none">
                  <Link href="/products">KONSULTASI CETAK <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Hero Abstract Data / Photography space) */}
          <div className="col-span-1 md:col-span-1 xl:col-span-4 flex flex-col relative min-h-[400px] border-b md:border-b-0 bg-background/50 backdrop-blur-md">
            <div className="p-8 z-10 border-b-[3px] border-border flex-1 flex flex-col justify-between relative overflow-hidden">
 
              
              <div className="mt-8 relative z-20">
                <div className="text-4xl lg:text-7xl font-display font-black text-foreground tracking-tighter mix-blend-difference drop-shadow-md">
                  AL JADID
                  <br />OFFSET
                  <br /><span className="text-primary">SEJAK 2005</span>
                </div>
              </div>
            </div>

            {/* Quick stats on the hero right column */}
            <div className="grid grid-cols-2 mt-auto z-20 bg-background/90 backdrop-blur-sm relative">
              {stats.slice(0,2).map((stat, i) => {
                const isLong = stat.number.length > 10;
                return (
                  <div key={i} className="p-6 border-t-[3px] border-r-[3px] last:border-r-0 border-border flex flex-col justify-start">
                    <div className={`font-display font-black text-primary mb-1 leading-none ${isLong ? 'text-xl md:text-2xl' : 'text-3xl'}`}>{stat.number}</div>
                    <div className="text-xs font-bold leading-none mt-auto pt-2">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 
        SERVICES SECTION 
      */}
      <section className="w-full border-b-[3px] border-border bg-background">
        <div className="swiss-grid border-none">
          <div className="col-span-1 md:col-span-4 xl:col-span-12 p-6 md:p-12 border-b-[3px] border-border flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight">KAPABILITAS<br />TEKNIS.</h2>
            </div>
            <p className="max-w-md font-medium text-lg leading-snug">
              Inventaris infrastruktur layanan kami mencakup ruang lingkup produksi kertas, makro-visual, hingga distribusi penghargaan fisik.
            </p>
          </div>

          {services.map((service, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group col-span-1 md:col-span-2 xl:col-span-4 p-8 border-b-[3px] md:border-b-[3px] xl:border-b-0 border-r-[3px] border-border hover:bg-primary transition-colors cursor-pointer flex flex-col justify-between min-h-[300px]"
            >
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-sm font-bold text-muted-foreground group-hover:text-primary-foreground/70">{service.id}</span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold group-hover:text-primary-foreground/90">{service.category}</span>
              </div>
              <div className="mt-16">
                <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-4 group-hover:text-primary-foreground transition-colors leading-[0.9]">
                  {service.title}
                </h3>
                <p className="font-medium group-hover:text-primary-foreground/90 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 
        STATEMENT & SECONDARY STATS SECTION 
      */}
      <section className="relative w-full bg-foreground text-background overflow-hidden border-b-[3px] border-border">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity grayscale pointer-events-none">
          <Image src="/images/kantor2.png" alt="Proses Cetak" fill className="object-cover" />
        </div>
        <div className="container px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-5xl">
            <h2 className="heading-lg text-background mb-12 lowercase leading-[0.9] drop-shadow-lg">
              Kami mengeliminasi variabel <span className="text-primary italic">keraguan</span> dari persamaan proses manufaktur cetak Anda.
            </h2>
            <div className="flex flex-col w-full mt-20 border-t-[3px] border-border/80">
              {stats.map((stat, i) => {
                const isLong = stat.number.length > 15;
                return (
                  <div key={i} className="flex flex-col lg:flex-row lg:items-end justify-between py-6 md:py-10 border-b-[3px] border-border/80 gap-2 lg:gap-8 hover:bg-background/5 transition-colors">
                    <div className={`font-display font-black text-primary tracking-tighter drop-shadow-md leading-[0.85] w-full lg:w-auto break-words ${isLong ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base font-bold uppercase tracking-widest text-background/90 drop-shadow-sm lg:pb-2 text-left lg:text-right w-full lg:w-auto">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 
        CLIENT / REVIEW SECTION 
      */}
      <section className="relative w-full border-b-[3px] border-border bg-background">
        <div className="swiss-grid border-none">
          <div className="col-span-1 md:col-span-4 xl:col-span-4 bg-muted p-8 md:p-12 border-b-[3px] md:border-b-0 border-r-[3px] border-border flex flex-col justify-center">
             <h2 className="text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.9] text-foreground">
               STANDAR<br/>MUTU<br/><span className="text-primary">TERUJI</span>.
             </h2>
             <p className="mt-6 font-medium text-lg leading-snug text-muted-foreground">
               Divalidasi oleh instansi pendidikan, korporat lokal, dan ribuan usaha di Karanganyar.
             </p>
          </div>
          <div className="col-span-1 md:col-span-4 xl:col-span-8 grid grid-cols-1 md:grid-cols-2">
            {[
              {
                id: "REV-01",
                text: "Durabilitas sampul rapot sekolah sangat superior. Integrasi desain dan bahan di luar ekspektasi anggaran awal kami.",
                author: "Budi S.",
                org: "Instansi Sekolah"
              },
              {
                id: "REV-02",
                text: "Dimensi cetak skala raksasa untuk kampanye outdoor kami diproses tanpa penurunan resolusi (DPI) sama sekali. Sangat absolut.",
                author: "Siti Rahayu",
                org: "Retail Corp"
              }
            ].map((review, i) => (
              <div key={i} className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] last:border-r-0 border-border flex flex-col justify-between">
                 <div className="font-mono text-xs uppercase text-primary font-bold mb-8">LOG / {review.id}</div>
                 <h3 className="text-xl md:text-2xl font-bold lowercase leading-snug mb-8">&quot;{review.text}&quot;</h3>
                 <div className="flex items-center gap-4 pt-6 border-t-[3px] border-foreground">
                   <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center font-display font-bold text-xl">{review.author.charAt(0)}</div>
                   <div>
                     <div className="font-bold uppercase tracking-widest text-sm">{review.author}</div>
                     <div className="text-muted-foreground text-sm font-mono">{review.org}</div>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CTA FOOTER BRIDGE
      */}
      <section className="relative w-full bg-primary text-primary-foreground border-b-[3px] border-border overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply grayscale pointer-events-none">
           <Image src="/images/kantor2-2.png" alt="Lokasi Operasional" fill className="object-cover" />
         </div>
         <div className="container px-6 py-24 md:py-32 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] mb-6 drop-shadow-md">
                MULAI<br/>KONEKSI.
              </h2>
            </div>
            <div className="w-full md:w-auto">
              <Button asChild size="lg" className="w-full md:w-auto rounded-none h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-bold tracking-widest bg-foreground text-background hover:bg-background hover:text-foreground transition-colors border-[3px] border-foreground hover:border-background shadow-xl">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  INISIASI WHATSAPP <ArrowUpRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </div>
         </div>
      </section>
    </div>
  )
}

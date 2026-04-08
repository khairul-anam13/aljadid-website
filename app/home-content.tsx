"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HomeContent() {
  const services = [
    { id: "01", category: "DOKUMEN / BISNIS", title: "Cetak Dokumen", desc: "Formulir, laporan, dan administrasi perkantoran dengan presisi tinggi.", image: "/produk/rapot.png" },
    { id: "02", category: "VISUAL OUTDOOR", title: "Cetak Banner", desc: "MMT skala besar untuk promosi luar ruang yang tahan cuaca.", image: "/produk/mmt.png" },
    { id: "03", category: "PRODUK / RETAIL", title: "Stiker Label", desc: "Label vinyl dan cutting custom untuk identitas produk Anda.", image: "/produk/sticker.png" },
    { id: "04", category: "PENDIDIKAN", title: "Sampul Rapot", desc: "Produksi sampul rapot sekolah dengan standar durabilitas tinggi.", image: "/produk/rapot.png" },
    { id: "05", category: "PENGHARGAAN", title: "Piala & Plakat", desc: "Penghargaan eksklusif dan souvenir akrilik dengan desain elegan.", image: "/produk/piala.png" },
    { id: "06", category: "KONVEKSI", title: "Sablon & Merch", desc: "Sablon kaos dan merchandise branding untuk komunitas & instansi.", image: "/produk/kaos.png" },
  ]

  const marqueeServices = [...services, ...services]

  // Fix: Shortened numbers and moved descriptive text into labels for efficient spacing
  const stats = [
    { number: "20+", label: "TAHUN PENGALAMAN" },
    { number: "5.000+", label: "KLIEN PRODUKTIF" },
    { number: "500K+", label: "PROYEK SELESAI" },
    { number: "09.00-17.00", label: "SENIN S/D SABTU" },
  ]

  const reviews = [
    { id: "REV-01", text: "Durabilitas sampul rapot sekolah sangat superior. Integrasi bahan di luar ekspektasi anggaran awal kami.", author: "Budi S.", org: "Instansi Sekolah" },
    { id: "REV-02", text: "Dimensi cetak skala raksasa outdoor kami diproses tanpa penurunan resolusi pixel sedikitpun. Sangat absolut.", author: "Siti Rahayu", org: "Retail Corp" },
    { id: "REV-03", text: "Presisi potong dan keseragaman warna pada cetak masal sangat konsisten. Vendor terpercaya 100%.", author: "Arif H.", org: "Event Organizer" },
    { id: "REV-04", text: "Sablon seragam karyawan selesai tepat waktu dengan jahitan kuat. Sangat direkomendasikan untuk industri.", author: "Nisa M.", org: "Corporate" },
    { id: "REV-05", text: "Warna cetakan brosur sama persis dengan kode pantone yang kami minta. Kualitas offset tak tertandingi.", author: "Dimas", org: "Agency Iklan" },
  ]

  // Fix: Duplicate exactly once for flawless seamless 50% loop
  const marqueeReviews = [...reviews, ...reviews]

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
      */}
      <section className="relative w-full border-b-[3px] border-border overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image 
            src="/images/kantor1.png" 
            alt="Kantor Al Jadid Background" 
            fill 
            className="object-cover object-center mix-blend-multiply" 
            style={{ filter: "grayscale(50%)" }}
            priority 
          />
        </div>
        
        <div className="swiss-grid border-none relative z-10">
          
          {/* Left Column */}
          <div className="col-span-1 md:col-span-1 xl:col-span-4 flex flex-col relative min-h-[400px] border-b md:border-b-0 md:border-r-[3px] border-border bg-background/70">
            <div className="p-8 z-10 border-b-[3px] border-border flex-1 flex flex-col justify-center items-center relative overflow-hidden">
              <div className="relative w-full h-full max-w-[250px] max-h-[250px] opacity-90 drop-shadow-lg">
                 <Image src="/images/logo.png" alt="Logo Al Jadid" fill className="object-contain" priority />
              </div>
            </div>

            {/* Quick stats on the hero left column */}
            <div className="grid grid-cols-2 mt-auto z-20 bg-background/90 relative border-t-[3px] border-border">
              {stats.slice(0,2).map((stat, i) => (
                <div key={i} className="p-6 border-r-[3px] last:border-r-0 border-border flex flex-col justify-start">
                  <div className="font-display font-black text-primary mb-1 leading-none text-2xl lg:text-3xl">{stat.number}</div>
                  <div className="text-xs font-bold leading-none mt-auto pt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Text & Impact) */}
          <div className="pt-24 pb-12 md:pt-40 md:pb-24 col-span-1 md:col-span-3 xl:col-span-8 flex flex-col justify-end p-6 sm:p-8 md:p-16 bg-background/80">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest mb-6">
                EST. 2005 / KARANGANYAR
              </div>
              <h1 className="text-6xl md:text-8xl xl:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-balance mb-8">
                <span className="block">DETAIL,</span>
                <span className="block text-primary">KUALITAS,</span>
                <span className="block">& SOLUSI.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-2xl leading-tight text-foreground/90 lowercase">
                Partner setia produksi visual Anda sejak 2005. Menghadirkan standar cetak industrial dengan akurasi warna dan ketepatan waktu yang mutlak.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-none h-16 px-10 text-lg font-bold tracking-wider hover:bg-foreground hover:text-background transition-colors border-[3px] border-primary bg-primary shadow-none">
                  <Link href="/products">MULAILAH BERSAMA KAMI <ArrowRight className="ml-3 h-6 w-6" /></Link>
                </Button>
              </div>
            </motion.div>
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
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight leading-[0.9]">SOLUSI<br />VISUAL.</h2>
            </div>
            <p className="max-w-md font-medium text-lg leading-snug">
              Layanan kami mencakup spektrum luas, mulai dari kebutuhan manufaktur, branding produk, hingga distribusi perlengkapan sekolah.
            </p>
          </div>


          {/* Infinite Horizontal Marquee Services */}
          <div className="col-span-1 md:col-span-4 xl:col-span-12 overflow-hidden bg-background relative border-t-0">
             {/* Fading Edges for better visual transition */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              className="flex min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {marqueeServices.map((service, index) => (
                <div 
                  key={index}
                  className="w-72 md:w-80 p-6 border-r-[3px] border-border flex flex-col gap-6 bg-background hover:bg-muted transition-colors cursor-default"
                >
                  {/* Compact Product Visual - Forced White Background */}
                  <div className="w-full aspect-square relative bg-white border-[3px] border-border overflow-hidden shrink-0 group/img shadow-inner">
                    {/* Technical Grid Overlay - Lighter for white background */}
                    <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" 
                      style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
                    </div>
                    
                    {/* Product Image */}
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          className="object-contain transition-all duration-700 group-hover/img:scale-110 group-hover/img:rotate-2" 
                        />
                      </div>
                    </div>

                    {/* Technical Tag */}
                    <div className="absolute top-2 left-2 z-20">
                       <div className="bg-foreground text-background text-[8px] font-mono font-bold px-1.5 py-0.5 uppercase leading-none border border-foreground">
                         AJ-{service.id}
                       </div>
                    </div>

                    {/* Scan Line Animation */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                       <div className="w-full h-[2px] bg-primary/30 absolute top-0 animate-[scan_3s_linear_infinite]"></div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[9px] uppercase tracking-tighter font-bold text-primary px-1.5 py-0.5 bg-primary/10 border border-primary/20">
                        {service.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-black uppercase tracking-tight leading-[0.9] text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 font-medium text-muted-foreground text-xs leading-snug line-clamp-2 min-h-[2.5rem]">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        STATEMENT & SECONDARY STATS SECTION 
      */}
      <section className="relative w-full bg-foreground text-background border-b-[3px] border-border overflow-hidden flex flex-col relative z-0">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity grayscale pointer-events-none">
          <Image src="/images/kantor2.png" alt="Proses Cetak" fill className="object-cover" />
        </div>
        
        <div className="container px-6 py-20 lg:py-28 relative z-10 flex flex-col lg:flex-row justify-between gap-16 border-b-[3px] border-border/40">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl font-display font-black leading-[0.85] tracking-tighter drop-shadow-lg text-background lowercase">
              Setiap milimeter adalah komitmen kami terhadap <span className="text-primary">kualitas</span> Anda.
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex items-end">
              <p className="text-lg text-muted-foreground font-medium max-w-md">Teknologi cetak dan pemotongan terkini untuk memastikan akurasi hasil yang konsisten dan memuaskan setiap saat.</p>
          </div>
        </div>

        {/* Repositioned Grid Stats layout. Fit and cleanly centered */}
        <div className="container px-0 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-y-[3px] divide-border/40 border-l-[3px] border-border/40">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 md:p-12 flex flex-col items-center justify-center text-center bg-foreground/20 hover:bg-background/5 transition-colors group">
                <div className="font-display font-black text-primary text-4xl sm:text-5xl md:text-6xl tracking-tighter drop-shadow-md mb-2 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-background/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CLIENT / REVIEW SECTION 
      */}
      <section className="relative w-full border-b-[3px] border-border bg-background flex flex-col xl:flex-row">
        {/* Review Title Title Area */}
        <div className="w-full xl:w-1/3 bg-muted p-8 md:p-12 border-b-[3px] xl:border-b-0 xl:border-r-[3px] border-border flex flex-col justify-center shrink-0 z-10">
            <h2 className="text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.9] text-foreground">
              DIPERCAYA<br/>RIBUAN<br/><span className="text-primary">KLIEN</span>.
            </h2>
            <p className="mt-6 font-medium text-lg leading-snug text-muted-foreground">
              Telah tervalidasi oleh berbagai instansi pendidikan, korporasi, hingga UMKM di seluruh wilayah Karesidenan Surakarta.
            </p>
        </div>

        {/* Moving Marquee Area - Repaired Infinite Scroll Loop logic */}
        <div className="w-full xl:w-2/3 flex items-center bg-background overflow-hidden relative border-y-[3px] xl:border-y-0 border-border">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Fix: duration set to 60 for slower visibility, perfectly moving from 0 to -50% for identical loop matching */}
          <motion.div 
            className="flex min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 55, repeat: Infinity }}
          >
            {marqueeReviews.map((review, i) => (
              <div 
                key={i} 
                className="w-80 md:w-[400px] p-8 md:p-12 border-r-[3px] border-border flex flex-col justify-between shrink-0 bg-background hover:bg-muted transition-colors cursor-default"
                style={{ height: "450px" }}
              >
                  <div className="font-mono text-xs uppercase text-primary font-bold mb-6">LOG / {review.id}</div>
                  <h3 className="text-xl md:text-2xl font-bold lowercase leading-snug mb-6 text-foreground/90">&quot;{review.text}&quot;</h3>
                  <div className="flex items-center gap-4 pt-6 mt-auto border-t-[3px] border-border">
                    <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center font-display font-black text-2xl shrink-0">{review.author.charAt(0)}</div>
                    <div className="overflow-hidden">
                      <div className="font-bold uppercase tracking-widest text-sm text-foreground truncate">{review.author}</div>
                      <div className="text-muted-foreground text-xs font-mono font-bold mt-1 truncate">{review.org}</div>
                    </div>
                  </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 
        CTA FOOTER BRIDGE
      */}
      <section className="relative w-full flex flex-col">
          <div className="relative bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply grayscale pointer-events-none">
              <Image src="/images/kantor2-2.png" alt="Lokasi Operasional" fill className="object-cover" />
            </div>
            <div className="container px-6 py-24 md:py-32 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                <div>
                  <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] mb-6 drop-shadow-md">
                    WJUDKAN<br/>VISI ANDA.
                  </h2>
                </div>
                <div className="w-full md:w-auto">
                  <Button asChild size="lg" className="w-full md:w-auto rounded-none h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-bold tracking-widest bg-foreground text-background hover:bg-background hover:text-foreground transition-colors border-[3px] border-foreground hover:border-background shadow-none">
                    <a href="https://wa.me/6281393242084" target="_blank" rel="noopener noreferrer">
                      DISKUSIKAN SEKARANG <ArrowUpRight className="ml-3 h-6 w-6" />
                    </a>
                  </Button>
                </div>
            </div>
          </div>
          
          {/* Website Ads Footer Strip */}
          <div className="w-full bg-foreground text-background py-4 flex items-center justify-center border-t border-background/20 relative z-20">
            <p className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase text-center px-4">
              Apabila ingin membuat website seperti ini hubungi <a href="https://wa.me/6281393242084" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-muted transition-colors underline underline-offset-4">0813-9324-2084 WA</a>
            </p>
          </div>
      </section>
    </div>
  )
}

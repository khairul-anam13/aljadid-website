"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function HomeContent() {
  // Ink-swatch accent rotation: terracotta / teal / ochre
  const inkAccents = [
    { text: "text-primary", bg: "bg-primary", fg: "text-primary-foreground", tint: "bg-primary/10", border: "border-primary/25" },
    { text: "text-secondary", bg: "bg-secondary", fg: "text-secondary-foreground", tint: "bg-secondary/10", border: "border-secondary/25" },
    { text: "text-highlight", bg: "bg-highlight", fg: "text-highlight-foreground", tint: "bg-highlight/15", border: "border-highlight/30" },
  ]

  const services = [
    { id: "01", category: "Dokumen & Bisnis", title: "Cetak Dokumen", desc: "Formulir, laporan, dan administrasi perkantoran dengan presisi tinggi.", image: "/produk/rapot.png" },
    { id: "02", category: "Visual Outdoor", title: "Cetak Banner", desc: "MMT skala besar untuk promosi luar ruang yang tahan cuaca.", image: "/produk/mmt.png" },
    { id: "03", category: "Produk & Retail", title: "Stiker Label", desc: "Label vinyl dan cutting custom untuk identitas produk Anda.", image: "/produk/sticker.png" },
    { id: "04", category: "Pendidikan", title: "Sampul Rapot", desc: "Produksi sampul rapot sekolah dengan standar durabilitas tinggi.", image: "/produk/rapot.png" },
    { id: "05", category: "Penghargaan", title: "Piala & Plakat", desc: "Penghargaan eksklusif dan souvenir akrilik dengan desain elegan.", image: "/produk/piala.png" },
    { id: "06", category: "Konveksi", title: "Sablon & Merch", desc: "Sablon kaos dan merchandise branding untuk komunitas & instansi.", image: "/produk/kaos.png" },
  ]

  const marqueeServices = [...services, ...services]

  const stats = [
    { number: "20+", label: "Tahun Pengalaman" },
    { number: "5.000+", label: "Klien Produktif" },
    { number: "500K+", label: "Proyek Selesai" },
    { number: "09.00–17.00", label: "Senin s/d Sabtu" },
  ]

  const reviews = [
    { id: "01", text: "Durabilitas sampul rapot sekolah sangat superior. Integrasi bahan di luar ekspektasi anggaran awal kami.", author: "Budi S.", org: "Instansi Sekolah" },
    { id: "02", text: "Dimensi cetak skala raksasa outdoor kami diproses tanpa penurunan resolusi pixel sedikitpun. Sangat memuaskan.", author: "Siti Rahayu", org: "Retail Corp" },
    { id: "03", text: "Presisi potong dan keseragaman warna pada cetak masal sangat konsisten. Vendor yang benar-benar terpercaya.", author: "Arif H.", org: "Event Organizer" },
    { id: "04", text: "Sablon seragam karyawan selesai tepat waktu dengan jahitan kuat. Sangat direkomendasikan untuk industri.", author: "Nisa M.", org: "Corporate" },
    { id: "05", text: "Warna cetakan brosur sama persis dengan kode pantone yang kami minta. Kualitas offset tak tertandingi.", author: "Dimas", org: "Agency Iklan" },
  ]

  const marqueeReviews = [...reviews, ...reviews]

  return (
    <div className="w-full">
      {/*
        HERO SECTION
      */}
      <section className="relative w-full overflow-hidden section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="tag-pill bg-highlight/15 text-highlight-foreground border border-highlight/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                Est. 2005 &middot; Karanganyar
              </div>
              <h1 className="heading-xl text-balance mb-6">
                Detail, kualitas, &amp; <span className="text-primary italic">solusi</span> cetak Anda.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-9">
                Partner setia produksi visual Anda sejak 2005. Menghadirkan standar cetak industrial dengan akurasi warna dan ketepatan waktu yang mutlak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base font-semibold shadow-soft">
                  <Link href="/products">Mulai Bersama Kami <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="card-soft p-5">
                    <div className="font-display text-2xl lg:text-3xl font-medium text-primary mb-1 leading-none">{stat.number}</div>
                    <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft-lg border border-border/70">
                <Image
                  src="/images/kantor1.png"
                  alt="Kantor Al Jadid Offset"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-5 left-5 right-5 card-soft bg-card/90 backdrop-blur-sm p-4 flex items-center gap-3">
                  <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden bg-white border border-border/70">
                    <Image src="/images/logo.png" alt="Logo Al Jadid" fill className="object-contain p-1" />
                  </div>
                  <div>
                    <div className="font-display text-base font-medium leading-tight">Al Jadid Offset</div>
                    <div className="text-xs text-muted-foreground">Percetakan &amp; kreasi visual</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*
        SERVICES SECTION
      */}
      <section className="w-full section-padding bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <h2 className="heading-lg text-balance">Solusi visual, satu atap.</h2>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Layanan kami mencakup spektrum luas, mulai dari kebutuhan manufaktur, branding produk, hingga distribusi perlengkapan sekolah.
            </p>
          </div>
        </div>

        {/* Infinite Horizontal Marquee Services */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex min-w-max gap-5 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {marqueeServices.map((service, index) => {
              const accent = inkAccents[index % inkAccents.length]
              return (
                <div
                  key={index}
                  className="w-72 md:w-80 card-soft p-4 flex flex-col gap-4 shrink-0"
                >
                  <div className="w-full aspect-square relative bg-white rounded-2xl overflow-hidden shrink-0 border border-border/60">
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <span className={`tag-pill w-fit ${accent.text} ${accent.tint} border ${accent.border}`}>
                      {service.category}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium leading-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-muted-foreground text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/*
        STATEMENT & SECONDARY STATS SECTION
      */}
      <section className="relative w-full bg-foreground text-background overflow-hidden section-padding">
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity grayscale pointer-events-none">
          <Image src="/images/kantor2.png" alt="Proses Cetak" fill className="object-cover" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-background">
                Setiap milimeter adalah komitmen kami terhadap <span className="text-primary italic">kualitas</span> Anda.
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex items-end">
              <p className="text-lg text-background/60 leading-relaxed max-w-md">
                Teknologi cetak dan pemotongan terkini untuk memastikan akurasi hasil yang konsisten dan memuaskan setiap saat.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-background/5 border border-background/10 p-6 md:p-8 flex flex-col items-center justify-center text-center hover:bg-background/10 transition-colors">
                <div className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight mb-2 text-background">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-background/60">
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
      <section className="relative w-full section-padding">
        <div className="container">
          <div className="max-w-xl mb-12">
            <h2 className="heading-lg text-balance">
              Dipercaya ribuan <span className="text-primary italic">klien</span>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Telah tervalidasi oleh berbagai instansi pendidikan, korporasi, hingga UMKM di seluruh wilayah Karesidenan Surakarta.
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex min-w-max gap-5 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 55, repeat: Infinity }}
          >
            {marqueeReviews.map((review, i) => {
              const accent = inkAccents[i % inkAccents.length]
              return (
                <div
                  key={i}
                  className="w-80 md:w-[380px] p-8 card-soft flex flex-col justify-between shrink-0"
                  style={{ minHeight: "320px" }}
                >
                  <Quote className={`h-7 w-7 mb-5 ${accent.text}`} strokeWidth={1.5} />
                  <h3 className="text-lg leading-snug mb-6 text-foreground/90 flex-1">&ldquo;{review.text}&rdquo;</h3>
                  <div className="flex items-center gap-3 pt-5 mt-auto border-t border-border/70">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-medium text-lg shrink-0 ${accent.bg} ${accent.fg}`}>
                      {review.author.charAt(0)}
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-semibold text-sm text-foreground truncate">{review.author}</div>
                      <div className="text-muted-foreground text-xs mt-0.5 truncate">{review.org}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/*
        CTA FOOTER BRIDGE
      */}
      <section className="relative w-full flex flex-col">
        <div className="container">
          <div className="relative bg-primary text-primary-foreground overflow-hidden rounded-[2.5rem]">
            <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply grayscale pointer-events-none">
              <Image src="/images/kantor2-2.png" alt="Lokasi Operasional" fill className="object-cover" />
            </div>
            <div className="px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-center md:text-left text-primary-foreground">
                Wujudkan visi Anda bersama kami.
              </h2>
              <div className="w-full md:w-auto shrink-0">
                <Button asChild size="lg" className="w-full md:w-auto rounded-full h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-semibold bg-foreground text-background hover:bg-background hover:text-foreground transition-colors shadow-none">
                  <a href="https://wa.me/6281393242084" target="_blank" rel="noopener noreferrer">
                    Diskusikan Sekarang <ArrowUpRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Website Ads Footer Strip */}
        <div className="w-full py-4 flex items-center justify-center mt-8">
          <p className="text-xs md:text-sm text-muted-foreground text-center px-4">
            Apabila ingin membuat website seperti ini hubungi <a href="https://wa.me/6281393242084" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-primary transition-colors underline underline-offset-4">0813-9324-2084</a>
          </p>
        </div>
      </section>
    </div>
  )
}

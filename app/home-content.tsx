"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  FolderCheck,
  MessageSquareText,
  Package,
  Palette,
  Printer,
  Quote,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/site"

const stats = [
  { number: "20+", label: "Tahun Pengalaman", icon: Award },
  { number: "5.000+", label: "Klien Produktif", icon: Users },
  { number: "500K+", label: "Proyek Selesai", icon: FolderCheck },
  { number: "09.00–17.00", label: "Senin s/d Sabtu", icon: Clock },
]

const heroPoints = ["Kualitas terjamin", "Akurasi warna", "Tepat waktu"]

const aboutPoints = [
  "Mesin cetak digital & offset terkini",
  "Tim produksi berpengalaman",
  "Didukung layanan desain grafis",
  "Pengiriman ke berbagai kota",
]

const advantages = [
  {
    icon: ShieldCheck,
    title: "Kualitas Tanpa Kompromi",
    desc: "Standar cetak industrial dengan akurasi warna yang konsisten di setiap pesanan.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    desc: "Produksi terjadwal agar pesanan selesai sesuai tenggat yang disepakati.",
  },
  {
    icon: Palette,
    title: "Layanan Desain Grafis",
    desc: "Tim desain siap membantu mewujudkan ide Anda sebelum naik cetak.",
  },
  {
    icon: Truck,
    title: "Jangkauan Luas",
    desc: "Pesanan dikemas rapi dan dikirim aman hingga ke luar Karesidenan Surakarta.",
  },
]

const steps = [
  { icon: MessageSquareText, title: "Konsultasi", desc: "Hubungi CS kami via WhatsApp atau datang langsung ke kantor." },
  { icon: Palette, title: "Desain & Persetujuan", desc: "Kirim desain Anda atau buat bersama tim desain kami." },
  { icon: Printer, title: "Produksi", desc: "Pesanan diproses dengan kontrol kualitas di setiap tahap." },
  { icon: Package, title: "Ambil / Kirim", desc: "Ambil di kantor atau kami kirim ke alamat Anda." },
]

const reviews = [
  { text: "Durabilitas sampul rapot sekolah sangat superior. Integrasi bahan di luar ekspektasi anggaran awal kami.", author: "Budi S.", org: "Instansi Sekolah" },
  { text: "Dimensi cetak skala raksasa outdoor kami diproses tanpa penurunan resolusi pixel sedikitpun. Sangat memuaskan.", author: "Siti Rahayu", org: "Retail Corp" },
  { text: "Presisi potong dan keseragaman warna pada cetak masal sangat konsisten. Vendor yang benar-benar terpercaya.", author: "Arif H.", org: "Event Organizer" },
  { text: "Sablon seragam karyawan selesai tepat waktu dengan jahitan kuat. Sangat direkomendasikan untuk industri.", author: "Nisa M.", org: "Corporate" },
  { text: "Warna cetakan brosur sama persis dengan kode pantone yang kami minta. Kualitas offset tak tertandingi.", author: "Dimas", org: "Agency Iklan" },
]

export default function HomeContent() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="w-full overflow-x-clip">
      {/*
        HERO
      */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent via-accent/40 to-background">
        <div
          aria-hidden
          className="absolute inset-0 bg-dots text-primary/15 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
        />
        <div aria-hidden className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative grid items-center gap-14 pb-28 pt-12 md:pt-20 lg:grid-cols-2 lg:gap-12 lg:pb-36">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold text-primary shadow-soft sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-highlight" />
              </span>
              Percetakan Terpercaya di Karanganyar Sejak 2005
            </span>

            <h1 className="heading-xl mt-6 text-balance">
              Solusi <span className="text-primary">Percetakan Profesional</span> untuk Bisnis &amp; Instansi Anda
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Partner setia produksi visual Anda sejak 2005. Menghadirkan standar cetak industrial dengan akurasi warna dan
              ketepatan waktu yang mutlak.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 px-7 text-base font-semibold">
                <Link href="/products">
                  Lihat Produk <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 border-primary/30 bg-white px-7 text-base font-semibold text-primary hover:bg-accent hover:text-primary"
              >
                <Link href="/contact">Konsultasi Gratis</Link>
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div aria-hidden className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] bg-primary sm:-right-5 sm:-top-5" />
            <div aria-hidden className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-dots text-highlight/40" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-white shadow-soft-lg">
              <Image
                src="/images/kantor2.png"
                alt="Kantor Al Jadid Offset di Karanganyar"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 left-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft-lg sm:left-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight text-white">
                <Award className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-2xl font-extrabold leading-none text-foreground">20+</span>
                <span className="text-xs font-medium text-muted-foreground">Tahun Pengalaman</span>
              </span>
            </div>

            <div className="absolute -top-6 left-4 hidden items-center gap-3 rounded-2xl border border-border bg-white p-3 pr-5 shadow-soft-lg sm:flex md:-left-6">
              <span className="relative h-11 w-11 overflow-hidden rounded-full border border-border bg-white">
                <Image src="/images/logo.png" alt="" fill sizes="44px" className="object-contain p-1" />
              </span>
              <span>
                <span className="block text-sm font-bold leading-tight">Al Jadid Offset</span>
                <span className="text-xs text-muted-foreground">Percetakan &amp; kreasi visual</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/*
        STATS STRIP
      */}
      <section className="relative z-10 -mt-14 lg:-mt-16">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-soft-lg lg:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:p-8 ${
                      i % 2 === 0 ? "border-r border-white/15" : ""
                    } ${i < 2 ? "border-b border-white/15 lg:border-b-0" : ""} ${i === 1 ? "lg:border-r" : ""}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block whitespace-nowrap text-xl font-extrabold leading-tight tracking-tight sm:text-[1.75rem]">{stat.number}</span>
                      <span className="text-xs font-medium text-white/75 sm:text-sm">{stat.label}</span>
                    </span>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        ABOUT PREVIEW
      */}
      <section className="section-padding">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-soft-lg">
              <Image
                src="/images/foto-bersama2.jpg"
                alt="Tim Al Jadid Offset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-soft-lg sm:-right-6">
              <div className="relative aspect-square">
                <Image src="/images/kantor2-2.png" alt="Kantor Al Jadid 2" fill sizes="240px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -left-3 top-6 rounded-2xl bg-highlight px-5 py-4 text-white shadow-soft-lg sm:-left-6">
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">Sejak</span>
              <span className="block text-3xl font-extrabold leading-none">2005</span>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <SectionHeading
              eyebrow="Tentang Kami"
              title={
                <>
                  Mitra cetak <span className="text-primary">terpercaya</span> di jantung Karanganyar
                </>
              }
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dimulai pada tahun 2005, <strong className="text-foreground">Al Jadid Offset</strong> tumbuh dengan satu keyakinan
              sederhana: kualitas tidak boleh dikompromikan. Dari mesin cetak manual hingga teknologi digital terkini, kami
              melayani ribuan instansi, pelaku bisnis, dan sekolah yang menghargai ketajaman detail.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-semibold text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10 font-semibold">
              <Link href="/about">
                Selengkapnya Tentang Kami <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/*
        SERVICES
      */}
      <section className="section-padding bg-muted">
        <div className="container">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Layanan Kami"
              title={
                <>
                  Solusi visual lengkap dalam <span className="text-primary">satu atap</span>
                </>
              }
              description="Mulai dari kebutuhan manufaktur, branding produk, hingga perlengkapan sekolah — semuanya kami kerjakan."
            />
            <Button asChild variant="outline" className="shrink-0 border-primary/30 bg-white font-semibold text-primary hover:bg-accent hover:text-primary">
              <Link href="/products">
                Semua Produk <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <Link
                  href="/products"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent to-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-8 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="tag-pill absolute left-4 top-4 bg-white text-primary shadow-soft">{service.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-highlight">
                      Pelajari lebih lanjut
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/*
        WHY US
      */}
      <section className="section-padding relative overflow-hidden bg-secondary text-secondary-foreground">
        <div aria-hidden className="absolute inset-0 bg-dots text-white/[0.06]" />
        <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />

        <div className="container relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              invert
              eyebrow="Mengapa Kami"
              title={
                <>
                  Setiap milimeter adalah komitmen kami terhadap <span className="text-emerald-300">kualitas</span> Anda
                </>
              }
              description="Teknologi cetak dan pemotongan terkini untuk memastikan akurasi hasil yang konsisten dan memuaskan setiap saat."
            />
            <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 lg:block">
              <Image src="/images/kantor1.png" alt="Kantor Al Jadid 1" fill sizes="40vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="grid content-center gap-5 sm:grid-cols-2 lg:col-span-7">
            {advantages.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-white/20 hover:bg-white/[0.08]">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        i === 0 ? "bg-highlight text-white" : "bg-primary text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/*
        PROCESS
      */}
      <section className="section-padding">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Cara Pemesanan"
              title={
                <>
                  Pesan cetak dalam <span className="text-primary">4 langkah mudah</span>
                </>
              }
              description="Proses yang jelas dari konsultasi hingga pesanan sampai di tangan Anda."
            />
          </Reveal>

          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-primary/25 lg:block" />
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={i * 0.08} className="relative flex flex-col items-center text-center">
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-soft-lg">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-highlight text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/*
        TESTIMONIALS
      */}
      <section className="section-padding bg-muted">
        <div className="container">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Testimoni"
                title={
                  <>
                    Dipercaya ribuan <span className="text-primary">klien</span>
                  </>
                }
                description="Telah tervalidasi oleh berbagai instansi pendidikan, korporasi, hingga UMKM di seluruh wilayah Karesidenan Surakarta."
              />
              <div className="flex gap-3">
                <CarouselPrevious className="static h-12 w-12 translate-y-0 border-border bg-white hover:border-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="static h-12 w-12 translate-y-0 border-border bg-white hover:border-primary hover:bg-primary hover:text-white" />
              </div>
            </Reveal>

            <CarouselContent className="-ml-6">
              {reviews.map((review, i) => (
                <CarouselItem key={review.author} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-soft">
                    <Quote className={`h-8 w-8 ${i % 2 === 0 ? "text-primary" : "text-highlight"}`} />
                    <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${
                          i % 2 === 0 ? "bg-primary" : "bg-highlight"
                        }`}
                      >
                        {review.author.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-bold">{review.author}</span>
                        <span className="text-xs text-muted-foreground">{review.org}</span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/*
        CTA
      */}
      <section className="section-padding pb-8 sm:pb-10">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 md:py-20">
              <div aria-hidden className="absolute inset-0 bg-dots text-white/10" />
              <div aria-hidden className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-highlight/90" />
              <div aria-hidden className="absolute -bottom-24 right-40 h-48 w-48 rounded-full border-[28px] border-white/10" />

              <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="heading-lg text-balance text-white">Wujudkan visi Anda bersama kami.</h2>
                  <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                    Konsultasikan kebutuhan cetak Anda sekarang — gratis, cepat, dan tanpa basa-basi.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 bg-white px-8 text-base font-semibold text-primary shadow-none hover:bg-white/90"
                  >
                    <a href="https://wa.me/6281393242084" target="_blank" rel="noopener noreferrer">
                      Diskusikan Sekarang <ArrowUpRight />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/contact">Lihat Lokasi</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Website Ads Footer Strip */}
      <div className="flex w-full items-center justify-center pb-8">
        <p className="px-4 text-center text-xs text-muted-foreground md:text-sm">
          Apabila ingin membuat website seperti ini hubungi{" "}
          <a
            href="https://wa.me/6281393242084"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-highlight"
          >
            0813-9324-2084
          </a>
        </p>
      </div>
    </div>
  )
}

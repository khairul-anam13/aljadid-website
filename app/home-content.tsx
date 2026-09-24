"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Crosshair,
  Factory,
  MessageSquareText,
  Package,
  Palette,
  Printer,
  Quote,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CornerMarks, RegistrationMark } from "@/components/print-marks"
import { cn } from "@/lib/utils"
import { services } from "@/lib/site"

const stats = [
  { number: "20+", label: "Tahun Beroperasi", icon: Award },
  { number: "5.000+", label: "Klien Produktif", icon: Users },
  { number: "2", label: "Bengkel di Tegalgede", icon: Building2 },
  { number: "09.00–17.00", label: "Senin – Sabtu", icon: Clock },
]

const heroPoints = ["Registrasi warna presisi tiap plat", "2 unit: massal & spesialis", "Kirim sampai luar Soloraya"]

const aboutPoints = [
  "Mesin offset & digital berjalan di dua lokasi",
  "Tim desain di kantor Timur, bisa mulai dari nol",
  "Program PKL/magang untuk siswa SMK tiap tahun",
  "Pengiriman ke Soloraya, Yogyakarta, hingga Semarang",
]

const advantages = [
  {
    icon: Crosshair,
    title: "Registrasi Warna Terjaga",
    desc: "Plat CMYK dikalibrasi ulang tiap ganti order — cetakan lembar pertama dan lembar ke-1.000 tidak meleset satu milimeter pun.",
    span: "lg:col-span-7",
    featured: true,
  },
  {
    icon: Factory,
    title: "Dua Bengkel, Satu Tenggat",
    desc: "Order massal ke bengkel Barat, order desain & spesialis ke bengkel Timur — dikerjakan paralel supaya tenggat Anda tidak antre.",
    span: "lg:col-span-5",
  },
  {
    icon: Palette,
    title: "Desain dari Nol Kalau Perlu",
    desc: "Belum punya file? Tim di kantor Timur bisa mulai dari sketsa tangan atau foto referensi, bukan cuma merapikan file jadi.",
    span: "lg:col-span-5",
  },
  {
    icon: Truck,
    title: "Kirim Sampai Luar Soloraya",
    desc: "Dikemas dengan pelindung sudut supaya piala, plakat, dan cetakan sampai Semarang atau Yogyakarta tanpa penyok.",
    span: "lg:col-span-7",
  },
]

const steps = [
  { icon: MessageSquareText, title: "Konsultasi", desc: "Hubungi CS via WhatsApp atau datang langsung ke salah satu bengkel kami." },
  { icon: Palette, title: "Desain & Persetujuan", desc: "Kirim desain Anda, atau susun bersama tim desain di kantor Timur." },
  { icon: Printer, title: "Produksi", desc: "Naik cetak dengan pengecekan warna di setiap pergantian plat." },
  { icon: Package, title: "Ambil / Kirim", desc: "Ambil di bengkel terdekat, atau kami kirim ke alamat Anda." },
]

/** Perforated-ticket dividers between the 4 process steps: dashed top on mobile (stacked),
 *  switching to a continuous dashed grid line at sm (2 cols) and lg (4 cols). */
function stepDivider(i: number) {
  return cn(
    "relative p-8 border-dashed",
    i > 0 && "border-t-2 border-foreground/40",
    i % 2 === 1 ? "sm:border-l-2 sm:border-foreground/40" : "sm:border-l-0",
    i >= 2 ? "sm:border-t-2 sm:border-foreground/40" : "sm:border-t-0",
    i % 4 !== 0 ? "lg:border-l-2 lg:border-foreground/40" : "lg:border-l-0",
    "lg:border-t-0",
  )
}

const reviews = [
  { text: "Sampul rapot pesanan sekolah kami tahan dibuka-tutup sampai kelas 6 tanpa sobek di bagian mata ayam. Harganya pun masih masuk anggaran BOS.", author: "Budi S.", org: "Instansi Sekolah" },
  { text: "Banner ukuran 4x6 meter untuk depan toko dicetak tanpa pecah pixel sedikit pun, padahal filenya cuma difoto dari HP biasa.", author: "Siti Rahayu", org: "Retail Corp" },
  { text: "Pesan 500 lembar stiker cutting untuk merchandise event, potongannya presisi semua — nggak ada yang miring sama sekali.", author: "Arif H.", org: "Event Organizer" },
  { text: "200 kaos seragam selesai dalam seminggu, sablonnya nggak retak walau sudah dicuci puluhan kali oleh karyawan lapangan.", author: "Nisa M.", org: "Corporate" },
  { text: "Warna brosur yang dicetak sama persis dengan kode Pantone yang kami kirim. Jarang ada percetakan lokal yang presisinya segini.", author: "Dimas", org: "Agency Iklan" },
]

/** The hero headline: a one-time load animation — ink roller wipe + a misregistered red duplicate that snaps into place. */
function MisprintHeadline({ text, className }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <h1 className={cn("relative", className)}>
      <span aria-hidden className="pointer-events-none absolute inset-0 text-primary">
        <motion.span
          className="block"
          initial={reduceMotion ? { x: 4, y: 4, opacity: 0.9 } : { x: 34, y: 22, opacity: 0 }}
          animate={{ x: 4, y: 4, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {text}
        </motion.span>
      </span>
      <span className="relative">{text}</span>
      {!reduceMotion && (
        <motion.span
          aria-hidden
          className="absolute inset-0 z-10 bg-foreground"
          style={{ transformOrigin: "right" }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </h1>
  )
}

export default function HomeContent() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="w-full overflow-x-clip">
      {/*
        HERO
      */}
      <section className="relative overflow-hidden bg-background">
        <div aria-hidden className="bg-grain absolute inset-0" />
        <div className="container relative grid items-center gap-14 pb-24 pt-12 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow mb-6">Al Jadid Offset · Karanganyar, Sejak 2005</span>

            <MisprintHeadline
              text="Warna yang sama, dari lembar pertama sampai lembar ke-seribu."
              className="heading-xl max-w-2xl"
            />

            <p className="mt-8 max-w-xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dua bengkel kerja di Tegalgede — satu untuk cetak massal, satu untuk desain dan
              produk spesialis — mengerjakan MMT, stiker, sampul rapot, piala, sampai sablon
              kaos dengan plat dan warna yang selalu presisi. Kini ditambah program magang bagi
              siswa SMK yang belajar cetak langsung dari mesinnya.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 px-7">
                <Link href="/products">
                  Lihat Produk <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-7">
                <Link href="/contact">Konsultasi Gratis</Link>
              </Button>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 font-serif text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-highlight" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:max-w-none"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-foreground shadow-print-lg">
              <Image
                src="/images/kantor2.png"
                alt="Kantor Al Jadid Offset di Karanganyar"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <CornerMarks />
            </div>

            <div className="absolute -bottom-7 left-4 rotate-[-2deg] border-2 border-foreground bg-card px-5 py-4 shadow-print sm:left-8">
              <span className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <span>
                  <span className="block font-mono text-2xl font-bold leading-none text-foreground">20+</span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">Tahun Beroperasi</span>
                </span>
              </span>
            </div>

            <div className="absolute -top-5 right-4 hidden items-center gap-3 border-2 border-foreground bg-card p-3 pr-5 shadow-print sm:flex md:-right-6">
              <span className="relative h-11 w-11 overflow-hidden border-2 border-foreground bg-background">
                <Image src="/images/logo.png" alt="" fill sizes="44px" className="object-contain p-1" />
              </span>
              <span>
                <span className="block font-mono text-xs font-bold uppercase tracking-wide">Al Jadid Offset</span>
                <span className="font-serif text-xs text-muted-foreground">Percetakan &amp; kreasi visual</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/*
        STATS STRIP
      */}
      <section className="relative z-10 -mt-10 lg:-mt-12">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 border-2 border-foreground bg-secondary text-secondary-foreground lg:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:p-8",
                      i % 2 === 0 && "border-r-2 border-secondary-foreground/15",
                      i < 2 && "border-b-2 border-secondary-foreground/15 lg:border-b-0",
                      i === 1 && "lg:border-r-2 lg:border-secondary-foreground/15",
                    )}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-secondary-foreground/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block whitespace-nowrap font-mono text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                        {stat.number}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wide text-secondary-foreground/70">{stat.label}</span>
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
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden border-2 border-foreground shadow-print-lg">
              <Image
                src="/images/foto-bersama2.jpg"
                alt="Tim Al Jadid Offset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <CornerMarks />
            </div>
            <div className="absolute -bottom-8 -right-2 w-2/5 overflow-hidden border-2 border-foreground shadow-print sm:-right-6">
              <div className="relative aspect-square">
                <Image src="/images/kantor2-2.png" alt="Kantor Al Jadid 2" fill sizes="240px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -left-3 top-6 rotate-[-3deg] border-2 border-foreground bg-primary px-5 py-4 text-primary-foreground shadow-print sm:-left-6">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-wider">Sejak</span>
              <span className="block font-display text-3xl leading-none">2005</span>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.05}>
            <SectionHeading
              eyebrow="Tentang Kami"
              title={
                <>
                  Dua bengkel, <span className="text-primary">satu registrasi warna</span>
                </>
              }
            />
            <p className="mt-6 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
              Bermula dari satu mesin cetak manual di Tegalgede tahun 2005, Al Jadid kini
              menjalankan dua bengkel — satu untuk cetak massal, satu untuk desain dan pesanan
              spesialis. Lebih dari 5.000 klien datang kembali bukan karena janji manis, tapi
              karena warna cetakan formulir tahun ini sama persis dengan warna lima tahun lalu.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 font-serif text-sm font-semibold text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-highlight text-highlight">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10">
              <Link href="/about">
                Selengkapnya Tentang Kami <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/*
        SERVICES — a job sheet, not a 3-card feature grid
      */}
      <section className="section-padding bg-muted">
        <div className="container">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Layanan Kami"
              title={
                <>
                  Enam lini cetak, <span className="text-primary">satu meja kerja</span>
                </>
              }
              description="Setiap baris di bawah adalah satu lini produksi — lengkap dengan bahan yang benar-benar kami pakai, bukan janji di atas kertas."
            />
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/products">
                Semua Produk <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          <div className="border-t-2 border-foreground">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={Math.min(i * 0.05, 0.2)}>
                <Link
                  href="/products"
                  className="group relative grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b-2 border-foreground py-6 pl-4 transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-1 sm:grid-cols-[3rem_5rem_1fr_auto] sm:gap-6 sm:pl-6"
                >
                  <span aria-hidden className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-200 group-hover:w-1.5" />
                  <span className="font-mono text-xl font-bold text-muted-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative hidden h-16 w-16 overflow-hidden border-2 border-foreground bg-card sm:block sm:h-20 sm:w-20">
                    <Image src={service.image} alt="" fill sizes="80px" className="object-contain p-2 mix-blend-multiply" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg uppercase tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                      {service.title}
                    </span>
                    <span className="mt-1 block font-serif text-sm leading-snug text-muted-foreground sm:text-base">{service.desc}</span>
                  </span>
                  <span className="tag-pill hidden shrink-0 border-foreground text-foreground sm:inline-flex">{service.category}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/*
        WHY US — asymmetric brick grid, never a symmetric trio
      */}
      <section className="section-padding relative overflow-hidden bg-secondary text-secondary-foreground">
        <div aria-hidden className="absolute inset-0 bg-dots text-secondary-foreground/[0.05]" />

        <div className="container relative">
          <Reveal>
            <SectionHeading
              invert
              eyebrow="Mengapa Kami"
              title={
                <>
                  Presisi itu bisa diukur, <span className="text-highlight">bukan dijanjikan</span>
                </>
              }
              description="Empat hal konkret yang membedakan cara kami bekerja dari percetakan kios biasa."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {advantages.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.06} className={item.span}>
                  <div
                    className={cn(
                      "h-full border-2 p-8",
                      item.featured
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-secondary-foreground/20 bg-secondary-foreground/[0.04]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center border-2",
                        item.featured ? "border-primary-foreground/40" : "border-secondary-foreground/30",
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3
                      className={cn(
                        "mt-6 font-display text-xl uppercase tracking-tight sm:text-2xl",
                        item.featured ? "text-primary-foreground" : "text-secondary-foreground",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className={cn("mt-3 font-serif leading-relaxed", item.featured ? "text-primary-foreground/85" : "text-secondary-foreground/70")}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/*
        PROCESS — one perforated ticket strip, four stubs
      */}
      <section className="section-padding">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Cara Pemesanan"
              title={
                <>
                  Satu tiket produksi, <span className="text-primary">empat langkah</span>
                </>
              }
              description="Dari konsultasi sampai barang di tangan Anda — tidak ada langkah tersembunyi."
            />
          </Reveal>

          <div className="mt-14 grid overflow-hidden border-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={i * 0.06} className={stepDivider(i)}>
                  <span className="font-mono text-xs font-bold text-primary">TIKET-0{i + 1}</span>
                  <Icon className="mt-4 h-8 w-8" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg uppercase tracking-tight">{step.title}</h3>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
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
                description="Cerita dari instansi pendidikan, korporasi, hingga UMKM di seluruh Soloraya."
              />
              <div className="flex gap-3">
                <CarouselPrevious className="static h-11 w-11 translate-y-0 border-2 border-foreground bg-card hover:bg-foreground hover:text-background" />
                <CarouselNext className="static h-11 w-11 translate-y-0 border-2 border-foreground bg-card hover:bg-foreground hover:text-background" />
              </div>
            </Reveal>

            <CarouselContent className="-ml-6">
              {reviews.map((review, i) => (
                <CarouselItem key={review.author} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <figure className="relative flex h-full flex-col border-2 border-foreground bg-card p-8 shadow-soft">
                    <span className="pointer-events-none absolute right-5 top-5 rotate-[-8deg] border-2 border-highlight px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-highlight">
                      Disetujui
                    </span>
                    <Quote className={cn("h-7 w-7", i % 2 === 0 ? "text-primary" : "text-highlight")} />
                    <blockquote className="mt-5 flex-1 font-serif text-base leading-relaxed text-foreground/85">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-3 border-t-2 border-foreground/10 pt-6">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground font-mono text-lg font-bold text-primary-foreground",
                          i % 2 === 0 ? "bg-primary" : "bg-highlight",
                        )}
                      >
                        {review.author.charAt(0)}
                      </span>
                      <span>
                        <span className="block font-serif text-sm font-bold">{review.author}</span>
                        <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{review.org}</span>
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
      <section className="section-padding pb-20 sm:pb-24">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden border-2 border-foreground bg-primary px-6 py-14 text-primary-foreground shadow-print-lg sm:px-12 md:py-20">
              <div aria-hidden className="absolute inset-0 bg-dots text-primary-foreground/10" />
              <RegistrationMark className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-primary-foreground/20 sm:h-52 sm:w-52" />

              <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="heading-lg text-balance text-primary-foreground">Ada berkas yang mau naik cetak?</h2>
                  <p className="mt-4 font-serif text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                    Kirim file atau ide kasar ke bengkel Barat atau Timur — kami hitungkan bahan
                    dan waktu produksinya hari ini juga, bukan minggu depan.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a
                    href="https://wa.me/6281393242084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2 border-2 border-foreground bg-secondary px-8 font-mono text-xs font-bold uppercase tracking-widest text-secondary-foreground shadow-print transition-all hover:bg-secondary/90 active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    Diskusikan Sekarang <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 border-2 border-primary-foreground px-8 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    Lihat Lokasi
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

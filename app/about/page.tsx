import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Crosshair, Factory, GraduationCap, MapPin, ShieldCheck } from "lucide-react"
import { constructMetadata } from "@/components/seo/metadata"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { OfficeImageSwitcher } from "@/components/office-image-switcher"
import { PageHeader } from "@/components/ui/page-header"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CornerMarks } from "@/components/print-marks"
import { cn } from "@/lib/utils"

export const metadata: Metadata = constructMetadata({
  title: "Tentang Al Jadid Offset - Percetakan Karanganyar Terpercaya",
  description:
    "Sejarah Al Jadid Offset sebagai percetakan terpercaya di Karanganyar sejak 2005. Spesialis cetak MMT, cetak sticker, cetak buku, dan sampul rapot dengan kualitas terbaik.",
  keywords: [
    "tentang al jadid offset",
    "sejarah percetakan karanganyar",
    "percetakan terpercaya karanganyar",
    "percetakan al jadid karanganyar",
    "visi misi percetakan",
    "tim percetakan profesional",
  ],
  canonical: "/about",
})

const teamPhotos = ["/images/foto-bersama1.jpg", "/images/foto-bersama2.jpg", "/images/foto-bersama3.jpg"]

const values = [
  {
    icon: Crosshair,
    title: "Registrasi Warna, Bukan Kira-Kira",
    desc: "Setiap pergantian plat dicek ulang di bawah lampu proof, supaya warna logo dan foto tidak melenceng dari file asli yang Anda kirim.",
  },
  {
    icon: Factory,
    title: "Satu Tenggat, Dua Bengkel",
    desc: "Order dijadwalkan sejak hari pertama masuk — bengkel Barat dan Timur berjalan paralel, supaya antrean di satu lini tidak menahan lini lainnya.",
  },
  {
    icon: ShieldCheck,
    title: "Bahan Diperiksa Sebelum Naik Cetak",
    desc: "Tiap gulungan kertas dan tinta dicek gramasi serta kekentalannya lebih dulu, supaya hasil akhir tidak bergelombang atau warnanya luntur.",
  },
]

const quickStats = [
  { number: "20+", label: "Tahun berkarya" },
  { number: "5.000+", label: "Klien produktif" },
  { number: "2", label: "Bengkel di Karanganyar" },
]

const cities = [
  "Karanganyar",
  "Solo",
  "Boyolali",
  "Klaten",
  "Sukoharjo",
  "Yogyakarta",
  "Sragen",
  "Wonogiri",
  "Semarang",
  "Cirebon",
  "Cilacap",
  "Kudus",
  "Sleman",
]

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Profil Perusahaan · Est. 2005"
        title="Tentang Kami"
        description="Dua bengkel di Tegalgede, satu standar registrasi warna. Ini cerita di baliknya, dan orang-orang yang menjalankannya."
        image="/images/kantor1.png"
      />

      {/*
        STORY
      */}
      <section className="section-padding">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-foreground shadow-print-lg">
              <OfficeImageSwitcher />
              <CornerMarks />
            </div>
            <div className="absolute -bottom-6 right-6 flex items-center gap-2 border-2 border-foreground bg-highlight px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide text-highlight-foreground shadow-print">
              <MapPin className="h-4 w-4" />
              Kantor Al Jadid &middot; Karanganyar
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <SectionHeading
              eyebrow="Perjalanan Kami"
              title={
                <>
                  Dari satu mesin manual, <span className="text-primary">jadi dua bengkel</span>
                </>
              }
            />
            <div className="mt-6 space-y-5 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Bermula dari satu mesin cetak manual di Tegalgede tahun 2005,{" "}
                <strong className="text-foreground">Al Jadid Offset</strong> melayani pesanan
                warga sekitar satu-per-satu — kartu undangan, nota, dan stempel toko.
              </p>
              <p>
                Dua puluh tahun kemudian, mesin manual itu berkembang jadi dua bengkel: satu
                untuk cetak massal skala industri, satu lagi untuk desain dan pesanan spesialis.
                Lebih dari 5.000 klien datang kembali bukan karena janji, tapi karena warna
                cetakan formulir tahun ini sama persis dengan warna lima tahun lalu.
              </p>
            </div>
            <blockquote className="misprint mt-8 border-l-4 border-primary bg-accent px-6 py-5 font-serif text-base font-semibold text-foreground sm:text-lg">
              Kami tidak menjual janji cetak bagus — kami menjual warna yang bisa diulang persis
              sama, kapan pun Anda pesan lagi.
            </blockquote>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-foreground pt-8">
              {quickStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-2xl font-bold text-primary sm:text-3xl">{stat.number}</dd>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground sm:text-xs">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/*
        VALUES — a numbered manifesto list, not three identical icon cards
      */}
      <section className="section-padding bg-muted">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Komitmen Kami"
              title={
                <>
                  Tiga hal yang kami periksa <span className="text-primary">tiap hari</span>
                </>
              }
            />
          </Reveal>
          <div className="mx-auto mt-14 max-w-3xl divide-y-2 divide-foreground border-y-2 border-foreground">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={i * 0.06} className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
                  <span className="font-mono text-3xl font-bold text-primary">0{i + 1}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-highlight" strokeWidth={1.75} />
                      <h3 className="font-display text-xl uppercase tracking-tight sm:text-2xl">{value.title}</h3>
                    </div>
                    <p className="mt-3 font-serif leading-relaxed text-muted-foreground">{value.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/*
        TEAM
      */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Tim Kami"
                title={
                  <>
                    Orang-orang di balik <span className="text-primary">setiap cetakan</span>
                  </>
                }
                description="Dari operator mesin sampai tim desain — inilah yang bekerja di dua bengkel kami tiap hari."
              />
              <div className="flex gap-3">
                <CarouselPrevious className="static h-11 w-11 translate-y-0 border-2 border-foreground bg-card hover:bg-foreground hover:text-background" />
                <CarouselNext className="static h-11 w-11 translate-y-0 border-2 border-foreground bg-card hover:bg-foreground hover:text-background" />
              </div>
            </Reveal>

            <CarouselContent className="-ml-6">
              {teamPhotos.map((src, index) => (
                <CarouselItem key={src} className="basis-full pl-6 md:basis-[70%] lg:basis-[60%]">
                  <div className="relative aspect-[16/10] overflow-hidden border-2 border-foreground bg-muted shadow-print">
                    <Image
                      src={src}
                      alt={`Foto bersama tim Al Jadid ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="basis-full pl-6 md:basis-[70%] lg:basis-[60%]">
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden border-2 border-foreground bg-primary p-12 text-center text-primary-foreground shadow-print">
                  <div aria-hidden className="absolute inset-0 bg-dots text-primary-foreground/10" />
                  <h3 className="relative font-display text-5xl uppercase tracking-tight text-primary-foreground md:text-7xl">
                    Al Jadid
                  </h3>
                  <p className="relative mt-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                    Sejak 2005
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/*
        INTERNSHIP / PKL
      */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          <Reveal>
            <div className="grid overflow-hidden border-2 border-foreground bg-card shadow-print-lg lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src="/images/pkl-2023.png"
                  alt="Siswa PKL di Al Jadid Offset"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="tag-pill absolute left-5 top-5 border-foreground bg-card text-foreground">
                  <GraduationCap className="h-4 w-4" /> PKL &amp; Magang
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span className="eyebrow mb-4 w-fit">Magang Kejuruan</span>
                <h2 className="heading-md text-balance">
                  Jadilah bagian dari <span className="text-primary">keluarga kami</span>
                </h2>
                <div className="mt-6 space-y-4 font-serif leading-relaxed text-muted-foreground">
                  <p>
                    Al Jadid Offset membuka kesempatan PKL &amp; Magang Kejuruan bagi siswa SMK
                    yang ingin merasakan ritme produksi cetak yang sesungguhnya — bukan simulasi.
                  </p>
                  <p>
                    Anda akan turun langsung ke bengkel Barat atau Timur, diarahkan pada
                    ketelitian registrasi warna dan potong-jilid, sebelum lulus dengan{" "}
                    <span className="font-semibold text-foreground">pengalaman kerja riil</span>{" "}
                    di dunia percetakan.
                  </p>
                </div>
                <a
                  href="https://wa.me/6281329691231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 border-2 border-foreground bg-primary px-7 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-print transition-all hover:bg-primary/90 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  Ajukan Magang via WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        COVERAGE AREA
      */}
      <section className="section-padding relative overflow-hidden bg-secondary text-secondary-foreground">
        <div aria-hidden className="absolute inset-0 bg-dots text-secondary-foreground/[0.05]" />

        <div className="container relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              invert
              eyebrow="Logistik & Distribusi"
              title={
                <>
                  Siap <span className="text-highlight">menjangkau</span> kota Anda
                </>
              }
              description="Dari Soloraya hingga kota di provinsi lain, tiap pesanan dikemas dengan pelindung sudut supaya sampai tanpa penyok atau lecet."
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <ul className="flex flex-wrap gap-3">
              {cities.map((city, i) => (
                <li
                  key={city}
                  className={cn(
                    "inline-flex items-center gap-2 border-2 px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-wide transition-colors sm:text-base",
                    i === 0
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-secondary-foreground/20 text-secondary-foreground/85 hover:border-secondary-foreground/40",
                  )}
                >
                  <MapPin className="h-4 w-4" />
                  {city}
                  {i === 0 && <span className="text-xs font-normal normal-case text-primary-foreground/80">(Pusat)</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

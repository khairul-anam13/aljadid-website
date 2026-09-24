import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Crosshair, GraduationCap, MapPin, ShieldCheck, Timer } from "lucide-react"
import { constructMetadata } from "@/components/seo/metadata"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { OfficeImageSwitcher } from "@/components/office-image-switcher"
import { PageHeader } from "@/components/ui/page-header"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

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
    icon: ShieldCheck,
    title: "Kualitas Tanpa Kompromi",
    desc: "Keyakinan yang kami pegang sejak hari pertama: setiap cetakan harus memenuhi standar industrial tertinggi.",
  },
  {
    icon: Crosshair,
    title: "Presisi & Akurasi Warna",
    desc: "Ketajaman detail dan keseragaman warna dijaga konsisten, dari satu lembar hingga cetak massal.",
  },
  {
    icon: Timer,
    title: "Tepat Waktu",
    desc: "Kami menghargai tenggat Anda. Setiap pesanan dijadwalkan agar selesai sesuai kesepakatan.",
  },
]

const quickStats = [
  { number: "20+", label: "Tahun berkarya" },
  { number: "5.000+", label: "Klien produktif" },
  { number: "2", label: "Kantor di Karanganyar" },
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
        description="Menghidupkan setiap detail visual dengan standar industrial tertinggi. Kami hadir sebagai mitra untuk memastikan ide terbaik Anda tercetak sempurna."
        image="/images/kantor1.png"
      />

      {/*
        STORY
      */}
      <section className="section-padding">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-accent" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft-lg">
              <OfficeImageSwitcher />
            </div>
            <div className="absolute -bottom-6 right-6 flex items-center gap-2 rounded-full bg-highlight px-5 py-3 text-sm font-semibold text-white shadow-soft-lg">
              <MapPin className="h-4 w-4" />
              Kantor Al Jadid &middot; Karanganyar
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Perjalanan Kami"
              title={
                <>
                  Kreativitas yang terus <span className="text-primary">bertumbuh</span>
                </>
              }
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Dimulai pada tahun 2005 di jantung Karanganyar, <strong className="text-foreground">Al Jadid Offset</strong>{" "}
                tumbuh dengan satu keyakinan sederhana: <span className="font-semibold text-foreground">kualitas tidak boleh dikompromikan.</span>
              </p>
              <p>
                Dari mesin cetak manual hingga teknologi digital terkini, kami terus bermandikan tinta untuk melayani ribuan
                instansi, pelaku bisnis, dan sekolah yang menghargai ketajaman detail.
              </p>
            </div>
            <blockquote className="mt-8 rounded-r-2xl border-l-4 border-primary bg-accent px-6 py-5 text-base font-semibold text-foreground sm:text-lg">
              Kini, kami bukan sekadar penyedia jasa cetak &mdash; kami adalah bagian dari kesuksesan visual Anda.
            </blockquote>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {quickStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.number}</dd>
                  <dd className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/*
        VALUES
      */}
      <section className="section-padding bg-muted">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Komitmen Kami"
              title={
                <>
                  Nilai yang kami pegang <span className="text-primary">sejak 2005</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                    <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-highlight transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{value.desc}</p>
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
                description="Di balik setiap cetakan sempurna, ada kumpulan individu kreatif yang bekerja dengan hati dan dedikasi penuh untuk Anda."
              />
              <div className="flex gap-3">
                <CarouselPrevious className="static h-12 w-12 translate-y-0 border-border bg-white hover:border-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="static h-12 w-12 translate-y-0 border-border bg-white hover:border-primary hover:bg-primary hover:text-white" />
              </div>
            </Reveal>

            <CarouselContent className="-ml-6">
              {teamPhotos.map((src, index) => (
                <CarouselItem key={src} className="basis-full pl-6 md:basis-[70%] lg:basis-[60%]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted shadow-soft">
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
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden rounded-3xl bg-primary p-12 text-center shadow-soft">
                  <div aria-hidden className="absolute inset-0 bg-dots text-white/10" />
                  <div aria-hidden className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-highlight" />
                  <h3 className="relative text-5xl font-extrabold tracking-tight text-white md:text-7xl">Al Jadid</h3>
                  <p className="relative mt-3 text-lg font-semibold text-white/80">Sejak 2005</p>
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
            <div className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-soft lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src="/images/pkl-2023.png"
                  alt="Siswa PKL di Al Jadid Offset"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="tag-pill absolute left-5 top-5 bg-white text-primary shadow-soft">
                  <GraduationCap className="h-4 w-4" /> PKL &amp; Magang
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <span className="eyebrow mb-4">Magang Kejuruan</span>
                <h2 className="heading-md text-balance">
                  Jadilah bagian dari <span className="text-primary">keluarga kami</span>
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Al Jadid Offset membuka kesempatan PKL &amp; Magang Kejuruan bagi siswa SMK yang ingin merasakan ritme
                    industri sesungguhnya.
                  </p>
                  <p>
                    Setiap proses diarahkan pada ketelitian, membekali Anda dengan{" "}
                    <span className="font-semibold text-foreground">pengalaman kerja riil</span> untuk mengasah skill di dunia
                    profesional.
                  </p>
                </div>
                <a
                  href="https://wa.me/6281329691231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
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
        <div aria-hidden className="absolute inset-0 bg-dots text-white/[0.06]" />
        <div aria-hidden className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />

        <div className="container relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              invert
              eyebrow="Logistik & Distribusi"
              title={
                <>
                  Siap <span className="text-emerald-300">menjangkau</span> kota Anda
                </>
              }
              description="Dari Karesidenan Surakarta hingga kota di provinsi lainnya, kami pastikan setiap pesanan sampai dengan aman, terbungkus rapi, dan siap pakai. Karena kepuasan Anda tidak boleh terhenti di jalan."
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="flex flex-wrap gap-3">
              {cities.map((city, i) => (
                <li
                  key={city}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
                    i === 0
                      ? "border-highlight bg-highlight text-white"
                      : "border-white/15 bg-white/5 text-white/85 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <MapPin className={`h-4 w-4 ${i === 0 ? "text-white" : "text-emerald-300"}`} />
                  {city}
                  {i === 0 && <span className="text-xs font-medium text-white/80">(Pusat)</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

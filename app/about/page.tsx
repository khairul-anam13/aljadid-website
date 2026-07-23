import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/components/seo/metadata"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { OfficeImageSwitcher } from "@/components/office-image-switcher"

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

export default function AboutPage() {
  const teamPhotos = [
    "/images/foto-bersama1.jpg",
    "/images/foto-bersama2.jpg",
    "/images/foto-bersama3.jpg",
  ]

  const cities = [
    { name: "Karanganyar", size: "text-3xl md:text-7xl", weight: "font-semibold", color: "text-primary" },
    { name: "Solo", size: "text-2xl md:text-5xl", weight: "font-semibold", color: "text-background" },
    { name: "Boyolali", size: "text-xl md:text-4xl", weight: "font-medium", color: "text-background/80" },
    { name: "Klaten", size: "text-xl md:text-3xl", weight: "font-medium", color: "text-background/60" },
    { name: "Sukoharjo", size: "text-lg md:text-3xl", weight: "font-medium", color: "text-background/70" },
    { name: "Yogyakarta", size: "text-xl md:text-4xl", weight: "font-semibold", color: "text-background/90" },
    { name: "Sragen", size: "text-lg md:text-2xl", weight: "font-normal", color: "text-background/40" },
    { name: "Wonogiri", size: "text-lg md:text-2xl", weight: "font-normal", color: "text-background/50" },
    { name: "Semarang", size: "text-lg md:text-3xl", weight: "font-medium", color: "text-background/70" },
    { name: "Cirebon", size: "text-base md:text-xl", weight: "font-normal", color: "text-background/30" },
    { name: "Cilacap", size: "text-base md:text-xl", weight: "font-normal", color: "text-background/20" },
    { name: "Kudus", size: "text-base md:text-xl", weight: "font-normal", color: "text-background/20" },
    { name: "Sleman", size: "text-lg md:text-2xl", weight: "font-medium", color: "text-background/60" },
  ]

  return (
    <div className="w-full bg-background min-h-screen">
      {/*
        HERO / HEADER
      */}
      <section className="w-full overflow-hidden relative section-padding">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none grayscale">
          <Image src="/images/kantor1.png" alt="Kantor Al Jadid Background" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute top-[10%] right-[8%] z-0 w-24 h-24 md:w-40 md:h-40 border-[3px] border-primary/20 rounded-full pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="tag-pill bg-highlight/15 text-highlight-foreground border border-highlight/30 mb-8">
            Profil Perusahaan &middot; Est. 2005
          </div>
          <h1 className="heading-xl text-balance mb-10">
            <span className="text-primary">Kreasi</span> &amp; <span className="italic">presisi.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-[80px] h-[3px] rounded-full bg-primary hidden md:block"></div>
            <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed text-foreground/85">
              Menghidupkan setiap detail visual dengan standar industrial tertinggi. Kami hadir sebagai mitra untuk memastikan ide terbaik Anda tercetak sempurna.
            </p>
          </div>
        </div>
      </section>

      {/*
        STORY SECTION
      */}
      <section className="w-full section-padding pt-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="card-soft p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6">Perjalanan Kami</div>
              <h2 className="heading-md mb-8">
                Kreativitas <span className="text-primary italic">bertumbuh.</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dimulai pada tahun 2005 di jantung Karanganyar, <strong className="text-foreground">Al Jadid Offset</strong> tumbuh dengan satu keyakinan sederhana: <span className="text-foreground italic">kualitas tidak boleh dikompromikan.</span>
                </p>
                <p>
                  Dari mesin cetak manual hingga teknologi digital terkini, kami terus bermandikan tinta untuk melayani ribuan instansi, pelaku bisnis, dan sekolah yang menghargai ketajaman detail.
                </p>
                <p className="text-foreground font-medium border-l-2 border-primary pl-5 py-1">
                  Kini, kami bukan sekadar penyedia jasa cetak &mdash; kami adalah bagian dari kesuksesan visual Anda.
                </p>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden min-h-[420px] lg:min-h-0 border border-border/70 shadow-soft">
              <OfficeImageSwitcher />
              <div className="absolute bottom-6 left-6">
                <div className="tag-pill bg-destructive text-destructive-foreground shadow-soft">
                  Kantor Al Jadid &middot; Karanganyar
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        TEAM SECTION
      */}
      <section className="w-full section-padding bg-muted/50 overflow-hidden">
        <div className="container mb-14">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8">
            <h2 className="heading-lg text-balance">
              Tim <span className="text-primary italic">kami.</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Di balik setiap cetakan sempurna, ada kumpulan individu kreatif yang bekerja dengan hati dan dedikasi penuh untuk Anda.
            </p>
          </div>
        </div>

        <div className="container">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {teamPhotos.map((src, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-[70%] lg:basis-[60%]">
                  <div className="relative aspect-[16/9] rounded-[1.75rem] shadow-soft border border-border/70 bg-background overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Team Photo ${index + 1}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-primary/15 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                </CarouselItem>
              ))}
              {/* Branding Slide */}
              <CarouselItem className="pl-4 md:pl-6 basis-full md:basis-[70%] lg:basis-[60%]">
                <div className="relative aspect-[16/9] rounded-[1.75rem] border border-border/70 bg-foreground flex flex-col items-center justify-center p-12 shadow-soft">
                  <h3 className="font-display font-medium text-5xl md:text-7xl text-background tracking-tight mb-3">Al Jadid</h3>
                  <p className="text-primary text-lg font-medium tracking-wide">Sejak 2005</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border border-border/70 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-soft" />
              <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border border-border/70 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-soft" />
            </div>
          </Carousel>
        </div>
      </section>

      {/*
        INTERNSHIP & PKL SECTION
      */}
      <section className="w-full section-padding">
        <div className="container">
          <div className="card-soft p-8 md:p-14">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="lg:w-1/2">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary mb-6">Magang Kejuruan</div>
                <h2 className="heading-md text-foreground">
                  Jadilah <span className="text-primary italic">keluarga kami.</span>
                </h2>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed border-l-2 border-secondary/40 pl-6 mb-10">
                  <p>Al Jadid Offset membuka kesempatan PKL &amp; Magang Kejuruan bagi siswa SMK yang ingin merasakan ritme industri sesungguhnya.</p>
                  <p>Setiap proses diarahkan pada ketelitian, membekali Anda dengan <span className="text-foreground font-medium italic">pengalaman kerja riil</span> untuk mengasah skill di dunia profesional.</p>
                </div>
                <div>
                  <a
                    href="https://wa.me/6281329691231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-primary text-primary-foreground font-semibold transition-colors hover:bg-primary/90 shadow-soft"
                  >
                    Ajukan Magang via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        COVERAGE AREA
      */}
      <section className="w-full bg-foreground text-background overflow-hidden section-padding">
        <div className="container">
          <div className="mb-20 md:mb-24">
            <div className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E67065] mb-8">Logistik &amp; Distribusi</div>
            <h2 className="font-display text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] mb-10 text-background">
              Siap <span className="text-[#E67065] italic">menjangkau.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-[60px] h-[3px] rounded-full bg-[#E67065] mt-4 hidden md:block"></div>
              <p className="text-lg md:text-2xl text-background/60 max-w-3xl leading-relaxed">
                Dari Karesidenan Surakarta hingga kota di provinsi lainnya, kami pastikan setiap pesanan sampai dengan aman, terbungkus rapi, dan siap pakai. Karena kepuasan Anda tidak boleh terhenti di jalan.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6 border-t border-background/10 pt-14">
            {cities.map((city, index) => (
              <span
                key={index}
                className={`${city.size} ${city.weight} ${city.color} tracking-tight hover:text-[#E67065] hover:scale-110 transition-all duration-300 cursor-default select-none hover:opacity-100`}
              >
                {city.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

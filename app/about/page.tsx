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

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HERO / HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-background text-foreground overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grayscale">
          <Image src="/images/kantor1.png" alt="Kantor Al Jadid Background" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0, 168, 84, 0.05) 0%, transparent 50%)' }}></div>
        
        <div className="container relative z-10 px-6 py-24 md:py-48">
          <div className="inline-block bg-foreground text-background text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-[0.2em] mb-8">
            PROFIL PERUSAHAAN / EST. 2005
          </div>
          <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] text-balance mb-12">
            <span className="block text-primary">KREASI &</span>
            <span className="block italic">PRESISI.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-[120px] h-[4px] bg-primary hidden md:block"></div>
            <p className="text-xl md:text-4xl font-medium max-w-4xl leading-tight text-foreground/90 lowercase">
              Menghidupkan setiap detail visual dengan standar industrial tertinggi. Kami hadir sebagai mitra untuk memastikan ide terbaik Anda tercetak sempurna.
            </p>
          </div>
        </div>
      </section>

      {/* 
        STORY SECTION 
      */}
      <section className="w-full border-b-[3px] border-border overflow-hidden">
        <div className="swiss-grid border-none">
          <div className="col-span-1 md:col-span-4 xl:col-span-6 p-8 md:p-16 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border flex flex-col justify-center">
            <div className="font-mono text-[10px] uppercase font-bold text-primary mb-8 tracking-[0.3em]">// PERJALANAN KAMI</div>
            <h2 className="text-5xl md:text-[6rem] font-display font-black uppercase tracking-tight mb-10 leading-[0.85]">
              KREATIVITAS <br /><span className="text-primary italic">BERTUMBUH.</span>
            </h2>
            <div className="space-y-8 text-lg md:text-2xl font-medium text-muted-foreground leading-snug">
              <p>
                Dimulai pada tahun 2005 di jantung Karanganyar, <strong className="text-foreground uppercase">Al Jadid Offset</strong> tumbuh dengan satu keyakinan sederhana: <span className="text-foreground italic">kualitas tidak boleh dikompromikan.</span>
              </p>
              <p>
                Dari mesin cetak manual hingga teknologi digital terkini, kami terus bermandikan tinta untuk melayani ribuan instansi, pelaku bisnis, dan sekolah yang menghargai ketajaman detail.
              </p>
              <p className="text-foreground font-bold border-l-[4px] border-primary pl-6 py-2">
                Kini, kami bukan sekadar penyedia jasa cetak, kami adalah bagian dari kesuksesan visual Anda.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 xl:col-span-6 relative aspect-square md:aspect-auto min-h-[500px]">
             <OfficeImageSwitcher />
            {/* Technical Overlay */}
            <div className="absolute inset-0 border-[20px] border-background/5 pointer-events-none"></div>
            <div className="absolute bottom-12 left-12 bg-primary text-primary-foreground font-mono text-xs font-bold px-4 py-2 uppercase tracking-widest shadow-xl">
              LOC_REF: KJ-01 // OFFICE_ENV
            </div>
          </div>
        </div>
      </section>

      {/* 
        TEAM SECTION 
      */}
      <section className="w-full border-b-[3px] border-border bg-muted py-24 md:py-40 overflow-hidden">
        <div className="container px-6 mb-20">
          <div className="flex flex-col xl:flex-row justify-between items-end gap-12">
            <h2 className="text-6xl md:text-[11rem] font-display font-black uppercase tracking-tighter leading-[0.75] text-foreground">
              TIM<br/><span className="text-primary italic">KAMI.</span>
            </h2>
            <p className="max-w-xl text-xl md:text-3xl font-medium text-muted-foreground lowercase leading-tight border-b-2 border-primary pb-4">
              Di balik setiap cetakan sempurna, ada kumpulan individu kreatif yang bekerja dengan hati dan dedikasi penuh untuk Anda.
            </p>
          </div>
        </div>

        <div className="px-6 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {teamPhotos.map((src, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-full md:basis-[70%] lg:basis-[60%]">
                  <div className="relative aspect-[16/9] border-[4px] border-border shadow-2xl bg-background overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Team Photo ${index + 1}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                </CarouselItem>
              ))}
              {/* Branding Slide */}
              <CarouselItem className="pl-4 md:pl-8 basis-full md:basis-[70%] lg:basis-[60%]">
                 <div className="relative aspect-[16/9] border-[4px] border-border bg-foreground flex flex-col items-center justify-center p-12">
                    <h3 className="font-display font-black text-6xl md:text-8xl text-background uppercase tracking-tighter mb-4">AL JADID</h3>
                    <p className="font-mono text-primary text-xl font-bold tracking-[0.5em] uppercase">SINCE 2005</p>
                 </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-end gap-6 mt-12 pr-4 md:pr-12">
              <CarouselPrevious className="static translate-y-0 h-16 w-16 rounded-none border-[4px] border-border bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg" />
              <CarouselNext className="static translate-y-0 h-16 w-16 rounded-none border-[4px] border-border bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 
        INTERNSHIP & PKL SECTION 
      */}
      <section className="w-full border-b-[3px] border-border bg-background py-24 md:py-40">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            <div className="lg:w-1/2">
              <div className="font-mono text-[10px] uppercase font-bold text-primary mb-8 tracking-[0.3em]">// MAGANG KEJURUAN</div>
              <h2 className="text-5xl md:text-[6.5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-foreground">
                Jadilah<br/><span className="text-primary italic text-4xl md:text-[5rem]">Keluarga Kami.</span>
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div className="space-y-8 text-lg md:text-2xl font-medium text-muted-foreground leading-snug border-l-4 border-primary pl-8 mb-12">
                <p>Al Jadid Offset membuka kesempatan PKL & Magang Kejuruan bagi siswa SMK yang ingin merasakan ritme industri sesungguhnya.</p>
                <p>Setiap proses diarahkan pada ketelitian, membekali Anda dengan <span className="text-foreground font-bold italic">pengalaman kerja riil</span> untuk mengasah skill di dunia profesional.</p>
              </div>
              <div className="flex">
                <a 
                  href="https://wa.me/6281329691231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-20 w-full md:w-auto flex items-center justify-center px-12 group relative overflow-hidden bg-foreground text-background font-bold text-xl tracking-widest transition-all duration-500 border-[3px] border-foreground hover:bg-primary hover:border-primary"
                >
                  <span className="relative z-10">AJUKAN MAGANG @ WA</span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        COVERAGE AREA 
      */}
      <section className="w-full bg-foreground text-background overflow-hidden">
        <div className="container px-6 py-24 md:py-40">
          {/* Header Section - Full Width for Large Typography */}
          <div className="mb-24 md:mb-32">
            <div className="font-mono text-[10px] uppercase font-bold text-primary mb-12 tracking-[0.4em]">// LOGISTIK & DISTRIBUSI</div>
            <h2 className="text-6xl md:text-[9rem] xl:text-[12rem] font-display font-black uppercase tracking-tighter leading-[0.8] mb-16">
              SIAP<br/><span className="text-primary italic">MENJANGKAU.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="w-[100px] h-[3px] bg-primary mt-4 hidden md:block"></div>
               <p className="text-xl md:text-4xl font-medium text-background/60 max-w-4xl leading-tight">
                Dari Karesidenan Surakarta hingga Kota di Provinsi lainnya, kami pastikan setiap pesanan sampai dengan aman, terbungkus rapi, dan siap pakai. Karena kepuasan Anda tidak boleh terhenti di jalan.
              </p>
            </div>
          </div>

          {/* Grid Section - Full Width below */}
          <div className="w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-8 border-t-[3px] border-background/10 pt-16">
            {[
              { name: "KARANGANYAR", size: "text-4xl md:text-8xl", weight: "font-black", color: "text-primary" },
              { name: "SOLO", size: "text-3xl md:text-6xl", weight: "font-black", color: "text-background" },
              { name: "BOYOLALI", size: "text-2xl md:text-5xl", weight: "font-bold", color: "text-background/80" },
              { name: "KLATEN", size: "text-2xl md:text-4xl", weight: "font-bold", color: "text-background/60" },
              { name: "SUKOHARJO", size: "text-xl md:text-4xl", weight: "font-bold", color: "text-background/70" },
              { name: "YOGYAKARTA", size: "text-2xl md:text-5xl", weight: "font-black", color: "text-background/90" },
              { name: "SRAGEN", size: "text-xl md:text-3xl", weight: "font-medium", color: "text-background/40" },
              { name: "WONOGIRI", size: "text-xl md:text-3xl", weight: "font-medium", color: "text-background/50" },
              { name: "SEMARANG", size: "text-xl md:text-4xl", weight: "font-bold", color: "text-background/70" },
              { name: "CIREBON", size: "text-lg md:text-2xl", weight: "font-medium", color: "text-background/30" },
              { name: "CILACAP", size: "text-lg md:text-2xl", weight: "font-medium", color: "text-background/20" },
              { name: "KUDUS", size: "text-lg md:text-2xl", weight: "font-medium", color: "text-background/20" },
              { name: "SLEMAN", size: "text-xl md:text-3xl", weight: "font-bold", color: "text-background/60" },
            ].map((city, index) => (
              <span 
                key={index} 
                className={`${city.size} ${city.weight} ${city.color} uppercase tracking-tighter hover:text-primary hover:scale-110 transition-all duration-300 cursor-default select-none hover:opacity-100`}
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

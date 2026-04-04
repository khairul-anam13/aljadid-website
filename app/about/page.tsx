import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/components/seo/metadata"

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
  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HERO / HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-foreground text-background overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay grayscale">
          <Image src="/images/kantor1.png" alt="Kantor Al Jadid Background" fill className="object-cover object-center" priority />
        </div>
        <div className="container relative z-10 px-6 py-24 md:py-32">
          <div className="inline-block bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest mb-6">
            PROFIL PERUSAHAAN / EST. 2005
          </div>
          <h1 className="heading-xl text-balance mb-6">
            <span className="block text-primary">SEJARAH &</span>
            <span className="block">REPUTASI.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl leading-tight text-background/80 lowercase">
            Perjalanan dedikasi kami membangun kualitas cetak industrial yang tak tergoyahkan di Karanganyar sejak 2005.
          </p>
        </div>
      </section>

      {/* 
        COMPANY HISTORY 
      */}
      <section className="w-full border-b-[3px] border-border">
        <div className="swiss-grid border-none">
          <div className="col-span-1 md:col-span-4 xl:col-span-8 p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-border">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase tracking-tight mb-8">
              KRONOLOGI<br /><span className="text-primary">OPERASI.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl font-medium text-muted-foreground max-w-3xl leading-snug">
              <p>
                <strong className="text-foreground uppercase">Al Jadid Offset</strong> didirikan pada tahun 2005 di Karanganyar sebagai manufaktur percetakan yang
                mengkhususkan diri dalam produksi masif untuk <strong>Cetak MMT</strong>, <strong>Cetak Sticker</strong>,
                <strong>Buku</strong>, dan <strong>Sampul Rapot Akademik</strong>.
              </p>
              <p>
                Berawal dari skala kecil dengan prinsip nihil toleransi terhadap kualitas buruk, kami
                telah berekspansi menjadi <strong>infrastruktur utama cetak di Karanganyar</strong>, melayani agregasi kebutuhan untuk sekolah, instansi swasta, dan badan pemerintah.
              </p>
              <p>
                Selama lebih dari 18 tahun, sistem operasional kami terus berotasi untuk menjamin durabilitas <strong>sampul rapot Karanganyar</strong> dan ribuan meter persegi materi promosi eksternal tanpa deviasi standar mutu sedikitpun.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 xl:col-span-4 relative min-h-[400px] grayscale mix-blend-multiply bg-muted">
            <Image
              src="/images/kantor2.png"
              alt="Kantor Al Jadid Offset Karanganyar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* 
        VISION & MISSION 
      */}
      <section className="w-full border-b-[3px] border-border bg-background">
        <div className="swiss-grid border-none">
          <div className="col-span-1 md:col-span-4 xl:col-span-4 p-8 md:p-12 border-b-[3px] xl:border-b-0 xl:border-r-[3px] border-border bg-primary text-primary-foreground flex flex-col justify-between">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight leading-[0.9]">
              VISI<br/>MUTLAK.
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-snug mt-8">
              Menjadi pusat pabrikasi cetak terdepan se-Karesidenan Surakarta yang menjamin stabilitas kualitas dalam skala masif.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 xl:col-span-8 p-8 md:p-12 border-r-[3px] border-border bg-muted">
            <div className="font-mono text-xs uppercase font-bold text-muted-foreground mb-8">
              SUB-DIREKTORI // MISI OPERASIONAL
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-medium text-foreground uppercase tracking-wide leading-snug">
              <li className="border-t-[3px] border-foreground pt-4">
                <span className="text-primary font-black text-3xl block mb-2">01</span>
                Menyediakan infrastruktur percetakan kelas atas dengan margin biaya yang rasional untuk mitra bisnis.
              </li>
              <li className="border-t-[3px] border-foreground pt-4">
                <span className="text-primary font-black text-3xl block mb-2">02</span>
                Mengeliminasi deviasi hasil cetakan (MMT, Buku, Rapot) dari desain digital ke produk fisik.
              </li>
              <li className="border-t-[3px] border-foreground pt-4">
                <span className="text-primary font-black text-3xl block mb-2">03</span>
                Menjadi pemasok eksklusif instansi akademik dalam manajemen sampul rapot durabilitas tinggi.
              </li>
              <li className="border-t-[3px] border-foreground pt-4">
                <span className="text-primary font-black text-3xl block mb-2">04</span>
                Standarisasi mesin modern dan rekrutmen SDM pencetakan yang anti distorsi & anti kompromi.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 
        TEAM 
      */}
      <section className="w-full border-b-[3px] border-border">
        <div className="p-8 md:p-12 border-b-[3px] border-border bg-background">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-center">
            DEWAN <span className="text-primary">EKSEKUTIF</span>
          </h2>
        </div>
        <div className="swiss-grid border-none">
          {[
            { name: "Ahmad Fauzi", position: "Direktur", img: "DF" },
            { name: "Siti Aminah", position: "Manajer Ops", img: "SA" },
            { name: "Budi Santoso", position: "Kepala Desain", img: "BS" },
            { name: "Dewi Lestari", position: "Manajer Pemasaran", img: "DL" },
          ].map((person, index) => (
            <div key={index} className="col-span-1 md:col-span-2 xl:col-span-3 p-8 border-b-[3px] md:border-b-0 border-r-[3px] last:border-r-0 border-border group bg-background">
              <div className="relative w-full aspect-square border-[3px] border-border mb-6 overflow-hidden bg-muted">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=${person.img}`}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-display font-black text-2xl uppercase">{person.name}</h3>
              <p className="text-sm font-mono font-bold text-primary uppercase">{person.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 
        COVERAGE AREA 
      */}
      <section className="w-full bg-foreground text-background">
         <div className="container px-6 py-24 md:py-32 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-6">
                JANGKAUAN<br/><span className="text-primary">DISTRIBUSI.</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-background/80 max-w-md">
                Armada logistik kami memfasilitasi pengiriman masif ke Karanganyar, Surakarta, Boyolali, Wonogiri, dan eks-Karesidenan Surakarta secara presisi.
              </p>
            </div>
            <div className="md:w-1/2 w-full border-t-[3px] border-border/80">
              <div className="py-6 border-b-[3px] border-border/80 flex justify-between uppercase font-black text-2xl">
                <span>KARANGANYAR</span>
                <span className="text-primary">100% COVERAGE</span>
              </div>
              <div className="py-6 border-b-[3px] border-border/80 flex justify-between uppercase font-black text-2xl text-background/70">
                <span>SURAKARTA (SOLO)</span>
                <span>YES</span>
              </div>
              <div className="py-6 border-b-[3px] border-border/80 flex justify-between uppercase font-black text-2xl text-background/70">
                <span>SEKITARNYA</span>
                <span>BY REQUEST</span>
              </div>
            </div>
         </div>
      </section>
    </div>
  )
}

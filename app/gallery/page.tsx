import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/components/seo/metadata"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = constructMetadata({
  title: "Galeri - Al Jadid Offset",
  description: "Lihat portofolio dan hasil karya percetakan Al Jadid Offset. Berbagai produk cetak berkualitas tinggi.",
})

export default function GalleryPage() {
  const categories = ["Semua", "Kartu Nama", "Brosur", "Banner", "Kemasan", "Undangan", "Kertas"]

  const galleryItems = [
    { id: 1, title: "KARTU NAMA #01", category: "Kartu Nama", client: "PT MAJU BERSAMA" },
    { id: 2, title: "BROSUR CORP #01", category: "Brosur", client: "CV KARYA MANDIRI" },
    { id: 3, title: "BANNER XXL #01", category: "Banner", client: "TOKO ELEKTRONIK" },
    { id: 4, title: "PACKAGING #01", category: "Kemasan", client: "BAKERY DELICIOUS" },
    { id: 5, title: "INVITATION #01", category: "Undangan", client: "KELUARGA AHMAD" },
    { id: 6, title: "KARTU NAMA #02", category: "Kartu Nama", client: "DR. SITI RAHAYU" },
    { id: 7, title: "BROSUR EVENT #02", category: "Brosur", client: "SPEKTAKULER EO" },
    { id: 8, title: "BANNER STORE #02", category: "Banner", client: "SUPERMARKET HEMAT" },
    { id: 9, title: "PACKAGING #02", category: "Kemasan", client: "BEAUTY CARE ID" },
    { id: 10, title: "INVITATION #02", category: "Undangan", client: "KELUARGA BUDI" },
    { id: 11, title: "NOTA KERTAS #01", category: "Kertas", client: "STUDIO DESAIN" },
    { id: 12, title: "BROSUR ASSET #03", category: "Brosur", client: "PT PROPERTI SEJAHTERA" },
  ]

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HERO / HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-background text-foreground">
        <div className="container px-6 py-24 md:py-32 border-x-[3px] border-border mx-auto min-h-[40vh] flex flex-col justify-end">
          <div className="inline-block bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest mb-6 self-start">
            ARSIP VISUAL / HASIL PRODUKSI
          </div>
          <h1 className="heading-xl text-balance">
            <span className="block text-primary">GALERI</span>
            <span className="block">CETAK.</span>
          </h1>
        </div>
      </section>

      {/* GALLERY TAB & GRID */}
      <section className="w-full border-b-[3px] border-border bg-background">
        <div className="container mx-auto border-x-[3px] border-border p-0">
          <Tabs defaultValue="Semua" className="w-full rounded-none">
            <div className="border-b-[3px] border-border overflow-x-auto w-full scrollbar-none">
              <TabsList className="bg-transparent h-auto p-0 flex space-x-0 w-max min-w-full justify-start rounded-none">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-none border-r-[3px] border-border py-4 px-6 md:px-10 text-sm font-bold uppercase tracking-widest font-mono data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none transition-colors border-transparent"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {galleryItems
                    .filter((item) => category === "Semua" || item.category === category)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className={`group relative overflow-hidden aspect-square border-b-[3px] border-r-[3px] border-border bg-muted flex flex-col 
                          ${(index + 1) % 1 === 0 ? "border-r-[3px]" : ""}
                          md:${(index + 1) % 2 === 0 ? "border-r-0" : ""}
                          lg:${(index + 1) % 3 === 0 ? "border-r-0" : ""}
                          xl:${(index + 1) % 4 === 0 ? "border-r-0" : ""}`}
                      >
                        {/* Huge blocky ID */}
                        <div className="absolute top-4 right-4 z-20 font-display font-black text-6xl opacity-10 mix-blend-multiply group-hover:opacity-0 transition-opacity">
                          {item.id.toString().padStart(2, "0")}
                        </div>

                        <Image
                          src={`/placeholder.svg?height=600&width=600&text=${item.category.toUpperCase()}`}
                          alt={item.title}
                          fill
                          className="object-cover grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:mix-blend-normal"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />

                        {/* Solid Overlay Frame */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-foreground/90 transition-colors duration-300 pointer-events-none" />

                        {/* Content text */}
                        <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none text-background">
                           <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                             // {item.client}
                           </div>
                           <h3 className="font-display font-black text-3xl uppercase leading-[0.9]">
                             {item.title}
                           </h3>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

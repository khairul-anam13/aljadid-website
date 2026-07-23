import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/components/seo/metadata"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = constructMetadata({
  title: "Galeri - Al Jadid Offset",
  description: "Lihat portofolio dan hasil karya percetakan Al Jadid Offset. Berbagai produk cetak berkualitas tinggi.",
})

export default function GalleryPage() {
  // Ink-swatch accent rotation, tuned for legibility on the dark hover overlay
  const clientTagColors = ["text-[#D8775A]", "text-[#2AA192]", "text-highlight"]

  const categories = ["Semua", "Kartu Nama", "Brosur", "Banner", "Kemasan", "Undangan", "Kertas"]

  const galleryItems = [
    { id: 1, title: "Kartu Nama #01", category: "Kartu Nama", client: "PT Maju Bersama" },
    { id: 2, title: "Brosur Corp #01", category: "Brosur", client: "CV Karya Mandiri" },
    { id: 3, title: "Banner XXL #01", category: "Banner", client: "Toko Elektronik" },
    { id: 4, title: "Packaging #01", category: "Kemasan", client: "Bakery Delicious" },
    { id: 5, title: "Invitation #01", category: "Undangan", client: "Keluarga Ahmad" },
    { id: 6, title: "Kartu Nama #02", category: "Kartu Nama", client: "Dr. Siti Rahayu" },
    { id: 7, title: "Brosur Event #02", category: "Brosur", client: "Spektakuler EO" },
    { id: 8, title: "Banner Store #02", category: "Banner", client: "Supermarket Hemat" },
    { id: 9, title: "Packaging #02", category: "Kemasan", client: "Beauty Care ID" },
    { id: 10, title: "Invitation #02", category: "Undangan", client: "Keluarga Budi" },
    { id: 11, title: "Nota Kertas #01", category: "Kertas", client: "Studio Desain" },
    { id: 12, title: "Brosur Asset #03", category: "Brosur", client: "PT Properti Sejahtera" },
  ]

  return (
    <div className="w-full bg-background min-h-screen">
      {/*
        HERO / HEADER
      */}
      <section className="w-full section-padding">
        <div className="container">
          <div className="tag-pill bg-highlight/15 text-highlight-foreground border border-highlight/30 mb-6">
            Portofolio &middot; Hasil Karya
          </div>
          <h1 className="heading-xl text-balance">
            <span className="text-primary">Inspirasi</span> cetak.
          </h1>
        </div>
      </section>

      {/* GALLERY TAB & GRID */}
      <section className="w-full pb-16 md:pb-24">
        <div className="container">
          <Tabs defaultValue="Semua" className="w-full">
            <div className="overflow-x-auto w-full scrollbar-none pb-2 mb-10">
              <TabsList className="bg-transparent h-auto p-0 flex space-x-3 w-max min-w-full justify-start">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full border border-border/70 bg-card py-2.5 px-6 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-300 shadow-none"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {galleryItems
                    .filter((item) => category === "Semua" || item.category === category)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className="group relative overflow-hidden aspect-square rounded-[1.75rem] border border-border/70 bg-muted flex flex-col shadow-soft"
                      >
                        {/* Faint index mark */}
                        <div className="absolute top-4 right-4 z-20 font-display font-medium text-5xl opacity-10 mix-blend-multiply group-hover:opacity-0 transition-opacity">
                          {item.id.toString().padStart(2, "0")}
                        </div>

                        <Image
                          src={`/placeholder.svg?height=600&width=600&text=${item.category.toUpperCase()}`}
                          alt={item.title}
                          fill
                          className="object-cover grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:mix-blend-normal"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />

                        {/* Overlay Frame */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/90 transition-colors duration-300 pointer-events-none" />

                        {/* Content text */}
                        <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none text-background">
                          <div className={`text-xs font-semibold tracking-wide mb-1.5 ${clientTagColors[index % clientTagColors.length]}`}>
                            {item.client}
                          </div>
                          <h3 className="font-display text-2xl font-medium leading-tight text-background">
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

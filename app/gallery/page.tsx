import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CreditCard, FileText, Flag, Mail, Package, Receipt, type LucideIcon } from "lucide-react"
import { constructMetadata } from "@/components/seo/metadata"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"

export const metadata: Metadata = constructMetadata({
  title: "Galeri - Al Jadid Offset",
  description: "Lihat portofolio dan hasil karya percetakan Al Jadid Offset. Berbagai produk cetak berkualitas tinggi.",
})

const categories = ["Semua", "Kartu Nama", "Brosur", "Banner", "Kemasan", "Undangan", "Kertas"]

const categoryIcons: Record<string, LucideIcon> = {
  "Kartu Nama": CreditCard,
  Brosur: FileText,
  Banner: Flag,
  Kemasan: Package,
  Undangan: Mail,
  Kertas: Receipt,
}

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

// Alternating tile tints keep the grid lively until real portfolio photos are added.
const tileStyles = [
  "from-primary to-secondary text-white",
  "from-accent to-muted text-primary",
  "from-highlight to-red-700 text-white",
  "from-muted to-accent text-primary",
]

export default function GalleryPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Portofolio · Hasil Karya"
        title="Galeri Karya"
        description="Inspirasi cetak dari berbagai proyek yang telah kami kerjakan untuk bisnis, instansi, dan pelanggan personal."
        image="/images/kantor2.png"
      />

      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="Semua" className="w-full">
            <div className="scrollbar-none -mx-4 mb-10 overflow-x-auto px-4 sm:mx-0 sm:px-0">
              <TabsList className="inline-flex h-auto gap-1 rounded-full border border-border bg-muted p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full px-5 py-2 text-sm font-semibold text-muted-foreground shadow-none transition-colors hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-soft"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {galleryItems
                    .filter((item) => category === "Semua" || item.category === category)
                    .map((item, index) => {
                      const Icon = categoryIcons[item.category]
                      return (
                        <article
                          key={item.id}
                          className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
                        >
                          <div
                            className={`relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${
                              tileStyles[index % tileStyles.length]
                            }`}
                          >
                            <div aria-hidden className="absolute inset-0 bg-dots opacity-20" />
                            <span className="absolute right-5 top-4 text-5xl font-extrabold opacity-20">
                              {item.id.toString().padStart(2, "0")}
                            </span>
                            <Icon className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
                          </div>
                          <div className="p-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-highlight">{item.category}</span>
                            <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{item.client}</p>
                          </div>
                        </article>
                      )
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-border bg-accent px-6 py-12 text-center">
            <h2 className="heading-md text-balance">Ingin hasil cetak seperti ini?</h2>
            <p className="max-w-xl text-muted-foreground">Ceritakan kebutuhan Anda, tim kami siap membantu dari desain hingga produksi.</p>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">
                Hubungi Kami <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

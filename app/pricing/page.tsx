import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Flag, type LucideIcon } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"
import { constructMetadata } from "@/components/seo/metadata"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { mainPhone, waLink } from "@/lib/site"

export const metadata: Metadata = constructMetadata({
  title: "Harga & Paket - Al Jadid Offset",
  description:
    "Lihat daftar harga dan paket layanan percetakan Al Jadid Offset. Temukan solusi dengan harga transparan untuk kebutuhan cetak Anda.",
})

const pricingPackages = [
  {
    name: "Paket Bisnis Pemula",
    price: "Mulai dari Rp 500.000",
    description: "Kartu nama, brosur, dan satu banner untuk bisnis yang baru mulai.",
    panel: "bg-muted text-foreground border-foreground",
    features: ["100 kartu nama", "100 brosur A5 full color", "1 banner ukuran 60x160 cm", "Desain dasar", "Pengiriman dalam kota"],
  },
  {
    name: "Paket Bisnis Standar",
    price: "Mulai dari Rp 1.500.000",
    description: "Volume lebih besar plus x-banner, untuk bisnis yang sedang naik daun.",
    panel: "bg-secondary text-secondary-foreground border-secondary",
    features: [
      "500 kartu nama premium",
      "500 brosur A4 full color",
      "2 banner ukuran 60x160 cm",
      "1 x-banner premium",
      "Desain profesional",
      "Pengiriman gratis",
    ],
    popular: true,
  },
  {
    name: "Paket Bisnis Premium",
    price: "Mulai dari Rp 3.000.000",
    description: "Volume besar dengan revisi desain tanpa batas untuk perusahaan.",
    panel: "bg-highlight text-highlight-foreground border-highlight",
    features: [
      "1000 kartu nama premium",
      "1000 brosur A4 full color",
      "5 banner ukuran 60x160 cm",
      "2 x-banner premium",
      "Desain premium, revisi tanpa batas",
      "Pengiriman express gratis",
      "Diskon 10% untuk order berikutnya",
    ],
  },
]

type PopularProduct = {
  id: number
  name: string
  description: string
  category: string
  price: string
  image?: string
  icon?: LucideIcon
}

const popularProducts: PopularProduct[] = [
  {
    id: 1,
    name: "Kartu Nama",
    description: "Box isi 100 pcs, kertas ivory 260gsm, full color 2 sisi",
    category: "Bisnis",
    price: "Mulai dari Rp 100.000",
    icon: CreditCard,
  },
  {
    id: 2,
    name: "Brosur A5",
    description: "100 pcs, kertas art paper 150gsm, full color 2 sisi",
    category: "Marketing",
    price: "Mulai dari Rp 250.000",
    image: "/produk/rapot.png",
  },
  {
    id: 3,
    name: "Banner Indoor",
    description: "Ukuran 60x160 cm, bahan flexi china 280gsm",
    category: "Promosi",
    price: "Mulai dari Rp 150.000",
    image: "/produk/mmt.png",
  },
  {
    id: 4,
    name: "X-Banner",
    description: "Ukuran 60x160 cm, bahan flexi korea 440gsm",
    category: "Promosi",
    price: "Mulai dari Rp 180.000",
    icon: Flag,
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Daftar Harga"
        title="Harga & Paket"
        description="Kisaran harga transparan untuk paket dan produk yang paling sering dipesan. Butuh volume atau spesifikasi lain? Hubungi kami untuk penawaran khusus."
      />

      {/* Pricing Packages */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow mx-auto mb-4 w-fit">Paket Layanan</span>
            <h2 className="heading-md text-balance">Pilih sesuai skala bisnis Anda</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingPackages.map((plan, index) => (
              <Card key={index} className={cn("flex flex-col overflow-hidden", plan.popular && "shadow-print-lg md:-my-6")}>
                {plan.popular && (
                  <div className="border-b-2 border-foreground bg-primary py-1.5 text-center font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Paling Populer
                  </div>
                )}
                <div className={cn("relative flex aspect-video flex-col items-center justify-center gap-2 border-b-2 border-foreground", plan.panel)}>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-70">Paket 0{index + 1}</span>
                  <span className="px-6 text-center font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">{plan.name}</span>
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl uppercase tracking-tight">{plan.name}</CardTitle>
                  <div className="mt-2 font-mono text-2xl font-bold text-primary">{plan.price}</div>
                  <CardDescription className="mt-2 font-serif">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center font-serif text-sm">
                        <Check className="mr-2 h-4 w-4 shrink-0 text-highlight" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link href="/contact">Pilih Paket</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow mx-auto mb-4 w-fit">Produk Populer</span>
            <h2 className="heading-md text-balance">Yang paling sering dipesan</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            {popularProducts.map((product) => {
              const Icon = product.icon
              return (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative flex aspect-video items-center justify-center border-b-2 border-foreground bg-accent">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 mix-blend-multiply"
                        sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 25vw"
                      />
                    ) : (
                      Icon && <Icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
                    )}
                  </div>
                  <CardHeader className="p-3 md:p-6">
                    <div className="flex flex-col gap-1">
                      <CardTitle className="font-display text-base uppercase tracking-tight md:text-lg">{product.name}</CardTitle>
                      <Badge variant="outline" className="w-fit text-[10px]">
                        {product.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                    <CardDescription className="mb-2 font-serif text-xs md:text-sm line-clamp-2">{product.description}</CardDescription>
                    <p className="font-mono text-sm font-semibold text-primary md:text-base">{product.price}</p>
                  </CardContent>
                  <CardFooter className="p-3 pt-0 md:p-6 md:pt-0">
                    <Button asChild variant="outline" className="w-full text-xs md:text-sm">
                      <Link href="/contact">Pesan Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="space-y-2">
              <h2 className="heading-md text-balance">Butuh Penawaran Khusus?</h2>
              <p className="mx-auto max-w-xl font-serif text-muted-foreground">
                Hubungi kami untuk mendapatkan penawaran yang disesuaikan dengan volume dan spesifikasi kebutuhan Anda.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={waLink(mainPhone.wa)} target="_blank" rel="noopener noreferrer">
                  WhatsApp Langsung
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

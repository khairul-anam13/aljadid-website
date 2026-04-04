import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"
import { constructMetadata } from "@/components/seo/metadata"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = constructMetadata({
  title: "Harga & Paket - Al Jadid Offset",
  description:
    "Lihat daftar harga dan paket layanan percetakan Al Jadid Offset. Temukan solusi dengan harga transparan untuk kebutuhan cetak Anda.",
})

export default function PricingPage() {
  const pricingPackages = [
    {
      name: "Paket Bisnis Pemula",
      price: "Mulai dari Rp 500.000",
      description: "Solusi percetakan dasar untuk bisnis kecil",
      image: "/placeholder.svg?height=400&width=600&text=Paket+Bisnis+Pemula",
      features: [
        "100 kartu nama",
        "100 brosur A5 full color",
        "1 banner ukuran 60x160 cm",
        "Desain dasar",
        "Pengiriman dalam kota",
      ],
    },
    {
      name: "Paket Bisnis Standar",
      price: "Mulai dari Rp 1.500.000",
      description: "Solusi lengkap untuk bisnis menengah",
      image: "/placeholder.svg?height=400&width=600&text=Paket+Bisnis+Standar",
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
      description: "Solusi komprehensif untuk perusahaan besar",
      image: "/placeholder.svg?height=400&width=600&text=Paket+Bisnis+Premium",
      features: [
        "1000 kartu nama premium",
        "1000 brosur A4 full color",
        "5 banner ukuran 60x160 cm",
        "2 x-banner premium",
        "Desain premium dengan revisi unlimited",
        "Pengiriman express gratis",
        "Diskon 10% untuk order berikutnya",
      ],
    },
  ]

  const popularProducts = [
    {
      id: 1,
      name: "Kartu Nama",
      description: "Box isi 100 pcs, kertas ivory 260gsm, full color 2 sisi",
      image: "/placeholder.svg?height=400&width=600&text=Kartu+Nama",
      category: "Bisnis",
      price: "Mulai dari Rp 100.000",
    },
    {
      id: 2,
      name: "Brosur A5",
      description: "100 pcs, kertas art paper 150gsm, full color 2 sisi",
      image: "/placeholder.svg?height=400&width=600&text=Brosur+A5",
      category: "Marketing",
      price: "Mulai dari Rp 250.000",
    },
    {
      id: 3,
      name: "Banner Indoor",
      description: "Ukuran 60x160 cm, bahan flexi china 280gsm",
      image: "/placeholder.svg?height=400&width=600&text=Banner+Indoor",
      category: "Promosi",
      price: "Mulai dari Rp 150.000",
    },
    {
      id: 4,
      name: "X-Banner",
      description: "Ukuran 60x160 cm, bahan flexi korea 440gsm",
      image: "/placeholder.svg?height=400&width=600&text=X-Banner",
      category: "Promosi",
      price: "Mulai dari Rp 180.000",
    },
  ]

  return (
    <>
      {/* Header */}
      <PageHeader title="Harga & Paket" description="Solusi percetakan dengan harga transparan untuk kebutuhan Anda" />

      {/* Pricing Packages */}
      <section className="w-full py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Paket Layanan</h2>
            <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
              Pilih paket yang sesuai dengan kebutuhan dan skala bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPackages.map((plan, index) => (
              <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Paling Populer
                  </div>
                )}
                <div className="aspect-video relative">
                  <Image
                    src={plan.image || "/placeholder.svg"}
                    alt={plan.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-2 text-2xl font-bold text-primary">{plan.price}</div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
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
      <section className="w-full py-8 md:py-16 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Produk Populer</h2>
            <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
              Produk percetakan yang paling banyak dipesan oleh pelanggan kami
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {popularProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 25vw"
                  />
                </div>
                <CardHeader className="p-3 md:p-6">
                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-base md:text-lg">{product.name}</CardTitle>
                    <Badge variant="outline" className="w-fit text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                  <CardDescription className="mb-2 text-xs md:text-sm line-clamp-2">
                    {product.description}
                  </CardDescription>
                  <p className="font-semibold text-primary text-sm md:text-base">{product.price}</p>
                </CardContent>
                <CardFooter className="p-3 md:p-6 pt-0 md:pt-0">
                  <Button asChild variant="outline" className="w-full text-xs md:text-sm">
                    <Link href="/contact">Pesan Sekarang</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Butuh Penawaran Khusus?</h2>
              <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
                Hubungi kami untuk mendapatkan penawaran yang disesuaikan dengan kebutuhan spesifik Anda
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-sm md:text-base">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm md:text-base">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 90 90"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M90 43.841C90 68.066 70.562 87.5 46.352 87.5C38.437 87.5 30.93 85.5 24.375 81.96L0 90L8.325 66.5C4.125 59.75 1.875 51.98 1.875 43.841C1.875 19.58 21.3 0 46.352 0C70.562 0 90 19.58 90 43.841ZM46.352 6.956C25.313 6.956 8.85 23.381 8.85 43.841C8.85 51.86 11.438 59.736 16.275 66.195L11.25 80.044L25.65 75.094C31.8 79.344 38.775 81.694 46.352 81.694C67.387 81.694 83.85 65.27 83.85 44.81C83.85 24.351 67.387 6.956 46.352 6.956ZM68.775 53.666C68.4 53.666 67.65 53.666 67.275 53.291C66.525 53.291 66.15 52.916 65.025 52.541C64.275 52.166 62.775 51.416 61.65 51.041C61.275 50.666 60.525 50.666 60.15 50.666C59.4 50.666 59.025 51.041 58.65 51.416C58.275 51.791 57.15 52.916 56.775 53.291C56.4 53.666 56.025 53.666 55.65 53.291C55.275 53.291 54.15 52.916 52.65 52.166C51.15 51.416 49.65 50.291 48.525 48.791C48.15 48.041 47.4 47.291 47.025 46.541C46.65 46.166 46.65 45.791 47.025 45.416C47.025 45.041 47.4 44.666 47.775 44.291C47.775 44.291 48.15 43.916 48.15 43.541C48.525 43.166 48.525 42.791 48.525 42.416C48.525 42.041 48.15 41.291 47.775 40.916C47.4 40.541 46.275 38.291 45.9 37.541C45.525 36.416 45.15 36.416 44.775 36.416H43.65C43.275 36.416 42.525 36.416 41.775 37.166C41.4 37.541 40.275 38.666 40.275 40.916C40.275 43.166 41.775 45.416 42.15 45.791C42.525 46.166 47.025 53.291 54.15 56.291C55.275 56.666 56.4 57.041 57.15 57.416C58.65 57.791 59.775 57.791 60.9 57.416C62.025 57.041 63.9 56.291 64.275 55.166C64.65 54.041 64.65 53.291 64.275 52.916C64.275 52.916 63.9 52.541 63.15 52.541C62.775 53.291 69.525 53.666 68.775 53.666Z"
                      fill="currentColor"
                    />
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

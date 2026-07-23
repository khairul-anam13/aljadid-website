"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ProductsContent() {
  const categories = ["Semua", "Bisnis", "Marketing", "Promosi", "Personal"]
  const [activeCategory, setActiveCategory] = useState("Semua")

  const products = [
    { id: 1, name: "Cetak MMT", image: "/produk/mmt.png", category: "Promosi" },
    { id: 2, name: "Cetak Sticker", image: "/produk/sticker.png", category: "Promosi" },
    { id: 3, name: "Sampul Rapot", image: "/produk/rapot.png", category: "Personal" },
    { id: 4, name: "Sablon Kaos", image: "/produk/kaos.png", category: "Promosi" },
    { id: 5, name: "Plakat & Piala", image: "/produk/piala.png", category: "Personal" },
    { id: 6, name: "Cetak Buku", image: "BKU", isTextImg: true, category: "Bisnis" },
    { id: 7, name: "Kartu Nama", image: "KRN", isTextImg: true, category: "Bisnis" },
    { id: 8, name: "Brosur Custom", image: "BRS", isTextImg: true, category: "Marketing" },
  ]

  // Ink-swatch accent rotation: terracotta / teal / ochre
  const cardAccents = [
    { text: "group-hover:text-primary", ring: "group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground" },
    { text: "group-hover:text-secondary", ring: "group-hover:bg-secondary group-hover:border-secondary group-hover:text-secondary-foreground" },
    { text: "group-hover:text-highlight", ring: "group-hover:bg-highlight group-hover:border-highlight group-hover:text-highlight-foreground" },
  ]

  return (
    <div className="w-full bg-background min-h-screen">
      {/*
        HEADER
      */}
      <section className="w-full bg-foreground text-background relative overflow-hidden section-padding">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

        <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-3 bg-background/5 border border-background/15 backdrop-blur-md text-background text-xs font-semibold px-5 py-2.5 uppercase tracking-[0.2em] mb-10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary relative">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
            </span>
            Katalog &middot; Update Terbaru
          </div>

          <h1 className="font-display text-6xl md:text-8xl xl:text-9xl font-medium tracking-tight leading-[1.02] text-balance mb-8">
            <span className="block text-background/90">Produk</span>
            <span className="block text-primary italic">Al Jadid</span>
          </h1>

          <p className="text-lg md:text-xl text-background/60 max-w-2xl leading-relaxed">
            Temukan produk yang Anda butuhkan. Mulai dari identitas usaha, promosi, hingga kebutuhan internal &mdash; semua didukung layanan desain grafis.
          </p>
        </div>
      </section>

      {/*
        PRODUCTS GRID & FILTERS
      */}
      <section className="w-full section-padding">
        <div className="container">
          <Tabs defaultValue="Semua" className="w-full" onValueChange={setActiveCategory}>
            <div className="mb-12 overflow-x-auto w-full scrollbar-none pb-2">
              <TabsList className="bg-transparent h-auto p-0 flex space-x-3 w-max justify-start">
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

            <TabsContent value={activeCategory} className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((prod) => activeCategory === "Semua" || prod.category === activeCategory)
                  .map((product, index) => {
                    const accent = cardAccents[index % cardAccents.length]
                    return (
                      <div key={product.id} className="group flex flex-col card-soft overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg">
                        {/* Image Slot */}
                        <div className="w-full aspect-[4/3] relative bg-muted flex items-center justify-center overflow-hidden p-6 border-b border-border/60">
                          {product.isTextImg ? (
                            <span className="font-display font-medium text-6xl text-foreground/15 group-hover:scale-110 transition-transform duration-700">
                              {product.image}
                            </span>
                          ) : (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                            />
                          )}
                        </div>

                        {/* Title Slot */}
                        <div className="p-6 flex items-center justify-between">
                          <h3 className={`font-display text-xl font-medium leading-tight transition-colors ${accent.text}`}>
                            {product.name}
                          </h3>
                          <div className={`w-10 h-10 shrink-0 rounded-full border border-border/70 flex items-center justify-center transition-colors ${accent.ring}`}>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/*
        ACTION BRIDGE
      */}
      <section className="w-full pb-16 md:pb-24">
        <div className="container">
          <div className="rounded-[2.5rem] bg-primary text-primary-foreground flex flex-col justify-center items-center text-center px-8 py-16 md:py-20">
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-9 max-w-3xl text-primary-foreground">
              Wujudkan ide Anda dalam bentuk <span className="text-foreground">fisik.</span>
            </h2>
            <Button asChild size="lg" className="rounded-full h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-semibold bg-foreground text-background hover:bg-background hover:text-foreground transition-colors shadow-none">
              <Link href="/contact">
                Konsultasi Gratis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, BookOpen, CreditCard, FileText, MessageCircle, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { Reveal } from "@/components/reveal"
import { waContacts, waLink } from "@/lib/site"

type Product = {
  id: number
  name: string
  category: string
  image?: string
  icon?: LucideIcon
}

const categories = ["Semua", "Bisnis", "Marketing", "Promosi", "Personal"]

const products: Product[] = [
  { id: 1, name: "Cetak MMT", image: "/produk/mmt.png", category: "Promosi" },
  { id: 2, name: "Cetak Sticker", image: "/produk/sticker.png", category: "Promosi" },
  { id: 3, name: "Sampul Rapot", image: "/produk/rapot.png", category: "Personal" },
  { id: 4, name: "Sablon Kaos", image: "/produk/kaos.png", category: "Promosi" },
  { id: 5, name: "Plakat & Piala", image: "/produk/piala.png", category: "Personal" },
  { id: 6, name: "Cetak Buku", icon: BookOpen, category: "Bisnis" },
  { id: 7, name: "Kartu Nama", icon: CreditCard, category: "Bisnis" },
  { id: 8, name: "Brosur Custom", icon: FileText, category: "Marketing" },
]

export default function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const visible = products.filter((p) => activeCategory === "Semua" || p.category === activeCategory)

  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Katalog · Update Terbaru"
        title="Produk & Layanan"
        description="Temukan produk yang Anda butuhkan. Mulai dari identitas usaha, promosi, hingga kebutuhan internal — semua didukung layanan desain grafis."
        image="/images/kantor2-2.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Katalog Produk</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Menampilkan {visible.length} produk{activeCategory !== "Semua" && ` kategori ${activeCategory}`}
              </p>
            </div>

            <div className="scrollbar-none -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
              <div role="tablist" aria-label="Filter kategori" className="inline-flex gap-1 rounded-full border border-border bg-muted p-1">
                {categories.map((category) => {
                  const active = activeCategory === category
                  return (
                    <button
                      key={category}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveCategory(category)}
                      className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                        active ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((product) => {
                const Icon = product.icon
                return (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:border-primary/30 hover:shadow-soft-lg"
                  >
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-accent to-muted">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-8 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        Icon && (
                          <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-primary shadow-soft transition-transform duration-500 group-hover:scale-110">
                            <Icon className="h-11 w-11" strokeWidth={1.5} />
                          </span>
                        )
                      )}
                      <span className="tag-pill absolute left-4 top-4 bg-white text-primary shadow-soft">{product.category}</span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{product.name}</h3>
                      <a
                        href={waLink(waContacts[0].phone, `Halo Al Jadid, saya ingin tanya harga ${product.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-highlight transition-colors hover:text-primary"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Tanya Harga
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/*
        CTA
      */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-14 text-center text-secondary-foreground sm:px-12 md:py-20">
              <div aria-hidden className="absolute inset-0 bg-dots text-white/[0.07]" />
              <div aria-hidden className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/60 blur-2xl" />
              <div aria-hidden className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-highlight/70 blur-2xl" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="heading-lg text-balance text-white">
                  Wujudkan ide Anda dalam bentuk <span className="text-emerald-300">fisik</span>.
                </h2>
                <p className="mt-4 text-base text-white/75 sm:text-lg">
                  Tidak menemukan produk yang Anda cari? Tim kami siap membantu kebutuhan cetak custom Anda.
                </p>
                <Button asChild size="lg" className="mt-8 h-14 bg-highlight px-8 text-base font-semibold hover:bg-highlight/90">
                  <Link href="/contact">
                    Konsultasi Gratis <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

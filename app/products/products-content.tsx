"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, BookOpen, CreditCard, FileText, MessageCircle, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { Reveal } from "@/components/reveal"
import { RegistrationMark } from "@/components/print-marks"
import { cn } from "@/lib/utils"
import { waContacts, waLink } from "@/lib/site"

type Product = {
  id: number
  name: string
  spec: string
  category: string
  image?: string
  icon?: LucideIcon
}

const categories = ["Semua", "Bisnis", "Marketing", "Promosi", "Personal"]

const products: Product[] = [
  { id: 1, name: "Cetak MMT", spec: "Flexi China 280gsm, mata ayam tiap 50cm", image: "/produk/mmt.png", category: "Promosi" },
  { id: 2, name: "Cetak Sticker", spec: "Vinyl/chromo, cutting kontur presisi", image: "/produk/sticker.png", category: "Promosi" },
  { id: 3, name: "Sampul Rapot", spec: "Art carton 260gsm, laminasi doff", image: "/produk/rapot.png", category: "Personal" },
  { id: 4, name: "Sablon Kaos", spec: "Combed 24s/30s, sablon rubber hot press", image: "/produk/kaos.png", category: "Promosi" },
  { id: 5, name: "Plakat & Piala", spec: "Resin cor & akrilik, gravir presisi", image: "/produk/piala.png", category: "Personal" },
  { id: 6, name: "Cetak Buku", spec: "Jilid lem panas atau jahit kawat", icon: BookOpen, category: "Bisnis" },
  { id: 7, name: "Kartu Nama", spec: "Art carton 260–310gsm, laminasi doff/glossy", icon: CreditCard, category: "Bisnis" },
  { id: 8, name: "Brosur Custom", spec: "Art paper 150gsm, lipat sesuai desain", icon: FileText, category: "Marketing" },
]

export default function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const visible = products.filter((p) => activeCategory === "Semua" || p.category === activeCategory)

  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Katalog · Update Terbaru"
        title="Produk & Layanan"
        description="Delapan lini cetak yang paling sering dipesan — lengkap dengan bahan yang benar-benar kami pakai. Butuh yang lain? Tim desain kami siap diskusi dari nol."
        image="/images/kantor2-2.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight sm:text-3xl">Katalog Produk</h2>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                Menampilkan {visible.length} produk{activeCategory !== "Semua" && ` · kategori ${activeCategory}`}
              </p>
            </div>

            <div className="scrollbar-none -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
              <div role="tablist" aria-label="Filter kategori" className="inline-flex gap-1 border-2 border-foreground bg-card p-1">
                {categories.map((category) => {
                  const active = activeCategory === category
                  return (
                    <button
                      key={category}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "whitespace-nowrap px-5 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-colors",
                        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary",
                      )}
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
                    className="group flex flex-col overflow-hidden border-2 border-foreground bg-card transition-shadow duration-300 hover:shadow-soft"
                  >
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b-2 border-foreground bg-accent">
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
                          <span className="flex h-24 w-24 items-center justify-center border-2 border-foreground bg-card text-primary transition-transform duration-500 group-hover:scale-110">
                            <Icon className="h-11 w-11" strokeWidth={1.5} />
                          </span>
                        )
                      )}
                      <span className="tag-pill absolute left-4 top-4 border-foreground bg-card text-foreground">{product.category}</span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg uppercase tracking-tight transition-colors group-hover:text-primary">{product.name}</h3>
                      <p className="mt-1 font-serif text-sm leading-snug text-muted-foreground">{product.spec}</p>
                      <a
                        href={waLink(waContacts[0].phone, `Halo Al Jadid, saya ingin tanya harga ${product.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-highlight transition-colors hover:text-primary"
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
            <div className="relative overflow-hidden border-2 border-foreground bg-secondary px-6 py-14 text-center text-secondary-foreground shadow-print-lg sm:px-12 md:py-20">
              <div aria-hidden className="absolute inset-0 bg-dots text-secondary-foreground/[0.06]" />
              <RegistrationMark className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 text-secondary-foreground/10" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="heading-lg misprint-invert text-balance text-secondary-foreground">
                  Wujudkan ide Anda dalam bentuk <span className="text-highlight">fisik</span>.
                </h2>
                <p className="mt-4 font-serif text-base text-secondary-foreground/75 sm:text-lg">
                  Tidak menemukan produk yang Anda cari? Tim kami siap membantu kebutuhan cetak custom Anda.
                </p>
                <Button asChild size="lg" className="mt-8 h-14 px-8">
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

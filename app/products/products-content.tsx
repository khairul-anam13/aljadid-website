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
    {
      id: 1,
      name: "CETAK MMT",
      description: "Banner outdoor industrial grade tahan UV.",
      image: "MMT",
      category: "Promosi",
      price: "RP 25.000 /M²",
      isPopular: true,
      details: ["Bahan Korea 440gsm", "Finishing mata ayam", "Min. order 2m²"],
    },
    {
      id: 2,
      name: "CETAK STICKER",
      description: "Vinyl/chromo presisi untuk identitas produk.",
      image: "STK",
      category: "Promosi",
      price: "RP 15.000 /LMBR",
      details: ["Laminasi glossy/doff", "Water/heat resistant", "Min. order 50pcs"],
    },
    {
      id: 3,
      name: "CETAK BUKU",
      description: "Publikasi massal kualitas offset absolut.",
      image: "BKU",
      category: "Bisnis",
      price: "RP 8.000 /EKS",
      isNew: true,
      details: ["HVS 70/80gsm", "Cover Art Carton", "Perfect Binding"],
    },
    {
      id: 4,
      name: "SAMPUL RAPOT",
      description: "Sistem durabilitas riwayat akademik K13.",
      image: "RPT",
      category: "Personal",
      price: "RP 3.500 /PCS",
      isPopular: true,
      details: ["Kartolo 260gsm", "Foil Emas/Perak", "Min. order 100pcs"],
    },
    {
      id: 5,
      name: "KARTU NAMA",
      description: "Modul representasi korporat dimensi pocket.",
      image: "KRN",
      category: "Bisnis",
      price: "RP 100.000 /BOX",
      details: ["Ivory 260gsm", "Full color 2 sisi", "Box = 100pcs"],
    },
    {
      id: 6,
      name: "BROSUR A5",
      description: "Saluran informasi fisik sebaran masif.",
      image: "BRS",
      category: "Marketing",
      price: "RP 2.500 /LMBR",
      details: ["Art Paper 150gsm", "Folder 2-Lipat", "Full color"],
    },
    {
      id: 7,
      name: "X-BANNER",
      description: "Berdiri vertikal untuk atensi ruang terbatas.",
      image: "XBN",
      category: "Promosi",
      price: "RP 180.000 /UNT",
      details: ["60x160 cm", "Termasuk stand", "Ready to deploy"],
    },
    {
      id: 8,
      name: "KOP SURAT",
      description: "Legalitas visual komunikasi via korespondensi.",
      image: "KOP",
      category: "Bisnis",
      price: "RP 300.000 /RIM",
      details: ["A4 HVS 80gsm", "Offset print", "Rim = 500 lembar"],
    },
  ]

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-foreground text-background">
        <div className="container px-6 py-24 md:py-32 border-x-[3px] border-border/80 mx-auto min-h-[40vh] flex flex-col justify-end">
          <div className="inline-block bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest mb-6 self-start">
             KATALOG MATERIAL / INDEKS HARGA
          </div>
          <h1 className="heading-xl text-balance">
            <span className="block text-primary">MANUFAKTUR</span>
            <span className="block">PRODUK.</span>
          </h1>
        </div>
      </section>

      {/* 
        PRODUCTS GRID & FILTERS 
      */}
      <section className="w-full border-b-[3px] border-border bg-background">
         <div className="container mx-auto border-x-[3px] border-border p-0">
           <Tabs defaultValue="Semua" className="w-full rounded-none" onValueChange={setActiveCategory}>
              <div className="border-b-[3px] border-border overflow-x-auto w-full scrollbar-none bg-muted">
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

              <TabsContent value={activeCategory} className="mt-0 outline-none">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {products
                      .filter((prod) => activeCategory === "Semua" || prod.category === activeCategory)
                      .map((product, index) => (
                         <div key={product.id} className={`group flex flex-col border-b-[3px] border-r-[3px] border-border bg-background hover:bg-muted transition-colors relative
                           ${(index + 1) % 1 === 0 ? "border-r-[3px]" : ""}
                           md:${(index + 1) % 2 === 0 ? "border-r-0" : ""}
                           lg:${(index + 1) % 4 === 0 ? "border-r-0" : ""}`}
                         >
                            {/* Badges */}
                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
                               <div className="bg-foreground text-background font-mono text-xs font-bold px-2 py-1 uppercase">{product.category}</div>
                               {product.isPopular && <div className="bg-primary text-primary-foreground font-mono text-xs font-bold px-2 py-1 uppercase">POPULAR</div>}
                               {product.isNew && <div className="bg-background text-foreground border-[2px] border-foreground font-mono text-xs font-bold px-2 py-1 uppercase">NEW</div>}
                            </div>

                            {/* Image Slot */}
                            <div className="w-full aspect-square border-b-[3px] border-border relative bg-foreground/5 overflow-hidden flex items-center justify-center">
                               <span className="font-display font-black text-6xl text-border mix-blend-multiply opacity-50 group-hover:scale-110 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
                                 {product.image}
                               </span>
                            </div>

                            {/* Info Slot */}
                            <div className="p-6 flex flex-col flex-1 justify-between">
                               <div>
                                 <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-2 leading-[0.9]">{product.name}</h3>
                                 <p className="font-medium text-muted-foreground mb-6 leading-snug">{product.description}</p>
                                 <ul className="space-y-1 font-mono text-xs font-bold uppercase tracking-widest text-foreground/80 border-l-[3px] border-primary pl-4 mb-8">
                                    {product.details.map((det, i) => (
                                      <li key={i}>{det}</li>
                                    ))}
                                 </ul>
                               </div>
                               <div>
                                 <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">RATING HARGA / BIAYA</div>
                                 <div className="font-display font-black text-2xl text-primary">{product.price}</div>
                               </div>
                            </div>
                         </div>
                      ))}
                 </div>
              </TabsContent>
           </Tabs>
         </div>
      </section>

      {/* 
        ACTION BRIDGE 
      */}
      <section className="w-full bg-primary text-primary-foreground border-b-[3px] border-border">
         <div className="container px-6 py-24 md:py-32 flex flex-col justify-center items-center text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-8 max-w-4xl">
              TENTUKAN KUANTITAS <br/>& SPESIFIKASI <span className="text-background">SEKARANG.</span>
            </h2>
            <Button asChild size="lg" className="rounded-none h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-bold tracking-widest bg-foreground text-background hover:bg-background hover:text-foreground transition-colors border-[3px] border-foreground hover:border-background shadow-none">
              <Link href="/contact">
                RILIS TIKET KONSULTASI <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
         </div>
      </section>
    </div>
  )
}

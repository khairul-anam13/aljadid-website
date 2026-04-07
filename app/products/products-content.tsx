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

  return (
    <div className="w-full bg-background min-h-screen">
      {/* 
        HEADER 
      */}
      <section className="w-full border-b-[3px] border-border bg-foreground text-background relative overflow-hidden">
        {/* Architectural Grid & Glow Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="container relative z-10 px-6 py-32 md:py-48 mx-auto flex flex-col items-center justify-center text-center min-h-[50vh]">
          {/* Animated Status Badge */}
          <div className="inline-flex items-center gap-3 bg-background/5 border-[2px] border-background/20 backdrop-blur-md text-background text-xs font-mono font-bold px-5 py-2.5 uppercase tracking-[0.25em] mb-12 rounded-full transform hover:scale-105 transition-transform duration-300 cursor-default">
             <span className="w-2 h-2 rounded-full bg-primary relative">
               <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
             </span>
             SKU KATALOG // UPDATE TERBARU
          </div>
          
          {/* Massive Typography */}
          <h1 className="text-6xl md:text-8xl xl:text-[11rem] font-display font-black uppercase tracking-tighter leading-[0.75] text-balance mb-8">
            <span className="block text-background/90 drop-shadow-2xl">Produk</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary italic pr-4">AL JADID</span>
          </h1>
          
          {/* Description line */}
          <p className="text-xl md:text-2xl text-background/60 max-w-2xl font-medium tracking-wide">
            Temukan produk yang Anda butuhkan. Mulai dari identitas usaha, promosi, hingga kebutuhan internal—semua didukung layanan desain grafis.
          </p>
          
        </div>
      </section>

      {/* 
        PRODUCTS GRID & FILTERS 
      */}
      <section className="w-full bg-muted py-16 md:py-24">
         <div className="container px-6 mx-auto">
           <Tabs defaultValue="Semua" className="w-full" onValueChange={setActiveCategory}>
              <div className="mb-12 overflow-x-auto w-full scrollbar-none pb-4">
                <TabsList className="bg-transparent h-auto p-0 flex space-x-2 w-max justify-start">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="rounded-2xl border-[3px] border-border bg-background py-3 px-8 text-sm font-bold uppercase tracking-widest font-mono data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] data-[state=active]:translate-y-1 data-[state=active]:shadow-none"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value={activeCategory} className="mt-0 outline-none">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products
                      .filter((prod) => activeCategory === "Semua" || prod.category === activeCategory)
                      .map((product) => (
                         <div key={product.id} className="group flex flex-col bg-background rounded-3xl border-[3px] border-border overflow-hidden transition-all duration-500 hover:shadow-[8px_8px_0px_0px_rgba(0,168,84,1)] hover:-translate-y-2">
                            {/* Image Slot */}
                            <div className="w-full aspect-[4/3] relative bg-muted flex items-center justify-center overflow-hidden p-6 border-b-[3px] border-border">
                               {product.isTextImg ? (
                                 <span className="font-display font-black text-6xl text-foreground/20 group-hover:scale-110 transition-transform duration-700">
                                   {product.image}
                                 </span>
                               ) : (
                                 <Image
                                   src={product.image}
                                   alt={product.name}
                                   fill
                                   className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                                 />
                               )}
                            </div>

                            {/* Title Slot */}
                            <div className="p-6 md:p-8 flex items-center justify-between bg-background z-10 relative">
                               <h3 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                                 {product.name}
                               </h3>
                               <div className="w-10 h-10 rounded-full border-[3px] border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-colors">
                                 <ArrowRight className="w-5 h-5" />
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
              WUJUDKAN IDE ANDA <br/>DALAM BENTUK <span className="text-background">FISIK.</span>
            </h2>
            <Button asChild size="lg" className="rounded-none h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl font-bold tracking-widest bg-foreground text-background hover:bg-background hover:text-foreground transition-colors border-[3px] border-foreground hover:border-background shadow-none">
              <Link href="/contact">
                KONSULTASI GRATIS <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
         </div>
      </section>
    </div>
  )
}

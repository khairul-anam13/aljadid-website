import type { Metadata } from "next"
import { constructMetadata } from "@/components/seo/metadata"
import ProductsContent from "./products-content"

export const metadata: Metadata = constructMetadata({
  title: "Produk & Layanan Percetakan Karanganyar - Al Jadid Offset",
  description:
    "Layanan percetakan Al Jadid Karanganyar: cetak MMT, cetak sticker, cetak buku, sampul rapot, kartu nama, brosur. Percetakan berkualitas tinggi di Karanganyar sejak 2005.",
  keywords: [
    "percetakan karanganyar",
    "percetakan al jadid",
    "cetak mmt karanganyar",
    "cetak sticker karanganyar",
    "cetak buku karanganyar",
    "sampul rapot karanganyar",
    "sampul rapot",
    "digital printing karanganyar",
    "offset printing karanganyar",
    "percetakan murah karanganyar",
  ],
})

export default function ProductsPage() {
  return <ProductsContent />
}

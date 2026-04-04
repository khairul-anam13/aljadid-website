import type { Metadata } from "next"
import { constructMetadata } from "@/components/seo/metadata"
import HomeContent from "./home-content"

export const metadata: Metadata = constructMetadata({
  title: "Al Jadid Offset - Percetakan Karanganyar Terpercaya Sejak 2005",
  description:
    "Percetakan Al Jadid Karanganyar melayani cetak MMT, cetak sticker, cetak buku, sampul rapot, dan layanan percetakan berkualitas. Hubungi kami untuk kebutuhan percetakan Anda di Karanganyar.",
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
    "percetakan terdekat karanganyar",
    "jasa cetak karanganyar",
    "percetakan murah karanganyar",
  ],
})

export default function HomePage() {
  return <HomeContent />
}

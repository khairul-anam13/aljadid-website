import type React from "react"
import type { Metadata } from "next"
import { constructMetadata } from "@/components/seo/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Kontak Kami - Al Jadid Offset",
  description:
    "Hubungi Al Jadid Offset untuk konsultasi dan informasi lebih lanjut tentang layanan percetakan kami. Isi formulir kontak atau hubungi kami melalui WhatsApp.",
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import type { Metadata } from "next"

type MetadataProps = {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  type?: string
  noIndex?: boolean
  canonical?: string
}

const SITE_URL = "https://aljadidofs.vercel.app"

export function constructMetadata({
  title = "Al Jadid Offset - Percetakan Karanganyar Berkualitas Sejak 2005",
  description = "Percetakan Al Jadid Karanganyar menyediakan layanan cetak MMT, cetak sticker, cetak buku, sampul rapot, dan berbagai layanan percetakan berkualitas tinggi di Karanganyar.",
  keywords = [
    "percetakan karanganyar",
    "percetakan al jadid",
    "cetak mmt",
    "cetak sticker",
    "cetak buku",
    "sampul rapot",
    "sampul rapot karanganyar",
    "digital printing karanganyar",
    "offset printing karanganyar",
    "percetakan murah karanganyar",
    "cetak banner karanganyar",
    "cetak brosur karanganyar",
    "cetak kartu nama karanganyar",
    "percetakan terdekat karanganyar",
    "jasa cetak karanganyar",
    "percetakan solo",
    "percetakan surakarta",
  ],
  image = `${SITE_URL}/images/og-al-jadid-karanganyar.jpg`,
  type = "website",
  noIndex = false,
  canonical,
}: MetadataProps = {}): Metadata {
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Al Jadid Offset Karanganyar", url: SITE_URL }],
    creator: "Al Jadid Offset",
    publisher: "Al Jadid Offset Karanganyar",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Al Jadid Offset Karanganyar",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "id_ID",
      type: type as any,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@aljadidoffset",
      site: "@aljadidoffset",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: "3254538665430830",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
    category: "Printing Services",
    classification: "Business",
    referrer: "origin-when-cross-origin",

    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#2e7d32",
        },
      ],
    },
    manifest: "/manifest.json",
    other: {
      "msapplication-TileColor": "#2e7d32",
      "msapplication-config": "/browserconfig.xml",
    },
  }
}

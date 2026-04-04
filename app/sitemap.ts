import type { MetadataRoute } from "next"

const SITE_URL = "https://aljadidofs.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Add product pages
  const products = [
    "cetak-mmt",
    "cetak-sticker",
    "cetak-buku",
    "sampul-rapot",
    "sablon-kaos",
    "sablon-tas",
    "kartu-nama",
    "brosur",
    "banner",
    "undangan",
  ]

  products.forEach((product) => {
    routes.push({
      url: `${SITE_URL}/products/${product}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  })

  return routes
}

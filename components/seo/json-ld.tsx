const SITE_URL = "https://aljadidofs.vercel.app"

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#organization`,
          name: "Al Jadid Offset Karanganyar",
          alternateName: ["Percetakan Al Jadid", "Al Jadid Printing", "Percetakan Karanganyar"],
          description:
            "Percetakan Al Jadid Karanganyar menyediakan layanan cetak MMT, cetak sticker, cetak buku, sampul rapot, dan berbagai layanan percetakan berkualitas tinggi sejak 2005.",
          url: SITE_URL,
          logo: `${SITE_URL}/images/logo.png`,
          image: [
            `${SITE_URL}/images/logo.png`,
            `${SITE_URL}/images/gallery-1.jpg`,
            `${SITE_URL}/images/gallery-2.jpg`,
            `${SITE_URL}/images/workshop.jpg`,
          ],
          telephone: ["+62271123456", "+62271876543"],
          email: "info@aljadidoffset.com",
          faxNumber: "+62271123457",
          priceRange: "$$",
          currenciesAccepted: "IDR",
          paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
          foundingDate: "2005",
          foundingLocation: "Karanganyar, Jawa Tengah, Indonesia",
          numberOfEmployees: "10-50",
          slogan: "Percetakan Berkualitas Sejak 2005",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Percetakan No. 123",
            addressLocality: "Karanganyar",
            addressRegion: "Jawa Tengah",
            postalCode: "57714",
            addressCountry: "ID",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -7.600554600000001,
            longitude: 110.94955108885497,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "09:00",
              closes: "15:00",
            },
          ],
          sameAs: [
            "https://www.facebook.com/aljadidoffset",
            "https://www.instagram.com/aljadidoffset",
            "https://twitter.com/aljadidoffset",
            "https://www.youtube.com/aljadidoffset",
            "https://www.linkedin.com/company/aljadidoffset",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Percetakan Al Jadid Offset",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cetak MMT",
                  description: "Layanan cetak MMT berkualitas tinggi untuk banner dan spanduk outdoor/indoor",
                  category: "Digital Printing",
                  areaServed: "Karanganyar, Solo, Surakarta",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cetak Sticker",
                  description: "Cetak sticker vinyl, chromo, dan transparant dengan cutting presisi",
                  category: "Digital Printing",
                  areaServed: "Karanganyar, Solo, Surakarta",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cetak Buku",
                  description: "Percetakan buku, majalah, dan publikasi dengan kualitas offset",
                  category: "Offset Printing",
                  areaServed: "Karanganyar, Solo, Surakarta",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sampul Rapot",
                  description: "Cetak sampul rapot sekolah dengan desain custom dan berkualitas",
                  category: "Educational Printing",
                  areaServed: "Karanganyar, Solo, Surakarta",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Sablon Kaos",
                  description: "Sablon kaos custom dengan berbagai teknik dan kualitas terbaik",
                  category: "Screen Printing",
                  areaServed: "Karanganyar, Solo, Surakarta",
                },
              },
            ],
          },
          areaServed: [
            {
              "@type": "City",
              name: "Karanganyar",
              containedInPlace: {
                "@type": "State",
                name: "Jawa Tengah",
              },
            },
            {
              "@type": "City",
              name: "Solo",
              alternateName: "Surakarta",
              containedInPlace: {
                "@type": "State",
                name: "Jawa Tengah",
              },
            },
            {
              "@type": "City",
              name: "Boyolali",
              containedInPlace: {
                "@type": "State",
                name: "Jawa Tengah",
              },
            },
          ],
          department: [
            {
              "@type": "LocalBusiness",
              name: "Al Jadid Offset 2 (Cabang)",
              telephone: "+62271876543",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Grafika No. 45",
                addressLocality: "Karanganyar",
                addressRegion: "Jawa Tengah",
                postalCode: "57714",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.6014142924135095,
                longitude: 110.95488187376037,
              },
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "127",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Budi Santoso",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Sampul rapot dari Al Jadid Offset sangat berkualitas. Desainnya menarik dan harganya terjangkau untuk sekolah.",
              datePublished: "2024-01-15",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Siti Rahayu",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Banner MMT untuk toko kami hasilnya sangat bagus. Warnanya tajam dan tahan lama meski di outdoor.",
              datePublished: "2024-01-10",
            },
          ],
        }),
      }}
    />
  )
}

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Al Jadid Offset Karanganyar",
          description:
            "Percetakan Al Jadid Karanganyar - Layanan cetak MMT, sticker, buku, sampul rapot berkualitas sejak 2005",
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
          potentialAction: [
            {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          ],
          inLanguage: "id-ID",
        }),
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
          })),
        }),
      }}
    />
  )
}

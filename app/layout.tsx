import type React from "react"
import type { Metadata, Viewport } from "next"
import { Anton, Source_Serif_4, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileNav } from "@/components/mobile-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { constructMetadata } from "@/components/seo/metadata"
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld"

// Display: poster-condensed, for headlines and big numbers (see DESIGN.md)
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

// Body: warm reading serif, echoes the printed page Al Jadid actually produces
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

// Labels/UI/numbers: stamped-ticket mono, for nav, tags, stats, prices
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = constructMetadata()

export const viewport: Viewport = {
  themeColor: "#CC361E",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${anton.variable} ${sourceSerif.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#CC361E" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#CC361E" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Mobile App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="AlJadid" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="application-name" content="Al Jadid Offset" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />

        {/* Structured Data */}
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={`${sourceSerif.className} font-sans antialiased selection:bg-primary selection:text-primary-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <MobileNav />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

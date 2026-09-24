"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { businessHours, navItems, waContacts, waLink } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Top info bar */}
      <div className="hidden bg-secondary text-xs text-white/80 md:block">
        <div className="container flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-red-300" />
              Tegalgede, Karanganyar, Jawa Tengah
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-red-300" />
              {businessHours}
            </span>
          </div>
          <a
            href={waLink(waContacts[0].phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-red-300"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Chat Customer Service
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-lg transition-shadow supports-[backdrop-filter]:bg-white/90",
          scrolled ? "border-border shadow-soft" : "border-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center" aria-label="Al Jadid Offset – Beranda">
            <Image
              src="/images/logo.png"
              alt="Al Jadid Offset"
              width={160}
              height={98}
              priority
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active ? "bg-accent text-primary" : "text-foreground/70 hover:bg-muted hover:text-primary",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <Button asChild className="h-10 px-4 font-semibold md:h-11 md:px-6">
            <Link href="/contact">
              Konsultasi
              <ArrowRight className="hidden sm:block" />
            </Link>
          </Button>
        </div>
      </header>
    </>
  )
}

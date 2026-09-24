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
      {/* Top info bar — reads like a job-ticket header strip */}
      <div className="hidden bg-secondary font-mono text-[11px] uppercase tracking-wider text-secondary-foreground/80 md:block">
        <div className="container flex h-9 items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Tegalgede, Karanganyar
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {businessHours}
            </span>
          </div>
          <a
            href={waLink(waContacts[0].phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-secondary-foreground transition-colors hover:text-primary"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Chat CS
          </a>
        </div>
      </div>
      <div aria-hidden className="hidden h-[3px] w-full bg-primary md:block" />

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b-2 border-foreground bg-card/95 backdrop-blur-lg transition-shadow supports-[backdrop-filter]:bg-card/90",
          scrolled && "shadow-soft",
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
                    "px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors",
                    active ? "bg-foreground text-background" : "text-foreground/70 hover:text-primary",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <Button asChild className="h-10 px-4 md:h-11 md:px-6">
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

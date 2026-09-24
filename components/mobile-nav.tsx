"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Info, Printer, ImageIcon, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Tentang", href: "/about", icon: Info },
    { name: "Produk", href: "/products", icon: Printer },
    { name: "Galeri", href: "/gallery", icon: ImageIcon },
    { name: "Kontak", href: "/contact", icon: Phone },
  ]

  return (
    <nav
      aria-label="Navigasi seluler"
      className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-border bg-white/95 backdrop-blur-lg md:hidden"
    >
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 transition-colors duration-200",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="mobileActiveTab"
                  className="absolute top-0 h-0.5 w-10 rounded-full bg-highlight"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={cn(
                  "flex h-7 w-12 items-center justify-center rounded-full transition-colors",
                  isActive && "bg-accent",
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-semibold">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

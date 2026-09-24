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
      className="fixed bottom-0 left-0 z-50 h-16 w-full border-t-2 border-foreground bg-card/95 backdrop-blur-lg md:hidden"
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
                isActive ? "bg-foreground text-background" : "text-muted-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="mobileActiveTab"
                  className="absolute top-0 h-[3px] w-10 bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="h-5 w-5" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wide">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

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
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background/80 backdrop-blur-lg border-t md:hidden">
      <div className="grid h-full grid-cols-5">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center relative transition-colors duration-200",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center gap-1"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-0.5 left-1/2 w-1 h-1 bg-primary rounded-full -translate-x-1/2"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

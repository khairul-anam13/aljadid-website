import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
  image?: string
  className?: string
  children?: React.ReactNode
}

// Inner-page hero: forest green band with breadcrumb, optional background photo and a green/red accent rule.
export function PageHeader({ title, description, eyebrow, image, className, children }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden bg-secondary text-secondary-foreground", className)}>
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
      <div aria-hidden className="absolute inset-0 bg-dots text-white/[0.07]" />
      <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/30" />

      <div className="container relative py-16 md:py-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Beranda
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{title}</span>
          </nav>
          {eyebrow && <span className="eyebrow mb-4 text-red-300">{eyebrow}</span>}
          <h1 className="heading-xl max-w-3xl text-balance text-white">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
          )}
          {children}
        </Reveal>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-1.5">
        <span className="flex-1 bg-primary" />
        <span className="w-24 bg-highlight sm:w-40" />
      </div>
    </section>
  )
}

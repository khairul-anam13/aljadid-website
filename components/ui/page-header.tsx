import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { RegistrationMark } from "@/components/print-marks"

interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
  image?: string
  className?: string
  children?: React.ReactNode
}

// Inner-page hero: ink band with breadcrumb, an optional background photo, and a red/green cut-line.
export function PageHeader({ title, description, eyebrow, image, className, children }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden bg-secondary text-secondary-foreground", className)}>
      {image && <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />}
      <div aria-hidden className="absolute inset-0 bg-secondary/85" />
      <div aria-hidden className="absolute inset-0 bg-dots text-secondary-foreground/[0.06]" />
      <RegistrationMark className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-primary/25 sm:h-40 sm:w-40" />

      <div className="container relative py-16 md:py-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-secondary-foreground/55">
            <Link href="/" className="transition-colors hover:text-secondary-foreground">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-secondary-foreground">{title}</span>
          </nav>
          {eyebrow && <span className="eyebrow mb-4 border-primary text-secondary-foreground">{eyebrow}</span>}
          <h1 className="misprint-invert heading-xl max-w-3xl text-balance text-secondary-foreground">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl font-serif text-base leading-relaxed text-secondary-foreground/75 sm:text-lg">{description}</p>
          )}
          {children}
        </Reveal>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-[3px]">
        <span className="flex-1 bg-primary" />
        <span className="w-24 bg-highlight sm:w-40" />
      </div>
    </section>
  )
}

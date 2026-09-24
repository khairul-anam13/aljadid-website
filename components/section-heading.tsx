import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  invert?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = "left", invert = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className={cn("eyebrow mb-4", align === "center" && "justify-center", invert && "border-primary text-secondary-foreground")}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn("heading-lg text-balance", invert ? "misprint-invert text-secondary-foreground" : "misprint")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 font-serif text-base sm:text-lg leading-relaxed", invert ? "text-secondary-foreground/70" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  )
}

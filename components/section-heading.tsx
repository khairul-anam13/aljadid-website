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
        <span className={cn("eyebrow mb-4", align === "center" && "justify-center", invert && "text-red-300")}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn("heading-lg text-balance", invert && "text-white")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", invert ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  )
}

import { cn } from "@/lib/utils"

/**
 * Hand-built SVG print motifs — the site's signature visual fingerprint (see DESIGN.md #6).
 * Never emoji, never an icon-font glyph: these mimic real marks printed on an offset proof
 * sheet (registration crosshair, corner crop marks).
 */

export function RegistrationMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="1" x2="16" y2="31" stroke="currentColor" strokeWidth="1.5" />
      <line x1="1" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.25" fill="currentColor" />
    </svg>
  )
}

type Corner = "tl" | "tr" | "bl" | "br"

const cropMarkRotation: Record<Corner, number> = { tl: 0, tr: 90, br: 180, bl: 270 }
const cropMarkPosition: Record<Corner, string> = {
  tl: "left-0 top-0",
  tr: "right-0 top-0",
  br: "right-0 bottom-0",
  bl: "left-0 bottom-0",
}

export function CropMark({ className, corner = "tl" }: { className?: string; corner?: Corner }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      style={{ transform: `rotate(${cropMarkRotation[corner]}deg)` }}
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 7V1H7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

/** Places four crop marks at the corners of a `relative` parent, over a photo. Uses a paper-light
 *  stroke plus a drop-shadow (not mix-blend-mode, which headless/software Chromium can rasterize
 *  incorrectly) so the marks stay legible over any photo. `className` overrides the mark color. */
export function CornerMarks({ className }: { className?: string }) {
  return (
    <div className="pointer-events-none absolute inset-2 z-10" aria-hidden="true">
      {(Object.keys(cropMarkPosition) as Corner[]).map((corner) => (
        <CropMark
          key={corner}
          corner={corner}
          className={cn(
            "absolute h-4 w-4 text-background drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]",
            cropMarkPosition[corner],
            className,
          )}
        />
      ))}
    </div>
  )
}

import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeaderStatic({ title, description, className }: PageHeaderProps) {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/30 backdrop-blur-md"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Decorative elements - responsive sizing */}
      <div className="absolute top-4 sm:top-8 md:top-10 right-[5%] sm:right-[10%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-primary/10 blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-[5%] sm:left-[10%] w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-secondary/10 blur-2xl md:blur-3xl"></div>

      <div className="container relative">
        <div className={cn("flex flex-col items-center justify-center text-center max-w-4xl mx-auto", className)}>
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="heading-lg text-balance">{title}</h1>
            {description && (
              <p className="text-responsive text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

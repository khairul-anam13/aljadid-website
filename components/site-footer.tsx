import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/40 pb-16 md:pb-0">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-medium mb-4">Al Jadid Offset</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menyediakan layanan percetakan berkualitas tinggi untuk kebutuhan bisnis dan personal Anda sejak 2005.
            </p>
            <div className="mt-5 flex justify-center md:justify-start gap-3">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <h3 className="font-display text-xl font-medium mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="font-display text-xl font-medium mb-4">Kontak</h3>
            <ul className="space-y-5 text-muted-foreground">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-secondary" />
                <span className="font-medium hover:text-secondary transition-colors cursor-pointer">+62 813-9324-2084</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-destructive mt-0.5" />
                <div className="space-y-4">
                  <div>
                    <strong className="block text-foreground text-sm font-semibold mb-1">Al Jadid 1 &ndash; Barat</strong>
                    <p className="text-sm leading-relaxed border-l-2 border-destructive/30 pl-3">Jalan Menteri Supeno, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711</p>
                  </div>
                  <div>
                    <strong className="block text-foreground text-sm font-semibold mb-1">Al Jadid 2 &ndash; Timur</strong>
                    <p className="text-sm leading-relaxed border-l-2 border-destructive/30 pl-3">Jl. Rm. Said No.74, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57751</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/70 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Al Jadid Offset. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Phone } from "lucide-react"
import { businessHours, locations, mainPhone, navItems, services } from "@/lib/site"

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="0" ry="0" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
  },
]

export function SiteFooter() {
  return (
    <footer className="relative bg-secondary pb-16 text-secondary-foreground/70 md:pb-0">
      <div aria-hidden className="flex h-[3px]">
        <span className="flex-1 bg-primary" />
        <span className="w-24 bg-highlight sm:w-40" />
      </div>

      <div className="container grid grid-cols-2 gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-4">
          <div className="inline-flex border-2 border-secondary-foreground/20 bg-background p-3">
            <Image src="/images/logo.png" alt="Al Jadid Offset" width={140} height={86} className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-sm font-serif leading-relaxed">
            Mencetak dokumen, promosi, dan penghargaan untuk bisnis, sekolah, dan instansi di
            Karanganyar sejak 2005 — sekaligus mendidik tukang cetak generasi berikutnya lewat
            program magang kami.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center border-2 border-secondary-foreground/20 text-secondary-foreground transition-colors hover:border-primary hover:bg-primary"
              >
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
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-2">
          <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-wider text-secondary-foreground">Tautan</h3>
          <ul className="space-y-3 text-sm font-serif">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-secondary-foreground">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-2">
          <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-wider text-secondary-foreground">Layanan</h3>
          <ul className="space-y-3 text-sm font-serif">
            {services.map((service) => (
              <li key={service.title}>
                <Link href="/products" className="transition-colors hover:text-secondary-foreground">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-4">
          <h3 className="mb-5 font-mono text-xs font-bold uppercase tracking-wider text-secondary-foreground">Kontak</h3>
          <ul className="space-y-4 text-sm font-serif">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:+${mainPhone.wa}`} className="font-semibold text-secondary-foreground transition-colors hover:text-primary">
                {mainPhone.label}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{businessHours}</span>
            </li>
            {locations.map((loc) => (
              <li key={loc.name} className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <strong className="block font-semibold text-secondary-foreground">{loc.name}</strong>
                  <span className="leading-relaxed">{loc.address}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-secondary-foreground/15">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-center font-mono text-[11px] uppercase tracking-wide sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Al Jadid Offset. Hak cipta dilindungi.</p>
          <p>Percetakan &amp; kreasi visual · Karanganyar</p>
        </div>
      </div>
    </footer>
  )
}

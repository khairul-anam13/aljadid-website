// Shared business data, so the header, footer, contact page and WhatsApp widget stay in sync.

export const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Produk", href: "/products" },
  { name: "Galeri", href: "/gallery" },
  { name: "Kontak", href: "/contact" },
]

export const businessHours = "Senin – Sabtu, 09.00 – 17.00"

export const mainPhone = { label: "+62 813-9324-2084", wa: "6281393242084" }

export const waContacts = [
  { name: "Mba Lala – Kantor 1", phone: "6283836323255", label: "+62 838-3632-3255", role: "Customer Service" },
  { name: "Mba Yuni – Kantor 2", phone: "6283866649071", label: "+62 838-6664-9071", role: "Customer Service" },
  { name: "Pesanan Partai Besar", phone: "6281246419239", label: "+62 812-4641-9239", role: "Prioritas & Marketing" },
]

export const locations = [
  {
    name: "Al Jadid 1 – Barat",
    desc: "Pusat Produksi Cetak Massal",
    address: "Jalan Menteri Supeno, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.8122660831666!2d110.95672755050514!3d-7.601548781398075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1881ae22a67b%3A0x79fb09f7d40afd81!2sAl%20Jadid%20Offset!5e0!3m2!1sid!2sid!4v1775208060693!5m2!1sid!2sid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Jadid+Offset+Karanganyar",
  },
  {
    name: "Al Jadid 2 – Timur",
    desc: "Desain, ATK, & Produksi Spesialis",
    address: "Jl. Rm. Said No.74, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57751",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.4050709903312!2d110.95599397592463!3d-7.600863518159444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1919d31479f9%3A0xfc9c190f0f2e534!2sAl%20Jadid%20Offset%202!5e0!3m2!1sid!2sid!4v1775208103938!5m2!1sid!2sid",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Jadid+Offset+2+Karanganyar",
  },
]

export const services = [
  { category: "Dokumen & Bisnis", title: "Cetak Dokumen", desc: "Formulir, laporan, dan administrasi perkantoran dengan presisi tinggi.", image: "/produk/rapot.png" },
  { category: "Visual Outdoor", title: "Cetak Banner", desc: "MMT skala besar untuk promosi luar ruang yang tahan cuaca.", image: "/produk/mmt.png" },
  { category: "Produk & Retail", title: "Stiker Label", desc: "Label vinyl dan cutting custom untuk identitas produk Anda.", image: "/produk/sticker.png" },
  { category: "Pendidikan", title: "Sampul Rapot", desc: "Produksi sampul rapot sekolah dengan standar durabilitas tinggi.", image: "/produk/rapot.png" },
  { category: "Penghargaan", title: "Piala & Plakat", desc: "Penghargaan eksklusif dan souvenir akrilik dengan desain elegan.", image: "/produk/piala.png" },
  { category: "Konveksi", title: "Sablon & Merch", desc: "Sablon kaos dan merchandise branding untuk komunitas & instansi.", image: "/produk/kaos.png" },
]

export function waLink(phone: string, text?: string) {
  return `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`
}

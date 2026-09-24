# DESIGN.md — Al Jadid Offset

> Redesain total situs profil bisnis **Al Jadid Offset**, percetakan asli di Karanganyar,
> Jawa Tengah. Identitas bisnis (nama, tahun berdiri, alamat, produk) nyata dan dipertahankan —
> yang dirombak total adalah bahasa visual dan cara bertutur.

## 0. Identitas bisnis (ringkas)

- **Nama**: Al Jadid Offset ("Al Jadid" = "yang baru" dalam bahasa Arab — tertulis dalam
  kaligrafi Arab di logo asli, disandingkan dengan wordmark Latin hijau dan swoosh merah).
- **Kota**: Karanganyar, Jawa Tengah — dua lokasi di Tegalgede.
- **Berdiri**: 2005 (20+ tahun berjalan).
- **Pembeda nyata dari kompetitor**: kebanyakan percetakan di Karanganyar adalah satu kios
  yang mengerjakan segalanya di satu ruang sempit. Al Jadid memisahkan alur kerjanya jadi
  dua unit: **Al Jadid 1 (Barat)** untuk produksi cetak massal skala industri, dan
  **Al Jadid 2 (Timur)** untuk desain, ATK, dan pekerjaan spesialis (piala, plakat, sablon
  presisi). Ditambah satu hal yang jarang dimiliki percetakan sekelasnya: program PKL/magang
  tahunan untuk siswa SMK — Al Jadid ikut mencetak tukang cetak generasi berikutnya, bukan
  cuma cetakan.
- Fakta ini menjadi dasar konsep visual: bisnis yang bekerja dengan **presisi warna,
  registrasi plat, dan proses fisik** — bukan bisnis jasa digital generik.

---

## 1. Konsep visual (satu kalimat)

**"Bukti Cetak" (Press Proof)** — situs ini terlihat seperti lembar bukti cetak (proof
sheet) yang baru turun dari mesin offset: kertas kraft belum dipotong, tinta hitam pekat
yang belum kering, dan tanda registrasi warna yang sengaja dibiarkan terlihat sedikit
"meleset" — karena presisi menyatukan warna itulah produk sesungguhnya yang dijual Al Jadid,
bukan sekadar "kualitas terbaik" yang klise.

---

## 2. Tipografi

| Peran | Font | Alasan |
|---|---|---|
| **Display** (H1–H3, angka besar) | **Anton** | Kondensat, super tebal, mirip huruf pada papan nama percetakan/poster jalanan — punya tekanan fisik seperti plat cetak yang ditekan ke kertas. Dipakai di ukuran ekstrem (hingga 12–14rem di hero) untuk kontras ukuran yang tegas terhadap teks isi. |
| **Body / narasi** (paragraf cerita, deskripsi) | **Source Serif 4** | Serif kerja-keras yang nyaman dibaca panjang — merujuk pada apa yang sebenarnya Al Jadid produksi: buku, sampul rapot, dokumen cetak. Memberi kehangatan yang menyeimbangkan agresivitas Anton. |
| **Label / UI / angka data** (nav, tombol, eyebrow, tag, statistik, harga) | **Space Mono** | Berkarakter seperti nomor plat cetak, tiket produksi, atau stempel tanggal — dipakai huruf kapital + letter-spacing lebar supaya terasa seperti cap, bukan UI generik. |

Tidak ada satupun Inter/Roboto/Arial/system-ui. Kontras ukuran ekstrem: label mono 11px
vs. judul Anton yang bisa mencapai 15–20× lipatnya di hero.

---

## 3. Palet warna

Filosofi: setiap lembar cetak hanya punya dua kutub — **kertas** (belum dicetak) dan
**tinta** (sudah dicetak) — plus dua warna spot yang diambil langsung dari logo asli
Al Jadid (bukan warna impor baru), supaya sistem ini terasa *milik mereka*, bukan template.

Diekspresikan sebagai CSS variables (`--background`, `--foreground`, dst) di `globals.css`.

| Peran | Nama | Nilai (HSL) | Pemakaian |
|---|---|---|---|
| **Dominan — terang** | Kertas Kraft | `42 42% 93%` | Latar utama hampir semua section. Pengganti putih klinis — permukaan bertekstur butiran kertas tipis (lihat §5). |
| **Dominan — gelap** | Tinta Pekat | `255 20% 10%` | Kutub sebaliknya dari kertas: header ticker, footer, 1–2 section penuh (Kenapa Kami, band judul halaman dalam). Hitam yang condong indigo — menggemakan warna kaligrafi Arab di logo asli. |
| **Aksen utama** | Merah Cetak | `8 74% 46%` | CTA utama, angka kunci, garis bawah, tanda registrasi. Diambil dari warna swoosh merah pada logo asli. |
| **Aksen kedua** | Hijau Plat | `150 68% 24%` | Tag kategori, ikon sekunder, hover link. Diambil dari warna wordmark hijau pada logo asli — bukan warna baru. |
| **Netral** | Abu Tinta | `30 8% 40%` teks / `40 18% 80%` garis | Teks sekunder dan garis pembatas tipis di atas kertas. |

Aturan pemakaian: dominan kertas vs. tinta **bergantian per-section** (seperti membalik
lembar cetak), bukan satu warna latar polos dari atas ke bawah. Merah dan hijau tidak pernah
dipakai sebagai gradasi — selalu warna datar (flat), sesuai larangan gradien.

---

## 4. Aturan layout

1. **Tidak ada hero rata tengah.** Hero selalu asimetris: blok teks besar rata kiri
   berdampingan dengan foto asli kantor/produk yang diberi bingkai tanda potong (crop mark),
   bukan lingkaran blur dekoratif.
2. **Tidak ada grid "3 kartu fitur" yang seragam.** Grid section memakai kolom timpang
   (mis. 5/7, atau satu kartu besar + daftar), diberi nomor tiket produksi (`01`, `02`, …)
   dalam font mono, bukan ikon bulat identik berjajar tiga.
3. **Sudut selalu tajam.** `border-radius: 0` di seluruh kartu, tombol, gambar, badge.
   Satu-satunya elemen bulat yang disisakan adalah tanda registrasi (lingkaran kecil
   bersilang, §6) dan indikator status (titik "online" WhatsApp) — karena keduanya memang
   berbentuk bulat di dunia nyata.
4. **Bayangan selalu keras, tidak pernah lembut.** Ganti `box-shadow` blur dengan bayangan
   offset padat 4–8px warna tinta/merah (`shadow-print`) — efek "cetakan kedua yang sedikit
   bergeser", bukan drop-shadow halus ala kartu SaaS.
5. **Section dipisah garis tebal atau blok warna penuh**, bukan hanya spasi putih. Setiap
   pergantian dominan kertas↔tinta punya rule 4–6px sebagai "garis potong".
6. **Section berat sebelah dengan sengaja** (mis. 5 kolom teks + 7 kolom visual) — simetri
   sempurna dihindari kecuali untuk elemen yang secara semantik memang harus simetris (form).

---

## 5. Tekstur & lapisan

- Latar kertas memakai **grain halus** (SVG noise / radial-gradient berulang beropacity
  sangat rendah) — bukan warna datar kosong.
- Latar tinta memakai **halftone dot** (radial-gradient titik-titik kecil, meniru raster
  cetak offset) di opacity rendah sebagai dekorasi, pengganti "bg-dots" polos yang sudah ada.
- Foto produk/kantor diberi filter duotone tipis (ink/paper) saat idle, kembali ke warna asli
  saat hover — supaya foto terasa "senada" dengan sistem, bukan ditempel begitu saja.

---

## 6. Elemen khas yang paling diingat (signature element)

**Efek misregistrasi cetak.** Judul-judul kunci (H1 hero, angka statistik besar, judul
section) dirender dengan bayangan teks berwarna merah yang sengaja digeser 3–5px dari teks
hitam utamanya — persis seperti hasil cetak offset ketika plat warna tidak 100% presisi.
Elemen ini dipasangkan dengan **tanda registrasi** (lingkaran kecil bersilang ⌖, dibuat
sebagai SVG sendiri, bukan emoji) di sudut-sudut section penting, dan **tanda potong**
(garis L kecil di sudut) di bingkai foto.

Efek ini **hanya masuk akal untuk bisnis percetakan offset** — tidak bisa ditempel begitu
saja ke bisnis lain, sehingga jadi sidik jari visual situs ini.

Animasi load (satu-satunya animasi besar, terjadi sekali saat hero pertama kali render):
lapisan tinta hitam "menyapu" dari kiri ke kanan menutupi headline seperti rol mesin cetak,
lalu terangkat sambil menjatuhkan judul ke posisinya — teks bayangan merah yang tadinya
meleset **kemudian bertaut presisi** ke posisi akhirnya. Menghormati `prefers-reduced-motion`
(langsung tampil diam tanpa sapuan bagi pengguna yang meminta motion lebih sedikit).
Section lain di bawah hero tidak lagi memakai fade-in-on-scroll di setiap kartu — cukup
transisi halus pada judul section saja, supaya gerakan tidak berlebihan di semua elemen.

---

## 7. Yang dihindari (checklist kepatuhan aturan mutlak)

- ❌ Gradien ungu/biru di atas putih → tidak ada gradien sama sekali, semua warna flat.
- ❌ Font Inter/Roboto/Arial/system-ui → Anton + Source Serif 4 + Space Mono.
- ❌ Hero rata tengah + 3 kartu fitur → hero asimetris, grid timpang bernomor tiket.
- ❌ Emoji sebagai ikon → SVG buatan sendiri (tanda registrasi, tanda potong) + lucide-react.
- ❌ Kartu bersudut bulat + bayangan halus di semua elemen → sudut tajam + bayangan keras.

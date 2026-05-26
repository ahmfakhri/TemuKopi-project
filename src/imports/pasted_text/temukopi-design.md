Buat desain web dan mobile responsive untuk aplikasi bernama “TemuKopi”.

TemuKopi adalah platform untuk membantu pengguna menemukan coffee shop terbaik berdasarkan lokasi, suasana, mood, preferensi rasa, rekomendasi menu, promo, dan kebutuhan pengguna. TemuKopi juga menyediakan fitur untuk UMKM coffee shop agar bisa mendaftarkan dan mengelola tempat usahanya.

Gaya desain utama:
- Warm coffee aesthetic
- Clean, modern, cozy, premium, dan ramah pengguna
- Warna utama: cream, beige, coklat tua, caramel, putih hangat, dan aksen hijau daun lembut
- Gunakan rounded corner besar, soft shadow, border tipis, dan banyak whitespace
- Gunakan foto coffee shop, minuman kopi, latte, dessert, croissant, brownies, dan elemen daun
- Font sans-serif modern
- Layout rapi seperti aplikasi web profesional
- Cocok untuk web design competition

Buat interactive prototype dengan halaman berikut:

1. HOMEPAGE

Buat halaman utama TemuKopi.

Navbar:
- Logo icon cangkir kopi dan teks “TemuKopi”
- Menu: Beranda, Cari, Mood Finder AI, Rekomendasi, Promo, Untuk UMKM
- Icon heart/favorit
- Avatar user

Hero section:
- Background foto interior coffee shop yang blur dengan overlay coklat hangat
- Judul besar:
  “Temukan Coffee Shop Sesuai Mood & Selera Kamu”
- Subjudul:
  “Eksplorasi ratusan coffee shop dengan rekomendasi berdasarkan suasana hati dan preferensi rasa.”
- Search bar dengan placeholder:
  “Cari coffee shop atau lokasi...”
- Tombol “Cari”
- Gunakan warna teks warm white atau cream terang

Section kategori cepat:
Tampilkan card kategori:
- Nugas
- Meeting
- Date
- Nongkrong
- Healing
- Malam Hari

Section rekomendasi:
Judul:
“Rekomendasi Untuk Kamu”

Tampilkan card coffee shop:
1. Kopi Ruang Hati
2. Tanamera Coffee
3. Kolektif Space
4. See You Coffee

Setiap card berisi:
- Foto coffee shop
- Nama tempat
- Rating
- Jarak
- Tag suasana
- Icon heart
- Tombol kecil atau link detail

Interaksi:
- Klik search menuju halaman Pencarian & Filter
- Klik kategori menuju halaman pencarian dengan filter suasana
- Klik card coffee shop menuju halaman Detail Coffee Shop
- Klik heart menyimpan ke favorit

2. MOOD FINDER AI

Buat halaman “Mood Finder AI” sebagai fitur utama berbasis AI.

Konsep:
Pengguna tidak memilih mood dari tombol tetap, tetapi mengetik bebas tentang suasana hati, kebutuhan, dan preferensi kopi mereka. AI TemuKopi kemudian memberikan analisis mood, rekomendasi kopi, dan rekomendasi coffee shop yang cocok.

Layout:
Gunakan layout desktop 2 kolom besar:
- Kolom kiri untuk chat AI
- Kolom kanan untuk hasil rekomendasi AI

Navbar:
- Sama seperti homepage
- Menu “Mood Finder AI” dalam keadaan aktif dengan underline coklat

Kolom kiri: Chat AI

Judul:
“Mood Finder AI”

Subjudul:
“Ceritakan mood kamu hari ini, biarkan AI TemuKopi menemukan kopi dan coffee shop yang paling cocok untukmu.”

Tambahkan ilustrasi robot AI lucu yang membawa cangkir kopi.

Buat card chat besar berisi:
Bubble AI:
“Hai! Aku TemuKopi AI ☕ Ceritakan mood kamu hari ini, biar aku bisa kasih rekomendasi kopi dan tempat ngopi yang paling cocok untukmu.”

Bubble user:
“Aku lagi capek, pengen tempat yang tenang buat sendiri, dan kopinya jangan terlalu pahit.”

Bubble AI:
“Baik! Aku sudah memahami mood dan preferensimu. Berikut rekomendasi kopi dan coffee shop yang cocok untukmu.”

Di bawah chat, tampilkan suggestion prompt chips:
- Aku butuh fokus buat nugas
- Aku lagi capek dan pengen santai
- Aku pengen healing di tempat estetik
- Aku mau nongkrong bareng teman
- Aku cari tempat date yang cozy
- Aku pengen kopi yang strong tapi tenang

Tambahkan input chat:
Placeholder:
“Ceritakan mood, kebutuhan, atau preferensi kopimu...”

Tambahkan tombol kirim bulat berwarna coklat tua dengan icon arrow/send.

Kolom kanan: Hasil AI

Section 1: Analisis Mood
Card dengan icon otak/AI.
Judul:
“Analisis Mood Kamu”

Isi:
“Kamu sedang membutuhkan suasana yang tenang, nyaman, dan cocok untuk me time. Preferensimu mengarah ke minuman creamy atau mild coffee yang tidak terlalu pahit.”

Section 2: Kopi yang Cocok Untukmu
Tampilkan 3 card kopi horizontal:
1. Vanilla Latte
- Gambar minuman
- Rasa: creamy, manis ringan
- Kafein: sedang
- Alasan: cocok untuk mood santai dan tidak terlalu pahit

2. Caramel Macchiato
- Gambar minuman
- Rasa: manis, creamy
- Kafein: sedang
- Alasan: cocok untuk melepas capek dengan rasa yang lembut
- Buat card ini dalam state selected dengan border coklat tua dan icon centang

3. Iced Latte
- Gambar minuman
- Rasa: ringan, creamy, segar
- Kafein: sedang
- Alasan: cocok untuk suasana santai dan me time

Gunakan indikator kafein berupa titik-titik kecil.

Section 3: Coffee Shop yang Direkomendasikan

Judul:
“Coffee Shop yang Direkomendasikan”

Tambahkan tombol kecil:
“Lihat Peta”

Tampilkan 3 card coffee shop horizontal:

1. Kopi Ruang Hati
- Foto interior coffee shop cozy
- Rating 4.6
- Jumlah ulasan 230
- Jarak 1.2 km
- Harga Rp 20.000 - Rp 45.000
- Tag: Tenang, Cozy, WiFi
- Alasan: Cocok untuk me time dan suasana santai.
- Icon heart favorit
- Tombol “Lihat Detail”

2. Tanamera Coffee
- Foto interior coffee shop premium
- Rating 4.7
- Jumlah ulasan 186
- Jarak 2.1 km
- Harga Rp 25.000 - Rp 60.000
- Tag: Cozy, Premium, Tenang
- Alasan: Cocok untuk menikmati kopi creamy dengan suasana nyaman.
- Icon heart favorit aktif/merah
- Tombol “Lihat Detail”

3. Kolektif Space
- Foto interior coffee shop terang dan work friendly
- Rating 4.5
- Jumlah ulasan 152
- Jarak 1.8 km
- Harga Rp 20.000 - Rp 50.000
- Tag: Work Friendly, Stopkontak, Tenang
- Alasan: Cocok untuk produktivitas tapi tetap santai.
- Icon heart favorit
- Tombol “Lihat Detail”

Tombol aksi lanjutan di bawah halaman:
- Cari yang Lebih Dekat
- Cari yang Lebih Murah
- Cari Tempat Lebih Tenang
- Ganti Preferensi
- Mulai Chat Baru

Tombol “Mulai Chat Baru” menggunakan background coklat tua dan teks cream/putih.

State awal sebelum user mengirim pesan:
- Chat hanya berisi pesan pembuka dari AI
- Suggestion prompt chips tampil
- Kolom kanan menampilkan empty state:
  “Ceritakan mood kamu terlebih dahulu untuk mendapatkan rekomendasi kopi dan coffee shop.”
- Empty state memakai ilustrasi cangkir kopi dan sparkle

Interaksi prototype:
- Klik suggestion chip → mengisi input chat
- Klik tombol kirim → menampilkan bubble user, bubble AI, analisis mood, rekomendasi kopi, dan rekomendasi coffee shop
- Klik card kopi → card berubah selected dan rekomendasi coffee shop menyesuaikan
- Klik icon heart → berubah menjadi favorit
- Klik “Lihat Detail” → menuju halaman Detail Coffee Shop
- Klik “Cari yang Lebih Dekat” → update rekomendasi dengan label jarak lebih dekat
- Klik “Cari yang Lebih Murah” → update rekomendasi dengan harga lebih rendah
- Klik “Mulai Chat Baru” → kembali ke state awal

3. REKOMENDASI SESUAI SELERA RASA

Buat halaman rekomendasi menu berdasarkan preferensi rasa.

Navbar sama seperti halaman lain.

Judul:
“Temukan Menu Sesuai Selera Rasa Kamu”

Subjudul:
“Atur preferensi rasa yang kamu suka, lalu TemuKopi akan memberikan rekomendasi menu terbaik.”

Buat slider preferensi rasa:
- Manis 80%
- Creamy 70%
- Strong / Kuat 40%
- Kopi / Pahit 30%
- Segar 60%

Di kanan, buat card:
“Rekomendasi Menu Untukmu”

List menu:
1. Kopi Susu Aren
- Tanamera Coffee
- 90% Match

2. Caramel Macchiato
- See You Coffee
- 80% Match

3. Vanilla Latte
- Kolektif Space
- 85% Match

Setiap item menu memiliki:
- Gambar minuman
- Nama menu
- Nama coffee shop
- Persentase match
- Icon kecil

Tambahkan tombol:
“Lihat Semua Menu”

Interaksi:
- Slider bisa digeser secara visual
- Rekomendasi menu berubah saat preferensi berubah
- Klik menu menuju detail menu atau coffee shop

4. PENCARIAN & FILTER

Buat halaman pencarian coffee shop dengan layout dua kolom.

Navbar sama.

Bagian kiri: Sidebar filter
Isi filter:
- Lokasi dropdown
- Jarak slider
- Fasilitas checkbox:
  WiFi
  Stopkontak
  Parkir
  Outdoor
  Musholla
  Meeting Room
- Harga per orang
- Tombol “Terapkan Filter”

Bagian kanan: Hasil pencarian
- Search bar dengan placeholder:
  “Cari coffee shop, menu, atau suasana...”
- Dropdown urutan:
  “Rating Tertinggi”

List coffee shop horizontal:
1. Tanamera Coffee
2. Kopi Ruang Hati
3. Kolektif Space

Setiap item berisi:
- Foto
- Nama
- Rating
- Jarak
- Suasana
- Fasilitas
- Range harga
- Icon favorit

Tambahkan pagination di bawah.

Interaksi:
- Klik filter mengubah hasil
- Klik coffee shop menuju detail
- Klik heart menyimpan favorit

5. DETAIL COFFEE SHOP

Buat halaman detail coffee shop.

Navbar sama.

Bagian atas:
- Gallery foto coffee shop besar
- Thumbnail foto di sisi kanan atau bawah
- Nama coffee shop:
  “Tanamera Coffee”
- Rating 4.7
- Jumlah ulasan 185
- Jam buka 07.00 - 22.00
- Status buka
- Tombol aksi:
  Rute
  Simpan
  Bagikan

Informasi fasilitas:
- WiFi
- Stopkontak
- Parkir
- Outdoor
- Musholla

Tab detail:
- Tentang
- Menu
- Ulasan
- Foto
- Promo

Tab Tentang:
- Deskripsi singkat:
  “Tanamera Coffee adalah coffee shop dengan konsep industrial minimalis yang cocok untuk kerja, meeting, maupun nongkrong santai.”
- Alamat
- Lokasi strategis
- Estimasi harga

Di kanan:
Card rating pengunjung:
- Rating besar 4.7
- Breakdown bintang 5 sampai 1
- Jumlah ulasan

Interaksi:
- Klik tab berpindah isi
- Klik Simpan berubah menjadi tersimpan
- Klik Rute membuka state map
- Klik Menu menuju halaman menu
- Klik Ulasan menuju section ulasan

6. MENU & PAIRING REKOMENDASI

Buat halaman menu coffee shop dan rekomendasi pairing.

Navbar sama.

Layout:
- Sidebar kategori menu di kiri
- Konten menu di kanan

Kategori:
- Semua Menu
- Signature
- Coffee
- Non Coffee
- Snack
- Makanan Berat

Tab atas:
- Menu
- Rekomendasi Pairing

Bagian rekomendasi pairing:
Judul:
“Menu yang sering dipadukan pelanggan”

Tampilkan pairing:
1. Kopi Susu Aren → Brownies
- Match 80%

2. Caramel Macchiato → Croissant
- Match 75%

3. Matcha Latte → Cheese Cake
- Match 70%

Setiap pairing berisi:
- Gambar minuman
- Nama minuman
- Harga
- Icon panah
- Gambar makanan
- Nama makanan
- Persentase match

Interaksi:
- Klik kategori mengubah daftar menu
- Klik tab berpindah ke pairing
- Klik menu membuka detail menu
- Klik tambah favorit atau simpan menu

7. PROMO & PAKET HEMAT

Buat halaman promo.

Navbar sama.

Judul:
“Promo & Paket Hemat”

Tampilkan 3 banner promo besar:
1. Happy Hour Diskon 20%
- Setiap hari 14.00 - 17.00
- Semua menu minuman

2. Paket Hemat Ngopi & Nongkrong
- Mulai dari Rp 35.000
- Kopi + snack

3. Buy 1 Get 1 Free
- Setiap pembelian menu tertentu

Gunakan gambar kopi, dessert, dan background beige/caramel.

Tambahkan tombol:
“Lihat Semua Promo”

Interaksi:
- Klik promo membuka modal detail promo
- Klik klaim promo mengubah state menjadi “Promo Tersimpan”

8. UNTUK UMKM / DAFTAR & KELOLA

Buat halaman untuk UMKM coffee shop.

Navbar sama.

Bagian kiri:
Form “Daftar Coffee Shop”

Field:
- Nama Coffee Shop
- Kategori
- Alamat
- Nomor Telepon
- Jam Operasional
- Deskripsi
- Upload Foto
- Tombol “Selanjutnya”

Bagian kanan:
Dashboard UMKM preview.

Judul:
“Dashboard UMKM”

Statistik:
- Total Order: 1.245
- Total Favorit: 328
- Total Ulasan: 86
- Rating: 4.6

Tampilkan:
- Menu terpopuler
- Grafik pengunjung 30 hari
- Sidebar dashboard dengan icon menu

Interaksi:
- Klik Selanjutnya menuju dashboard UMKM
- Klik menu sidebar berpindah section
- Klik upload foto membuka state upload

9. ULASAN & RATING

Buat halaman atau section ulasan.

Judul:
“Ulasan Pengunjung”

Tampilkan rating besar:
4.7

Tampilkan bintang rating dan jumlah:
185 ulasan

List ulasan:
1. Aulia Rahma
- Avatar
- Rating bintang 5
- Komentar:
  “Tempatnya nyaman, WiFi kencang, enak banget buat tugas berjam-jam.”

2. Dimas Pratama
- Avatar
- Rating bintang 5
- Komentar:
  “Suasananya tenang dan pelayanan ramah. Cocok buat kerja.”

Tambahkan tombol:
“Tulis Ulasan”

Interaksi:
- Klik Tulis Ulasan membuka modal form
- Modal berisi rating bintang, textarea komentar, tombol kirim
- Setelah kirim muncul ulasan baru secara visual

10. FAVORIT & RIWAYAT

Buat halaman Favorit & Riwayat.

Layout card besar dengan dua tab:
- Favorit
- Riwayat

Tab Favorit:
Tampilkan coffee shop tersimpan:
1. Kopi Ruang Hati
2. Tanamera Coffee
3. Kolektif Space

Setiap item berisi:
- Foto kecil
- Nama tempat
- Rating
- Icon heart merah
- Tombol lihat detail

Tab Riwayat:
Tampilkan riwayat tempat yang pernah dilihat:
- See You Coffee
- Kopi Ruang Hati
- Tanamera Coffee

Tambahkan tombol:
“Lihat Semua Favorit”

Interaksi:
- Klik tab Favorit/Riwayat berpindah isi
- Klik heart menghapus dari favorit
- Klik item menuju detail

11. FOOTER / BRANDING SECTION

Buat footer dengan background coklat tua.

Isi:
- Logo besar TemuKopi
- Tagline:
  “Temukan coffee terbaik, sesuai mood & selera kamu.”

Tampilkan tiga fitur utama:
1. Temukan Coffee Shop
2. Sesuai Mood Kamu
3. Menu Sesuai Selera

Gunakan icon line putih/cream.

12. MOBILE RESPONSIVE

Buat versi mobile untuk halaman penting:
- Homepage
- Mood Finder AI
- Pencarian
- Detail Coffee Shop
- Promo
- Favorit

Ketentuan mobile:
- Navbar desktop berubah menjadi bottom navigation
- Bottom navigation berisi:
  Beranda, Cari, AI, Favorit, Profil
- Search bar full width
- Card coffee shop menjadi single column
- Suggestion chips di Mood Finder AI menjadi horizontal scroll
- Hasil rekomendasi AI tampil vertikal
- Tombol aksi lanjutan menjadi horizontal scroll
- Detail coffee shop menggunakan gallery atas dan informasi di bawah
- Layout harus tetap clean dan mudah digunakan

13. PROTOTYPE FLOW

Buat interaksi prototype lengkap:
- Beranda → Homepage
- Cari → Pencarian & Filter
- Mood Finder AI → Mood Finder AI
- Rekomendasi → Rekomendasi Rasa
- Promo → Promo & Paket Hemat
- Untuk UMKM → Halaman UMKM
- Klik search di homepage → Pencarian & Filter
- Klik card coffee shop → Detail Coffee Shop
- Klik tab Menu di detail → Menu & Pairing
- Klik tab Ulasan → Ulasan & Rating
- Klik icon heart → Favorit
- Klik suggestion prompt di Mood Finder AI → input chat terisi
- Klik kirim di Mood Finder AI → hasil AI muncul
- Klik card kopi → selected state berubah
- Klik “Cari yang Lebih Dekat” → rekomendasi coffee shop berubah
- Klik “Mulai Chat Baru” → kembali ke state awal
- Klik promo → modal detail promo
- Klik tulis ulasan → modal form ulasan

Pastikan desain terlihat konsisten, profesional, modern, dan siap dipresentasikan sebagai web design competition.
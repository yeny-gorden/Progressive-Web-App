📐 Kalkulator Gorden Pro v4.1 - Yeny Gorden
Aplikasi berbasis web (PWA - Progressive Web App) yang dirancang khusus untuk membantu pelaku usaha interior gorden dalam menghitung estimasi biaya, mengelola item jendela, dan mencetak dokumen profesional (Invoice & SPK) secara instan.
## ✨ Fitur Utama
 * **Manajemen Multi-Item:** Tambah dan hitung banyak jendela atau item dalam satu laporan.
 * **Dukungan Model Fleksibel:** Menghitung otomatis model **Smokring, Plisket, Tab Top**, hingga **Spiral**.
 * **Dual Mode Produk:** Mendukung perhitungan gorden kain (Import/Lokal) dan berbagai jenis *Blinds*.
 * **Sinkronisasi Google Sheets:** Data katalog kain dan harga aksesoris terhubung langsung ke Google Sheets untuk pembaruan real-time.
 * **PWA Ready:** Dapat diinstal di HP (Android/iOS) dan dapat diakses secara offline.
 * **Otomasi Cetak:** Menghasilkan format cetak **Estimasi/Invoice** untuk pelanggan dan **SPK** untuk tukang jahit/pasang.
 * **Sistem Diskon & DP:** Perhitungan otomatis sisa tagihan setelah uang muka dan diskon.
## 🛠️ Detail Teknis & Rumus
Aplikasi ini menggunakan logika perhitungan berikut:
### 1. Perhitungan Kain
 * **Bidang Besar:** (Lebar + 0.2) \times 3
 * **Bidang Kecil (Lokal):** Dihitung berdasarkan jumlah gelombang dengan rumus pembulatan ke atas per 0.4m.
 * **Model Spiral:** Menghitung penggunaan kain, stick, dan jasa jahit secara spesifik.
### 2. Aksesoris Default
Harga dasar dapat dikonfigurasi melalui menu Pengaturan:
| Aksesoris | Fungsi |
|---|---|
| **Jahit** | Biaya jasa per meter lari kain. |
| **Smokring** | Dihitung otomatis (L x 24 lubang). |
| **Rollet/Rel** | Pembulatan minimal 1 meter ke atas. |
| **Aksesoris** | Termasuk Hook, Tali, dan Stick Spiral. |
## 📂 Struktur File
 * index.html: Struktur utama, styling (CSS), dan logika perhitungan (JavaScript).
 * manifest.json: Konfigurasi PWA agar aplikasi bisa diinstal di layar utama ponsel.
 * sw.js: Service Worker untuk manajemen cache dan dukungan offline.
 * logo.png: Ikon aplikasi.
## 🚀 Cara Penggunaan
### Bagi Pengguna:
 1. **Tab Ukuran:** Masukkan data pelanggan dan detail ukuran jendela (Lebar & Tinggi).
 2. **Tab Pengaturan:** Sesuaikan biaya pasang, diskon, atau edit harga dasar aksesoris jika diperlukan.
 3. **Tab Hasil:** Lihat *live preview* dokumen, lalu klik **Cetak** untuk mencetak ke printer atau simpan sebagai PDF.
### Bagi Pengembang:
Untuk menghubungkan dengan Google Sheets Anda sendiri:
 1. Siapkan Google Sheets dengan struktur JSON yang sesuai.
 2. Deploy sebagai Web App di Google Apps Script.
 3. Ganti konstanta WEB_APP_URL di dalam tag <script> dengan URL hasil deploy Anda.
## 📱 Instalasi di HP
 1. Buka URL aplikasi di browser Chrome (Android) atau Safari (iOS).
 2. Klik ikon titik tiga (Chrome) atau ikon Share (Safari).
 3. Pilih **"Tambah ke Layar Utama"** atau **"Add to Home Screen"**.
 4. Aplikasi kini muncul di menu HP seperti aplikasi asli.
> **Catatan:** Aplikasi ini dioptimalkan untuk tampilan mobile agar memudahkan pengukuran di lokasi pelanggan.
> © 2026 **Yeny Gorden**. All rights reserved.

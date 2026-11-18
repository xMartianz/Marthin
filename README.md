# Website Portofolio Pribadi

Website portofolio statis (HTML + CSS + JavaScript murni, tanpa framework & tanpa build step) untuk Data Analyst / BI Developer.

## Fitur

| Section / Fitur | Keterangan |
| --- | --- |
| **Home** | Nama, foto profesional, headline, efek mengetik peran, statistik berjalan, badge *Open to work* |
| **About Me** | Latar belakang & perjalanan karier + kartu highlight |
| **Technical Skills** | Kartu kategori dengan progress bar animasi + daftar tools |
| **Featured Projects** | Kartu project dengan filter kategori, tombol **Live Demo**, **GitHub**, dan **Lihat Detail** |
| **Dashboard Showcase** | Embed **Power BI** (iframe) atau galeri screenshot interaktif (geser, thumbnail, lightbox + zoom, swipe di HP) |
| **Integrasi GitHub** | Menampilkan 6 repository publik terbaru otomatis lewat GitHub API |
| **Experience** | Timeline pengalaman kerja & pendidikan, garis timeline terisi saat scroll |
| **Certifications** | Kartu sertifikat dengan link verifikasi |
| **Contact** | Info kontak, LinkedIn, GitHub, dan form yang membuka aplikasi email |
| **Halaman detail project** | `project.html?id=...` — masalah, solusi, fitur, hasil, galeri, project terkait, navigasi prev/next |
| **Dark / Light mode** | Mengikuti pengaturan sistem, bisa diganti manual, tersimpan di browser |
| **Animasi scroll** | Reveal fade/slide/zoom (otomatis nonaktif jika pengguna memilih *reduce motion*) |
| **Responsif** | Desktop, tablet, dan HP (menu hamburger) |
| **Download CV** | Tombol di navbar, Home, About, dan halaman detail |

## Struktur Folder

```
├── index.html              # Halaman utama (semua section)
├── project.html            # Halaman detail project
└── assets/
    ├── css/style.css       # Semua styling + tema dark/light
    ├── js/data.js          # ⭐ ISI KONTEN ANDA DI SINI
    ├── js/common.js        # Tema, navbar, animasi, lightbox, viewer dashboard
    ├── js/main.js          # Render section halaman utama
    ├── js/project.js       # Render halaman detail project
    ├── img/                # Foto profil, favicon, screenshot project
    └── cv/CV-Marthin.pdf   # File CV (ganti dengan milik Anda)
```

## Cara Mengubah Konten

Semua konten ada di **`assets/js/data.js`**. Isi saat ini masih **contoh/dummy**; ganti dengan data Anda.

1. **Profil**: ubah `profile.name`, `role`, `headline`, `typedRoles`, `stats`, `email`, `location`.
2. **Foto**: simpan foto Anda di `assets/img/` (mis. `profile.jpg`, rasio 4:5 disarankan) lalu ubah `profile.photo`.
3. **CV**: ganti `assets/cv/CV-Marthin.pdf` dengan CV Anda (atau ubah `profile.cv`).
4. **GitHub & LinkedIn**: isi `social.github` (username saja) dan `social.linkedin` (URL lengkap).
5. **Project**: tambah/edit objek di `projects`. Setiap project otomatis punya halaman detail di `project.html?id=<id>`.
   - `demo`: link live demo (kosongkan `""` untuk menyembunyikan tombol).
   - `repo`: link repository.
   - `gallery`: daftar screenshot (`src` + `caption`). Simpan gambar di `assets/img/projects/`.
6. **Experience, Certifications, Skills**: edit array yang sesuai.

### Menyematkan Dashboard Power BI

1. Buka laporan di Power BI Service → **File → Embed report → Publish to web (public)**.
2. Salin URL yang berbentuk `https://app.powerbi.com/view?r=...`.
3. Tempel ke field `powerbi` pada project di `data.js`.

Dashboard akan tampil interaktif (bisa diklik & difilter). Di halaman detail juga muncul tab untuk beralih antara *Live Power BI* dan *Screenshot*.

> ⚠️ *Publish to web* membuat laporan bisa diakses publik. Jangan gunakan untuk data rahasia/perusahaan — pakai data sampel atau screenshot saja.

## Menjalankan Secara Lokal

Cukup buka `index.html` di browser, atau jalankan server kecil:

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Deploy Gratis ke GitHub Pages

1. Push repository ini ke GitHub.
2. Buka **Settings → Pages**.
3. Pada *Source* pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Website aktif di `https://<username>.github.io/<nama-repo>/` dalam 1–2 menit.

Alternatif lain: Netlify atau Vercel (drag & drop folder, tanpa konfigurasi).

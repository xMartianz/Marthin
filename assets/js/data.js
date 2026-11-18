/* =========================================================================
   DATA PORTOFOLIO
   -------------------------------------------------------------------------
   Ini satu-satunya file yang perlu Anda edit untuk mengganti isi website.
   Semua teks, link, skill, project, pengalaman, dan sertifikasi diambil
   dari objek PORTFOLIO di bawah ini.
   ========================================================================= */

const PORTFOLIO = {
  /* ---------- Profil & Home ---------- */
  profile: {
    name: "Marthin",
    fullName: "Marthin",
    role: "Data Analyst & Business Intelligence Developer",
    headline:
      "Mengubah data mentah menjadi insight yang bisa ditindaklanjuti — lewat dashboard yang jelas, analisis yang tajam, dan cerita data yang mudah dipahami.",
    typedRoles: ["Data Analyst", "Power BI Developer", "SQL Enthusiast", "Data Storyteller"],
    photo: "assets/img/profile.svg", // ganti dengan foto Anda, mis. assets/img/profile.jpg
    location: "Jakarta, Indonesia",
    email: "email.anda@example.com",
    cv: "assets/cv/CV-Marthin.pdf", // ganti dengan file CV Anda
    available: true, // tampilkan badge "Open to work"
    stats: [
      { value: 3, suffix: "+", label: "Tahun Pengalaman" },
      { value: 25, suffix: "+", label: "Dashboard Dibuat" },
      { value: 15, suffix: "+", label: "Project Selesai" },
    ],
  },

  /* ---------- Sosial & Integrasi ---------- */
  social: {
    github: "xmartianz", // username GitHub — dipakai untuk menampilkan repo terbaru otomatis
    linkedin: "https://www.linkedin.com/in/username-anda/",
    email: "mailto:email.anda@example.com",
    whatsapp: "", // contoh: "https://wa.me/6281234567890" (kosongkan jika tidak dipakai)
  },

  /* ---------- About Me ---------- */
  about: {
    paragraphs: [
      "Saya adalah seorang Data Analyst dengan latar belakang pendidikan di bidang Sistem Informasi. Ketertarikan saya pada data dimulai saat mengerjakan tugas akhir tentang analisis perilaku pelanggan, dan sejak itu saya jatuh cinta pada proses menemukan pola tersembunyi di balik angka.",
      "Perjalanan karier saya dimulai sebagai staf administrasi data, lalu berkembang menjadi analis yang membangun dashboard Power BI untuk tim manajemen, merancang pipeline ETL, dan membantu bisnis mengambil keputusan berbasis data.",
      "Saat ini saya fokus pada Business Intelligence, data modeling, dan otomasi pelaporan. Saya senang berkolaborasi lintas tim dan selalu belajar hal baru — dari teknik statistik hingga cloud data platform.",
    ],
    highlights: [
      { icon: "🎓", title: "Pendidikan", text: "S1 Sistem Informasi" },
      { icon: "📍", title: "Lokasi", text: "Jakarta, Indonesia" },
      { icon: "💼", title: "Fokus", text: "BI, Analytics, Data Modeling" },
      { icon: "🌐", title: "Bahasa", text: "Indonesia, Inggris" },
    ],
  },

  /* ---------- Technical Skills ----------
     level: 0–100 (dipakai untuk progress bar) */
  skills: [
    {
      category: "Data Visualization & BI",
      icon: "📊",
      items: [
        { name: "Power BI (DAX, Power Query)", level: 90 },
        { name: "Tableau", level: 75 },
        { name: "Excel (Pivot, Power Pivot)", level: 90 },
        { name: "Looker Studio", level: 70 },
      ],
    },
    {
      category: "Data & Programming",
      icon: "🧮",
      items: [
        { name: "SQL (PostgreSQL, MySQL, SQL Server)", level: 88 },
        { name: "Python (Pandas, NumPy, Matplotlib)", level: 80 },
        { name: "R", level: 55 },
        { name: "Statistik Deskriptif & Inferensial", level: 75 },
      ],
    },
    {
      category: "Data Engineering & Tools",
      icon: "🛠️",
      items: [
        { name: "ETL / Data Pipeline", level: 72 },
        { name: "Git & GitHub", level: 75 },
        { name: "Google BigQuery", level: 65 },
        { name: "Azure / Microsoft Fabric", level: 60 },
      ],
    },
  ],
  tools: ["Power BI", "SQL", "Python", "Excel", "Tableau", "BigQuery", "Git", "Jupyter", "Azure", "Figma"],

  /* ---------- Projects ----------
     Setiap project otomatis punya halaman detail: project.html?id=<id>
     - demo:     link live demo (kosongkan "" untuk menyembunyikan tombol)
     - repo:     link repository GitHub (kosongkan "" untuk menyembunyikan)
     - powerbi:  URL "Publish to web" Power BI (iframe). Kosongkan jika tidak ada,
                 maka galeri screenshot interaktif yang akan ditampilkan. */
  projects: [
    {
      id: "sales-performance-dashboard",
      title: "Sales Performance Dashboard",
      category: "Power BI",
      featured: true,
      year: 2025,
      summary:
        "Dashboard interaktif untuk memantau penjualan nasional, target vs realisasi, dan performa cabang secara real-time.",
      cover: "assets/img/projects/sales-1.svg",
      tags: ["Power BI", "DAX", "SQL Server", "Data Modeling"],
      demo: "https://app.powerbi.com/",
      repo: "https://github.com/xmartianz",
      powerbi: "", // contoh: "https://app.powerbi.com/view?r=XXXX"
      role: "Data Analyst (solo project)",
      duration: "6 minggu",
      problem:
        "Tim sales membutuhkan waktu 2–3 hari setiap bulan untuk menyusun laporan penjualan manual di Excel, dan data sering tidak konsisten antar cabang.",
      solution:
        "Membangun star schema di SQL Server, mengotomasi refresh data, lalu merancang dashboard Power BI dengan drill-down dari level nasional hingga sales individu.",
      features: [
        "KPI utama: revenue, margin, growth YoY, achievement vs target",
        "Drill-down wilayah → cabang → sales representative",
        "Row-Level Security agar setiap manajer hanya melihat datanya sendiri",
        "Refresh terjadwal harian via Power BI Service",
      ],
      results: [
        { value: "90%", label: "waktu pelaporan berkurang" },
        { value: "40+", label: "pengguna aktif" },
        { value: "12", label: "cabang terintegrasi" },
      ],
      gallery: [
        { src: "assets/img/projects/sales-1.svg", caption: "Halaman overview — KPI & tren revenue" },
        { src: "assets/img/projects/sales-2.svg", caption: "Analisis per wilayah dan cabang" },
        { src: "assets/img/projects/sales-3.svg", caption: "Detail performa sales representative" },
      ],
    },
    {
      id: "customer-churn-analysis",
      title: "Customer Churn Analysis",
      category: "Python",
      featured: true,
      year: 2025,
      summary:
        "Analisis faktor penyebab churn pelanggan telekomunikasi dan model prediksi sederhana untuk mengidentifikasi pelanggan berisiko.",
      cover: "assets/img/projects/churn-1.svg",
      tags: ["Python", "Pandas", "Scikit-learn", "Visualisasi"],
      demo: "",
      repo: "https://github.com/xmartianz",
      powerbi: "",
      role: "Data Analyst",
      duration: "4 minggu",
      problem:
        "Tingkat churn meningkat 8% dalam dua kuartal, namun perusahaan belum mengetahui segmen pelanggan mana yang paling berisiko.",
      solution:
        "Melakukan EDA, feature engineering, dan membangun model klasifikasi (Logistic Regression & Random Forest) untuk memberi skor risiko churn.",
      features: [
        "Exploratory Data Analysis lengkap dengan visualisasi",
        "Segmentasi pelanggan berdasarkan tenure dan tipe kontrak",
        "Model prediksi dengan akurasi ~85%",
        "Rekomendasi aksi retensi untuk tim marketing",
      ],
      results: [
        { value: "85%", label: "akurasi model" },
        { value: "3", label: "faktor churn utama" },
        { value: "15%", label: "target penurunan churn" },
      ],
      gallery: [
        { src: "assets/img/projects/churn-1.svg", caption: "Distribusi churn per segmen" },
        { src: "assets/img/projects/churn-2.svg", caption: "Feature importance model" },
      ],
    },
    {
      id: "hr-analytics-dashboard",
      title: "HR Analytics Dashboard",
      category: "Power BI",
      featured: true,
      year: 2024,
      summary:
        "Dashboard SDM untuk memantau headcount, turnover, dan demografi karyawan guna mendukung perencanaan tenaga kerja.",
      cover: "assets/img/projects/hr-1.svg",
      tags: ["Power BI", "Power Query", "Excel"],
      demo: "https://app.powerbi.com/",
      repo: "",
      powerbi: "",
      role: "BI Developer",
      duration: "3 minggu",
      problem:
        "Divisi HR tidak memiliki gambaran menyeluruh tentang tren turnover dan komposisi karyawan.",
      solution:
        "Menggabungkan data dari beberapa file Excel HRIS dengan Power Query lalu membuat dashboard dengan analisis turnover dan demografi.",
      features: [
        "Tren headcount dan turnover bulanan",
        "Analisis demografi: usia, gender, masa kerja",
        "Filter per departemen dan lokasi",
      ],
      results: [
        { value: "1.200+", label: "karyawan dianalisis" },
        { value: "8", label: "departemen" },
        { value: "1 klik", label: "laporan bulanan" },
      ],
      gallery: [
        { src: "assets/img/projects/hr-1.svg", caption: "Overview headcount & turnover" },
        { src: "assets/img/projects/hr-2.svg", caption: "Demografi karyawan" },
      ],
    },
    {
      id: "ecommerce-sql-analysis",
      title: "E-Commerce SQL Analysis",
      category: "SQL",
      featured: false,
      year: 2024,
      summary:
        "Analisis cohort, retensi, dan RFM pada dataset e-commerce menggunakan SQL tingkat lanjut (CTE & window function).",
      cover: "assets/img/projects/ecom-1.svg",
      tags: ["SQL", "PostgreSQL", "Cohort Analysis", "RFM"],
      demo: "",
      repo: "https://github.com/xmartianz",
      powerbi: "",
      role: "Data Analyst (personal project)",
      duration: "2 minggu",
      problem: "Ingin memahami pola pembelian ulang dan nilai pelanggan dari data transaksi e-commerce publik.",
      solution: "Menulis query SQL modular untuk cohort retention, segmentasi RFM, dan analisis basket.",
      features: [
        "Cohort retention bulanan",
        "Segmentasi RFM (Champions, Loyal, At Risk, dll.)",
        "Query terdokumentasi rapi di GitHub",
      ],
      results: [
        { value: "100K+", label: "baris transaksi" },
        { value: "6", label: "segmen RFM" },
        { value: "20+", label: "query SQL" },
      ],
      gallery: [{ src: "assets/img/projects/ecom-1.svg", caption: "Heatmap cohort retention" }],
    },
  ],

  /* ---------- Experience (Timeline) ---------- */
  experience: [
    {
      role: "Data Analyst",
      company: "PT Contoh Teknologi Indonesia",
      location: "Jakarta",
      period: "Jan 2024 — Sekarang",
      current: true,
      points: [
        "Membangun 15+ dashboard Power BI untuk divisi Sales, Finance, dan HR.",
        "Merancang data model star schema dan mengotomasi refresh harian.",
        "Mengurangi waktu pelaporan bulanan dari 3 hari menjadi 2 jam.",
      ],
      tags: ["Power BI", "SQL Server", "DAX"],
    },
    {
      role: "Junior Data Analyst",
      company: "PT Retail Nusantara",
      location: "Jakarta",
      period: "Mar 2022 — Des 2023",
      points: [
        "Membuat laporan penjualan mingguan dan analisis performa toko.",
        "Membersihkan dan menggabungkan data dari berbagai sumber dengan Python.",
        "Berkolaborasi dengan tim marketing untuk analisis kampanye promo.",
      ],
      tags: ["Excel", "Python", "MySQL"],
    },
    {
      role: "Data Entry & Reporting Intern",
      company: "PT Logistik Maju",
      location: "Bandung",
      period: "Jul 2021 — Des 2021",
      points: [
        "Mengelola database pengiriman dan membuat laporan harian.",
        "Membuat template Excel otomatis yang menghemat 5 jam kerja per minggu.",
      ],
      tags: ["Excel", "VBA"],
    },
    {
      role: "S1 Sistem Informasi",
      company: "Universitas Contoh",
      location: "Bandung",
      period: "2018 — 2022",
      education: true,
      points: ["Tugas akhir: Analisis Perilaku Pelanggan Menggunakan Clustering K-Means.", "IPK 3.65 / 4.00"],
      tags: [],
    },
  ],

  /* ---------- Certifications ---------- */
  certifications: [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      date: "2024",
      icon: "🏅",
      url: "https://learn.microsoft.com/credentials/",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "2023",
      icon: "🎖️",
      url: "https://www.coursera.org/",
    },
    {
      title: "SQL for Data Science",
      issuer: "DQLab",
      date: "2023",
      icon: "📜",
      url: "",
    },
    {
      title: "Python for Data Analysis",
      issuer: "Dicoding",
      date: "2022",
      icon: "🐍",
      url: "",
    },
  ],
};

/* =========================================================================
   DATA PORTOFOLIO
   -------------------------------------------------------------------------
   Ini satu-satunya file yang perlu diedit untuk mengganti isi website.
   Semua teks, link, skill, project, pengalaman, dan sertifikasi diambil
   dari objek PORTFOLIO di bawah ini.
   ========================================================================= */

const PORTFOLIO = {
  /* ---------- Profil & Home ---------- */
  profile: {
    name: "Marthin",
    fullName: "Marthin Daniel Theo Gratia",
    role: "Data Analyst",
    headline:
      "Menerjemahkan kebutuhan stakeholder menjadi dashboard dan insight berbasis data — dengan Excel, Power BI, SQL, dan Python untuk mendukung pengambilan keputusan.",
    typedRoles: ["Data Analyst", "Dashboard Developer", "Business Analyst", "Python & SQL Enthusiast"],
    photo: "assets/img/profile.jpg",
    location: "Bogor, Jawa Barat",
    email: "marthindaniel31@gmail.com",
    cv: "assets/cv/CV_Marthin_Daniel_Theo_Gratia.pdf",
    available: true, // tampilkan badge "Open to work"
    stats: [
      { value: 3, suffix: "", label: "Pengalaman Profesional" },
      { value: 7, suffix: "", label: "Sertifikasi" },
      { value: 2, suffix: "", label: "Project Selesai" },
    ],
  },

  /* ---------- Sosial & Integrasi ---------- */
  social: {
    github: "xMartianz", // dipakai untuk menampilkan repo terbaru otomatis
    linkedin: "https://www.linkedin.com/in/marthin-daniel-theo-gratia-siahaan/",
    email: "mailto:marthindaniel31@gmail.com",
    whatsapp: "", // contoh: "https://wa.me/6281234567890" (kosongkan jika tidak dipakai)
  },

  /* ---------- About Me ---------- */
  about: {
    paragraphs: [
      "Saya Marthin Daniel Theo Gratia, lulusan Sarjana Perikanan (S.Pi) Universitas Brawijaya yang menemukan passion di dunia data. Latar belakang riset membuat saya terbiasa bekerja teliti dengan data — mulai dari analisis data molekuler di laboratorium hingga validasi data ESG sebagai asisten riset doktoral di Sekolah Vokasi Universitas Indonesia.",
      "Pengalaman tersebut membawa saya ke Direktorat Pengendalian Operasi Armada, Kementerian Kelautan dan Perikanan, sebagai Data Processing and Information Staff. Di sana saya mengumpulkan kebutuhan dari stakeholder, membersihkan dan memvalidasi data Vessel Monitoring System (VMS), serta membangun dashboard monitoring interaktif dengan Excel, Google Sheets, dan Power BI untuk mendukung keputusan manajemen.",
      "Saat ini saya fokus mengembangkan diri sebagai Data Analyst / Business Analyst — memperdalam SQL, Python, dan machine learning lewat project pribadi — dengan sertifikasi Data Analyst dari BNSP. Saya senang menjembatani kebutuhan bisnis dan solusi data yang mudah dipahami.",
    ],
    highlights: [
      { icon: "🎓", title: "Pendidikan", text: "S.Pi — Universitas Brawijaya" },
      { icon: "📍", title: "Lokasi", text: "Bogor, Jawa Barat" },
      { icon: "💼", title: "Fokus", text: "Data Analysis, Dashboard, Business Analysis" },
      { icon: "🌐", title: "Bahasa", text: "Indonesia, Inggris (TOEFL 517), Jepang (dasar)" },
    ],
  },

  /* ---------- Technical Skills ----------
     Item bisa berupa teks biasa ("SQL") atau { name: "SQL", level: 80 }
     jika ingin menampilkan progress bar. */
  skills: [
    {
      category: "Data Analysis & Programming",
      icon: "🧮",
      items: ["SQL (Querying & Manipulation)", "Python (Pandas, Scikit-learn)", "Data Cleaning & Validation", "Machine Learning (Regresi & Klasifikasi)"],
    },
    {
      category: "Visualization & Reporting",
      icon: "📊",
      items: ["Power BI", "Microsoft Excel", "Google Sheets", "Dashboard Development", "Business Reporting & KPI Monitoring"],
    },
    {
      category: "Business & Soft Skills",
      icon: "🤝",
      items: [
        "Business Requirements Gathering",
        "Stakeholder Communication",
        "Cross-functional Collaboration",
        "Analytical Thinking & Problem Solving",
        "Attention to Detail",
      ],
    },
  ],
  tools: ["Power BI", "Excel", "Google Sheets", "SQL", "Python", "Pandas", "Scikit-learn", "LightGBM", "Streamlit", "Git & GitHub"],

  /* ---------- Projects ----------
     Setiap project otomatis punya halaman detail: project.html?id=<id>
     - demo:     link live demo (kosongkan "" untuk menyembunyikan tombol)
     - repo:     link repository GitHub (kosongkan "" untuk menyembunyikan)
     - powerbi:  URL "Publish to web" Power BI (iframe). Kosongkan jika tidak ada.
     - status:   "in-progress" untuk menandai project yang sedang dikerjakan
     - gallery:  daftar screenshot { src, caption }. Project Power BI yang punya
                 gallery/powerbi akan tampil di "Dashboard Showcase" beranda. */
  projects: [
    {
      id: "vms-monitoring-dashboard",
      title: "Monitoring Dashboard Kapal Perikanan (VMS)",
      category: "Power BI",
      featured: true,
      year: 2026,
      summary:
        "Dashboard monitoring interaktif untuk aktivitas kapal perikanan, kinerja UPT, dan Wilayah Pengelolaan Perikanan (WPP) berbasis data Vessel Monitoring System.",
      cover: "assets/img/projects/vms-dashboard.svg",
      tags: ["Power BI", "Excel", "Google Sheets", "Data Validation"],
      demo: "",
      repo: "",
      powerbi: "",
      role: "Data Processing and Information Staff — Direktorat Pengendalian Operasi Armada, KKP",
      duration: "Des 2025 — Jun 2026",
      problem:
        "Manajemen membutuhkan gambaran yang akurat dan cepat tentang aktivitas kapal perikanan, kinerja Unit Pelaksana Teknis (UPT), dan kondisi tiap WPP untuk evaluasi operasional.",
      solution:
        "Mengumpulkan kebutuhan dari supervisor dan stakeholder lintas fungsi, membersihkan serta memvalidasi data VMS, lalu menerjemahkannya menjadi fitur dashboard dan laporan di Excel, Google Sheets, dan Power BI yang terus disempurnakan berdasarkan masukan pengguna.",
      features: [
        "Monitoring aktivitas kapal perikanan berbasis data VMS",
        "Analisis kinerja UPT dan Wilayah Pengelolaan Perikanan (WPP)",
        "Pembersihan & validasi data untuk menjaga akurasi dan konsistensi",
        "Laporan dan visualisasi untuk evaluasi kinerja operasional",
      ],
      results: [],
      gallery: [],
    },
    {
      id: "medical-cost-explorer",
      title: "Medical Cost Explorer",
      category: "Python",
      featured: true,
      year: 2026,
      summary:
        "Aplikasi Streamlit untuk mensimulasikan rentang biaya medis menggunakan tiga model regresi kuantil — menampilkan estimasi median beserta rentang ketidakpastiannya.",
      cover: "assets/img/projects/medical-cost.svg",
      tags: ["Python", "Scikit-learn", "Quantile Regression", "Streamlit"],
      demo: "https://medical-cost-estimator-group-5.streamlit.app/",
      repo: "https://github.com/xMartianz/medical-cost-estimator",
      powerbi: "",
      role: "",
      duration: "",
      problem:
        "Estimasi biaya medis berupa satu angka sering menyesatkan karena biaya sangat bervariasi. Pengguna perlu melihat rentang kemungkinan biaya, bukan hanya satu prediksi.",
      solution:
        "Melatih tiga model kuantil (batas bawah, median, batas atas) dengan pipeline preprocessing scikit-learn, lalu membungkusnya dalam aplikasi Streamlit berbahasa Indonesia yang tidak memerlukan training ulang maupun data mentah.",
      features: [
        "Simulasi biaya berdasarkan profil dan riwayat layanan kesehatan",
        "Prediksi median dengan rentang interval dari tiga model kuantil",
        "Halaman evaluasi model pada data test, dibandingkan dengan baseline median",
        "Privasi: input pengguna tidak disimpan ke file atau database",
        "Dokumentasi keterbatasan model secara transparan",
      ],
      results: [
        { value: "~97K", label: "baris data (train / val / test)" },
        { value: "89,3%", label: "coverage interval pada data test" },
        { value: "−9,4%", label: "MAE vs baseline median" },
      ],
      gallery: [],
    },
    {
      id: "customer-churn-prediction",
      title: "Customer Churn Prediction",
      category: "Python",
      featured: false,
      status: "in-progress",
      year: 2025,
      summary:
        "Workflow machine learning untuk menganalisis dan memprediksi churn pelanggan — dari preprocessing, eksplorasi data, hingga training dan evaluasi model.",
      cover: "assets/img/projects/churn.svg",
      tags: ["Python", "Pandas", "Scikit-learn", "Classification"],
      demo: "",
      repo: "",
      powerbi: "",
      role: "Personal project",
      duration: "",
      problem:
        "Perusahaan perlu mengetahui pelanggan mana yang berisiko berhenti berlangganan agar dapat melakukan upaya retensi lebih awal.",
      solution:
        "Membangun workflow machine learning end-to-end: data preprocessing, exploratory data analysis, training model klasifikasi, dan evaluasi performa model.",
      features: [
        "Data preprocessing dan feature engineering",
        "Exploratory Data Analysis untuk menemukan pola churn",
        "Training dan perbandingan model klasifikasi",
        "Evaluasi model dengan metrik klasifikasi",
      ],
      results: [],
      gallery: [],
    },
    {
      id: "house-price-prediction",
      title: "House Price Prediction",
      category: "Python",
      featured: false,
      status: "in-progress",
      year: 2025,
      summary:
        "Membangun dan membandingkan model regresi — Lasso, Random Forest, dan LightGBM — untuk memprediksi harga rumah.",
      cover: "assets/img/projects/house-price.svg",
      tags: ["Python", "Scikit-learn", "LightGBM", "Regression"],
      demo: "",
      repo: "",
      powerbi: "",
      role: "Personal project",
      duration: "",
      problem: "Menentukan harga rumah yang wajar berdasarkan karakteristik properti.",
      solution:
        "Membangun beberapa model regresi (Lasso Regression, Random Forest, LightGBM) dan membandingkan performa prediksinya menggunakan R² dan RMSE.",
      features: [
        "Perbandingan 3 algoritma regresi",
        "Evaluasi performa dengan R² dan RMSE",
        "Analisis faktor yang memengaruhi harga rumah",
      ],
      results: [],
      gallery: [],
    },
  ],

  /* ---------- Experience (Timeline) ---------- */
  experience: [
    {
      role: "Data Processing and Information Staff",
      company: "Direktorat Pengendalian Operasi Armada, Kementerian Kelautan dan Perikanan",
      location: "Jakarta",
      period: "Des 2025 — Jun 2026",
      points: [
        "Mengumpulkan dan menganalisis kebutuhan bisnis bersama supervisor dan stakeholder lintas fungsi, lalu menerjemahkannya menjadi fitur dashboard dan laporan.",
        "Membangun dan menyempurnakan dashboard monitoring interaktif dengan Excel, Google Sheets, dan Power BI berdasarkan masukan stakeholder.",
        "Mengelola, membersihkan, dan memvalidasi data Vessel Monitoring System (VMS) untuk menjaga akurasi dan konsistensi data.",
        "Menganalisis aktivitas kapal perikanan, kinerja UPT, dan WPP untuk menemukan tren operasional dan memberi insight bagi manajemen.",
      ],
      tags: ["Power BI", "Excel", "Google Sheets", "Data Validation"],
    },
    {
      role: "Doctoral Research Assistant",
      company: "Sekolah Vokasi Universitas Indonesia",
      location: "Depok (Remote)",
      period: "Okt 2024 — Feb 2025",
      points: [
        "Mengumpulkan, mengorganisasi, dan memvalidasi data ESG kualitatif & kuantitatif dari berbagai sumber.",
        "Melakukan verifikasi dan pengecekan konsistensi untuk memastikan akurasi dan kelengkapan dataset riset.",
        "Menganalisis kinerja keberlanjutan dan benchmark industri berdasarkan kerangka GRI, SASB, CDP, dan TCFD.",
      ],
      tags: ["ESG Data", "Data Validation", "Research"],
    },
    {
      role: "Quality Control & Laboratory Research Assistant",
      company: "Laboratorium Biologi Molekuler Brainy Bee",
      location: "Malang",
      period: "Agu 2024 — Sep 2025",
      points: [
        "Melaksanakan quality control laboratorium sesuai SOP dan pedoman biosafety.",
        "Memproses 500 sampel biologis melalui isolasi DNA, PCR, dan elektroforesis.",
        "Menganalisis data riset molekuler (jarak genetik, filogenetik, haplotype network) untuk interpretasi dan pelaporan ilmiah.",
      ],
      tags: ["Quality Control", "Data Analysis", "Research"],
    },
    {
      role: "Sarjana Perikanan (S.Pi) — IPK 3,38 / 4,00",
      company: "Universitas Brawijaya",
      location: "Malang",
      period: "Agu 2021 — Agu 2025",
      education: true,
      points: [
        "Teaching Assistant Praktikum Dasar Mikrobiologi Akuatik (2022–2023).",
        "Mentor kompetisi PKM-KC tingkat fakultas & Wakil Koordinator KKN MMD UB.",
      ],
      tags: [],
    },
    {
      role: "Student Exchange Program (MBKM) — IPK 3,2 / 4,00",
      company: "Universitas Airlangga",
      location: "Surabaya",
      period: "Agu — Des 2023",
      education: true,
      points: [],
      tags: [],
    },
  ],

  /* ---------- Certifications ---------- */
  certifications: [
    {
      title: "Certified Data Analyst",
      issuer: "BNSP",
      date: "2026",
      icon: "🏅",
      url: "https://drive.google.com/file/d/10FKI30xLeix7gbNZd15hlaeUITB2DIsy/view?usp=sharing",
    },
    {
      title: "Certified Office Administration Management",
      issuer: "BNSP",
      date: "2026",
      icon: "🏅",
      url: "https://drive.google.com/file/d/1ADdDezyD8r2EUeJ9_WmSZwH8yzK-S68m/view?usp=sharing",
    },
    {
      title: "Data Analyst Bootcamp with Excel",
      issuer: "DQLab",
      date: "2025",
      icon: "📊",
      url: "https://drive.google.com/file/d/1afwUcRT6nzMgeln_5Yeg6mkwGjhon32P/view?usp=sharing",
    },
    {
      title: "Python Fundamental for Data Science",
      issuer: "DQLab",
      date: "2025",
      icon: "🐍",
      url: "https://drive.google.com/file/d/1xNtkFPustsNnMz-6hRW91rbnteMD6SG_/view?usp=sharing",
    },
    {
      title: "Microsoft Excel Basic to Advanced: Fullstack Intensive Bootcamp",
      issuer: "MySkill",
      date: "2025",
      icon: "📗",
      url: "https://drive.google.com/file/d/1JrKzzjW8ffPFptrxwlW2Gs6_I2BTnhBP/view?usp=sharing",
    },
    {
      title: "Certified Microsoft Office Desktop Application",
      issuer: "TRUST Training Partner",
      date: "2024",
      icon: "🖥️",
      url: "https://drive.google.com/file/d/1-1tP_0GEOYdF8hW_VVUSOPSIMXAFpeeD/view?usp=sharing",
    },
    {
      title: "TOEFL ITP (Skor 517)",
      issuer: "Universitas Brawijaya",
      date: "2024",
      icon: "🌐",
      url: "https://drive.google.com/file/d/1YejL9OKDea9lzFltzepLCLj0gweEpOZK/view?usp=sharing",
    },
  ],
};

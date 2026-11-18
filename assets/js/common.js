/* =========================================================================
   COMMON — dipakai oleh index.html dan project.html
   Tema (dark/light), navbar, reveal on scroll, lightbox, ikon SVG.
   ========================================================================= */

/* ---------- Ikon SVG (inline, tanpa library) ---------- */
const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.04 21.5a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36A9.43 9.43 0 1 1 12.04 21.5Zm8.02-17.45A11.27 11.27 0 0 0 1.8 17.65L.2 23.5l5.99-1.57a11.25 11.25 0 0 0 5.85 1.63c6.2 0 11.27-5.06 11.27-11.27 0-3.01-1.17-5.84-3.3-7.97Z"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowLeft:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
  chevronLeft:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  expand:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="14" height="14"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/></svg>',
  fork: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" width="14" height="14"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M6 7v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M12 12v5"/></svg>',
};

/* ---------- Util ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function socialLinks() {
  const s = PORTFOLIO.social;
  const links = [];
  if (s.github) links.push({ href: `https://github.com/${s.github}`, icon: "github", label: "GitHub" });
  if (s.linkedin) links.push({ href: s.linkedin, icon: "linkedin", label: "LinkedIn" });
  if (s.email) links.push({ href: s.email, icon: "mail", label: "Email" });
  if (s.whatsapp) links.push({ href: s.whatsapp, icon: "whatsapp", label: "WhatsApp" });
  return links;
}
function renderSocialButtons(container) {
  if (!container) return;
  container.innerHTML = socialLinks()
    .map(
      (l) =>
        `<a class="icon-btn" href="${esc(l.href)}" target="_blank" rel="noopener" aria-label="${l.label}" title="${l.label}">${ICONS[l.icon]}</a>`
    )
    .join("");
}

/* ---------- Tema: dark / light ---------- */
const Theme = {
  key: "portfolio-theme",
  get() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) return saved;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  },
  set(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(this.key, theme);
    } catch (e) {}
    const btn = $("#themeToggle");
    if (btn) btn.setAttribute("aria-label", theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap");
  },
  init() {
    this.set(this.get());
    $("#themeToggle")?.addEventListener("click", () => {
      this.set(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  },
};

/* ---------- Navbar ---------- */
function initNavbar() {
  const nav = $(".navbar");
  const menuBtn = $("#menuToggle");
  const links = $("#navLinks");
  const progress = $(".scroll-progress");
  const toTop = $(".back-to-top");

  const onScroll = () => {
    const y = window.scrollY;
    nav?.classList.toggle("scrolled", y > 20);
    toTop?.classList.toggle("show", y > 600);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  menuBtn?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  links?.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
  });
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0 }));
}

/* ---------- Animasi saat scroll (reveal) ---------- */
function initReveal(root = document) {
  const items = $$(".reveal:not(.visible)", root);
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.dispatchEvent(new CustomEvent("revealed"));
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Lightbox (zoom screenshot) ---------- */
const Lightbox = {
  items: [],
  index: 0,
  el: null,
  build() {
    if (this.el) return;
    const el = document.createElement("div");
    el.className = "lightbox";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Pratinjau gambar");
    el.innerHTML = `
      <button class="lb-btn lb-close" aria-label="Tutup">${ICONS.close}</button>
      <button class="lb-btn lb-prev" aria-label="Sebelumnya">${ICONS.chevronLeft}</button>
      <button class="lb-btn lb-next" aria-label="Berikutnya">${ICONS.chevronRight}</button>
      <figure>
        <div class="lightbox-img-wrap"><img alt=""></div>
        <figcaption></figcaption>
      </figure>`;
    document.body.appendChild(el);
    this.el = el;
    const wrap = $(".lightbox-img-wrap", el);
    const img = $("img", el);

    $(".lb-close", el).onclick = () => this.close();
    $(".lb-prev", el).onclick = () => this.go(-1);
    $(".lb-next", el).onclick = () => this.go(1);
    el.addEventListener("click", (e) => {
      if (e.target === el) this.close();
    });
    // Klik gambar untuk zoom 2x, gerakkan mouse untuk geser area zoom
    wrap.addEventListener("click", (e) => {
      const zoomed = wrap.classList.toggle("zoomed");
      if (zoomed) this.pan(e, wrap, img);
      else img.style.transform = "";
    });
    wrap.addEventListener("mousemove", (e) => {
      if (wrap.classList.contains("zoomed")) this.pan(e, wrap, img);
    });
    document.addEventListener("keydown", (e) => {
      if (!el.classList.contains("open")) return;
      if (e.key === "Escape") this.close();
      if (e.key === "ArrowLeft") this.go(-1);
      if (e.key === "ArrowRight") this.go(1);
    });
    // Swipe di HP
    let startX = null;
    el.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
    el.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) this.go(dx < 0 ? 1 : -1);
      startX = null;
    });
  },
  pan(e, wrap, img) {
    const r = wrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";
  },
  open(items, index = 0) {
    this.build();
    this.items = items;
    this.lastFocus = document.activeElement;
    this.el.classList.add("open");
    document.body.style.overflow = "hidden";
    const multi = items.length > 1;
    $(".lb-prev", this.el).style.display = multi ? "" : "none";
    $(".lb-next", this.el).style.display = multi ? "" : "none";
    this.show(index);
    $(".lb-close", this.el).focus();
  },
  show(i) {
    this.index = (i + this.items.length) % this.items.length;
    const item = this.items[this.index];
    const img = $("img", this.el);
    const wrap = $(".lightbox-img-wrap", this.el);
    wrap.classList.remove("zoomed");
    img.style.transform = "";
    img.src = item.src;
    img.alt = item.caption || "";
    $("figcaption", this.el).textContent = `${item.caption || ""}${
      this.items.length > 1 ? `  (${this.index + 1}/${this.items.length})` : ""
    } — klik gambar untuk zoom`;
  },
  go(d) {
    this.show(this.index + d);
  },
  close() {
    this.el.classList.remove("open");
    document.body.style.overflow = "";
    this.lastFocus?.focus?.();
  },
};

/* ---------- Dashboard Viewer (Power BI iframe / galeri screenshot) ----------
   Dipakai di beranda (showcase) dan halaman detail project. */
function createViewer(container, { gallery = [], powerbi = "", title = "" }) {
  let index = 0;
  let mode = powerbi ? "live" : "gallery";

  const render = () => {
    const showGallery = mode === "gallery" && gallery.length;
    container.innerHTML = `
      <div class="viewer">
        <div class="viewer-stage" ${showGallery ? 'role="button" tabindex="0" aria-label="Perbesar screenshot"' : ""}>
          ${
            mode === "live"
              ? `<iframe title="${esc(title)} — Power BI" src="${esc(powerbi)}" loading="lazy" allowfullscreen></iframe>`
              : gallery.length
              ? `<img src="${esc(gallery[index].src)}" alt="${esc(gallery[index].caption)}" loading="lazy">`
              : ""
          }
          ${
            showGallery && gallery.length > 1
              ? `<button class="viewer-nav prev" aria-label="Screenshot sebelumnya">${ICONS.chevronLeft}</button>
                 <button class="viewer-nav next" aria-label="Screenshot berikutnya">${ICONS.chevronRight}</button>`
              : ""
          }
        </div>
        <div class="viewer-bar">
          <span class="viewer-caption">${
            mode === "live"
              ? "Dashboard Power BI interaktif — klik & filter langsung"
              : gallery.length
              ? `${esc(gallery[index].caption)} <span style="opacity:.6">(${index + 1}/${gallery.length})</span>`
              : ""
          }</span>
          ${
            showGallery
              ? `<button class="btn btn-ghost btn-sm viewer-zoom">${ICONS.expand} Layar penuh</button>`
              : powerbi
              ? `<a class="btn btn-ghost btn-sm" href="${esc(powerbi)}" target="_blank" rel="noopener">${ICONS.external} Buka di tab baru</a>`
              : ""
          }
        </div>
        ${
          showGallery && gallery.length > 1
            ? `<div class="viewer-thumbs">${gallery
                .map(
                  (g, i) =>
                    `<button class="${i === index ? "active" : ""}" data-i="${i}" aria-label="Lihat: ${esc(
                      g.caption
                    )}"><img src="${esc(g.src)}" alt="" loading="lazy"></button>`
                )
                .join("")}</div>`
            : ""
        }
      </div>`;

    const stage = $(".viewer-stage", container);
    if (showGallery) {
      const openLb = () => Lightbox.open(gallery, index);
      stage.addEventListener("click", openLb);
      stage.addEventListener("keydown", (e) => e.target === stage && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), openLb()));
      $(".viewer-zoom", container)?.addEventListener("click", openLb);
    }
    $(".viewer-nav.prev", container)?.addEventListener("click", (e) => (e.stopPropagation(), go(-1)));
    $(".viewer-nav.next", container)?.addEventListener("click", (e) => (e.stopPropagation(), go(1)));
    $$(".viewer-thumbs button", container).forEach((b) =>
      b.addEventListener("click", () => {
        index = +b.dataset.i;
        render();
      })
    );
  };
  const go = (d) => {
    index = (index + d + gallery.length) % gallery.length;
    render();
  };

  render();
  return {
    setMode(m) {
      mode = m;
      render();
    },
    hasLive: !!powerbi,
  };
}

/* ---------- Footer ---------- */
function renderFooter() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  const name = $("#footerName");
  if (name) name.textContent = PORTFOLIO.profile.fullName;
  renderSocialButtons($("#footerSocial"));
}

/* ---------- Init umum ---------- */
document.documentElement.classList.remove("no-js");
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  initNavbar();
  renderFooter();
  $$(".btn-cv").forEach((a) => {
    a.href = PORTFOLIO.profile.cv;
    a.setAttribute("download", "");
  });
});

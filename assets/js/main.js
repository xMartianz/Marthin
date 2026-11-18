/* =========================================================================
   MAIN — render semua section di halaman beranda (index.html)
   ========================================================================= */

const P = PORTFOLIO;

/* ---------- Home ---------- */
function renderHero() {
  const p = P.profile;
  $("#heroName").textContent = p.name;
  $("#heroHeadline").textContent = p.headline;
  const photo = $("#heroPhoto");
  photo.src = p.photo;
  photo.alt = `Foto profesional ${p.fullName}`;
  if (!p.available) $(".badge-available")?.remove();

  $("#heroStats").innerHTML = p.stats
    .map(
      (s, i) => `
      <div class="reveal" style="--delay:${0.3 + i * 0.1}s">
        <div class="stat-value"><span class="gradient-text" data-count="${s.value}">0</span><span class="gradient-text">${esc(
        s.suffix
      )}</span></div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`
    )
    .join("");
  renderSocialButtons($("#heroSocial"));
  typeRoles($("#typed"), p.typedRoles?.length ? p.typedRoles : [p.role]);
}

/* Efek mengetik untuk peran / headline */
function typeRoles(el, words) {
  if (!el) return;
  if (prefersReducedMotion || words.length === 1) {
    el.textContent = words[0];
    return;
  }
  let w = 0,
    c = 0,
    deleting = false;
  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!deleting && c < word.length) c++;
    else if (deleting && c > 0) c--;
    else if (!deleting) {
      deleting = true;
      return setTimeout(tick, 1600);
    } else {
      deleting = false;
      w = (w + 1) % words.length;
    }
    setTimeout(tick, deleting ? 45 : 85);
  };
  tick();
}

/* Animasi angka statistik */
function countUp(el) {
  const target = +el.dataset.count;
  if (prefersReducedMotion) return (el.textContent = target);
  const start = performance.now();
  const dur = 1400;
  const step = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- About ---------- */
function renderAbout() {
  $("#aboutText").innerHTML = P.about.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("");
  $("#aboutHighlights").innerHTML = P.about.highlights
    .map(
      (h, i) => `
      <div class="card highlight reveal reveal-zoom" style="--delay:${i * 0.08}s">
        <div class="h-icon">${h.icon}</div>
        <h4>${esc(h.title)}</h4>
        <p>${esc(h.text)}</p>
      </div>`
    )
    .join("");
}

/* ---------- Skills ---------- */
function renderSkills() {
  $("#skillsGrid").innerHTML = P.skills
    .map(
      (cat, i) => `
      <div class="card skill-card reveal" style="--delay:${i * 0.1}s">
        <div class="skill-card-head">
          <div class="s-icon">${cat.icon}</div>
          <h3>${esc(cat.category)}</h3>
        </div>
        ${cat.items
          .map(
            (s) => `
          <div class="skill-item">
            <div class="skill-meta"><span>${esc(s.name)}</span><span>${s.level}%</span></div>
            <div class="skill-bar" role="progressbar" aria-label="${esc(s.name)}" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100"><span data-level="${s.level}"></span></div>
          </div>`
          )
          .join("")}
      </div>`
    )
    .join("");
  $("#toolsStrip").innerHTML = P.tools
    .map((t, i) => `<span class="tag reveal reveal-zoom" style="--delay:${i * 0.04}s">${esc(t)}</span>`)
    .join("");
}

/* ---------- Projects ---------- */
function projectCard(p, i) {
  return `
    <article class="card project-card reveal" style="--delay:${(i % 3) * 0.1}s" data-category="${esc(p.category)}">
      <a class="project-thumb" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="Detail ${esc(p.title)}">
        <img src="${esc(p.cover)}" alt="Screenshot ${esc(p.title)}" loading="lazy">
        <span class="project-badge">${esc(p.category)}</span>
        ${p.featured ? '<span class="project-badge featured">★ Featured</span>' : ""}
      </a>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="project-tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="project-actions">
          <a class="btn btn-primary btn-sm" href="project.html?id=${encodeURIComponent(p.id)}">Lihat Detail ${ICONS.arrowRight}</a>
          ${
            p.demo
              ? `<a class="btn btn-outline btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener">${ICONS.play} Live Demo</a>`
              : ""
          }
          ${
            p.repo
              ? `<a class="icon-btn" href="${esc(p.repo)}" target="_blank" rel="noopener" aria-label="Kode di GitHub" title="Kode di GitHub" style="width:36px;height:36px">${ICONS.github}</a>`
              : ""
          }
        </div>
      </div>
    </article>`;
}

function renderProjects() {
  const grid = $("#projectsGrid");
  // Featured ditampilkan lebih dulu
  const list = [...P.projects].sort((a, b) => (b.featured === true) - (a.featured === true));
  grid.innerHTML = list.map(projectCard).join("");

  const cats = ["Semua", "Featured", ...new Set(P.projects.map((p) => p.category))];
  const bar = $("#filterBar");
  bar.innerHTML = cats
    .map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${esc(c)}">${esc(c)}</button>`)
    .join("");
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", bar).forEach((b) => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".project-card", grid).forEach((card, i) => {
      const proj = list[i];
      const show = f === "Semua" || (f === "Featured" ? proj.featured : proj.category === f);
      card.classList.toggle("hide", !show);
    });
  });
}

/* ---------- Dashboard Showcase (Power BI / screenshot interaktif) ---------- */
function renderShowcase() {
  const dashboards = P.projects.filter((p) => p.gallery?.length && (p.category === "Power BI" || p.powerbi));
  if (!dashboards.length) return $("#showcase")?.remove();

  const tabs = $("#showcaseTabs");
  const stage = $("#showcaseViewer");
  const link = $("#showcaseLink");

  const select = (i) => {
    const d = dashboards[i];
    $$(".tab", tabs).forEach((t, j) => {
      t.classList.toggle("active", i === j);
      t.setAttribute("aria-selected", i === j);
    });
    createViewer(stage, d);
    link.href = `project.html?id=${encodeURIComponent(d.id)}`;
  };
  tabs.innerHTML = dashboards
    .map((d, i) => `<button class="tab" role="tab" data-i="${i}">${esc(d.title.replace(/ Dashboard$/, ""))}</button>`)
    .join("");
  tabs.addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (t) select(+t.dataset.i);
  });
  select(0);
}

/* ---------- Integrasi GitHub: repo publik terbaru ---------- */
async function renderGitHub() {
  const user = P.social.github;
  const grid = $("#ghGrid");
  if (!user) return $("#ghBlock")?.remove();
  $("#ghProfile").href = `https://github.com/${user}`;
  grid.innerHTML = '<div class="skeleton"></div>'.repeat(3);

  const cacheKey = `gh-repos-${user}`;
  let repos = null;
  try {
    const cached = JSON.parse(sessionStorage.getItem(cacheKey) || "null");
    if (cached && Date.now() - cached.t < 30 * 60 * 1000) repos = cached.data;
  } catch (e) {}

  try {
    if (!repos) {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=12`);
      if (!res.ok) throw new Error(res.status);
      repos = (await res.json())
        .filter((r) => !r.fork)
        .slice(0, 6)
        .map((r) => ({
          name: r.name,
          url: r.html_url,
          desc: r.description,
          lang: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
        }));
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), data: repos }));
      } catch (e) {}
    }
    if (!repos.length) throw new Error("empty");
    grid.innerHTML = repos
      .map(
        (r, i) => `
        <a class="card repo-card reveal" style="--delay:${i * 0.06}s" href="${esc(r.url)}" target="_blank" rel="noopener">
          <h4>${esc(r.name)}</h4>
          <p>${esc(r.desc || "Tidak ada deskripsi.")}</p>
          <div class="repo-meta">
            ${r.lang ? `<span>● ${esc(r.lang)}</span>` : ""}
            <span>${ICONS.star} ${r.stars}</span>
            <span>${ICONS.fork} ${r.forks}</span>
          </div>
        </a>`
      )
      .join("");
  } catch (err) {
    grid.innerHTML = `<div class="gh-empty" style="grid-column:1/-1">Repository belum bisa dimuat saat ini. Kunjungi langsung
      <a href="https://github.com/${esc(user)}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600">github.com/${esc(
      user
    )}</a>.</div>`;
  }
  initReveal(grid);
}

/* ---------- Experience timeline ---------- */
function renderExperience() {
  const tl = $("#timeline");
  tl.innerHTML =
    '<div class="timeline-progress"></div>' +
    P.experience
      .map(
        (e, i) => `
      <div class="tl-item ${e.current ? "current" : ""}">
        <span class="tl-dot"></span>
        <div class="card tl-card reveal ${i % 2 ? "reveal-left" : "reveal-right"}">
          <span class="tl-type ${e.current ? "now" : ""}">${e.education ? "Pendidikan" : e.current ? "Saat ini" : "Kerja"}</span>
          <span class="tl-period">${esc(e.period)}</span>
          <h3>${esc(e.role)}</h3>
          <div class="tl-company">${esc(e.company)}${e.location ? ` · ${esc(e.location)}` : ""}</div>
          ${e.points?.length ? `<ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
          ${e.tags?.length ? `<div class="tl-tags">${e.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
        </div>
      </div>`
      )
      .join("");

  // Garis timeline terisi mengikuti scroll
  const bar = $(".timeline-progress", tl);
  const update = () => {
    const r = tl.getBoundingClientRect();
    const pct = Math.min(Math.max((window.innerHeight * 0.6 - r.top) / r.height, 0), 1);
    bar.style.height = `${pct * 100}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- Certifications ---------- */
function renderCertifications() {
  $("#certGrid").innerHTML = P.certifications
    .map(
      (c, i) => `
      <div class="card cert-card reveal" style="--delay:${(i % 4) * 0.08}s">
        <div class="cert-icon">${c.icon || "🏅"}</div>
        <h3>${esc(c.title)}</h3>
        <div class="cert-meta">
          <span>${esc(c.issuer)} · ${esc(c.date)}</span>
          ${c.url ? `<a class="cert-link" href="${esc(c.url)}" target="_blank" rel="noopener">Verifikasi ↗</a>` : ""}
        </div>
      </div>`
    )
    .join("");
}

/* ---------- Contact ---------- */
function renderContact() {
  const p = P.profile;
  const s = P.social;
  const rows = [
    p.email && { href: `mailto:${p.email}`, icon: "mail", label: "Email", value: p.email },
    s.linkedin && { href: s.linkedin, icon: "linkedin", label: "LinkedIn", value: s.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") },
    s.github && { href: `https://github.com/${s.github}`, icon: "github", label: "GitHub", value: `github.com/${s.github}` },
    p.location && { icon: "pin", label: "Lokasi", value: p.location },
  ].filter(Boolean);
  $("#contactList").innerHTML = rows
    .map((r) => {
      const inner = `<span class="c-icon">${ICONS[r.icon]}</span><span><small>${r.label}</small>${esc(r.value)}</span>`;
      return `<li>${r.href ? `<a href="${esc(r.href)}" target="_blank" rel="noopener">${inner}</a>` : `<div>${inner}</div>`}</li>`;
    })
    .join("");
  renderSocialButtons($("#contactSocial"));

  // Form: membuka aplikasi email dengan isi pesan (tanpa backend).
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent(f.subject.value || `Pesan dari ${f.name.value}`);
    const body = encodeURIComponent(`Halo ${p.name},\n\n${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
    window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------- Active nav link saat scroll ---------- */
function initScrollSpy() {
  const links = $$("#navLinks a[href^='#']");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderShowcase();
  renderExperience();
  renderCertifications();
  renderContact();
  initReveal();
  initScrollSpy();
  renderGitHub();

  // Animasi yang dipicu saat elemen muncul
  $$("[data-count]").forEach((el) => {
    const host = el.closest(".reveal");
    host ? host.addEventListener("revealed", () => countUp(el), { once: true }) : countUp(el);
    if (host?.classList.contains("visible")) countUp(el);
  });
  $$(".skill-card").forEach((card) => {
    const fill = () => $$(".skill-bar span", card).forEach((b) => (b.style.width = `${b.dataset.level}%`));
    card.classList.contains("visible") ? fill() : card.addEventListener("revealed", fill, { once: true });
  });
});

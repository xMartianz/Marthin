/* =========================================================================
   PROJECT DETAIL — project.html?id=<id-project>
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const root = $("#projectRoot");
  const id = new URLSearchParams(location.search).get("id");
  const list = PORTFOLIO.projects;
  const idx = list.findIndex((p) => p.id === id);

  if (idx === -1) {
    document.title = `Project tidak ditemukan — ${PORTFOLIO.profile.name}`;
    root.innerHTML = `
      <div class="not-found container">
        <h1 class="section-title">Project tidak ditemukan</h1>
        <p class="section-sub">Mungkin link-nya salah atau project sudah dihapus.</p>
        <a class="btn btn-primary" href="index.html#projects">${ICONS.arrowLeft} Kembali ke Projects</a>
      </div>`;
    return;
  }

  const p = list[idx];
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];
  const related = list.filter((x) => x.id !== p.id).slice(0, 3);
  document.title = `${p.title} — ${PORTFOLIO.profile.name}`;
  $('meta[name="description"]')?.setAttribute("content", p.summary);

  const hasGallery = p.gallery?.length;

  root.innerHTML = `
    <section class="detail-hero">
      <div class="container">
        <nav class="breadcrumb reveal" aria-label="Breadcrumb">
          <a href="index.html">Home</a><span>/</span><a href="index.html#projects">Projects</a><span>/</span><span aria-current="page">${esc(p.title)}</span>
        </nav>
        <span class="eyebrow reveal">${esc(p.category)}${p.featured ? " · Featured" : ""}${p.status === "in-progress" ? " · Sedang Dikerjakan" : ""}</span>
        <h1 class="reveal" style="--delay:.05s">${esc(p.title)}</h1>
        <p class="lead reveal" style="--delay:.1s">${esc(p.summary)}</p>
        <div class="detail-meta reveal" style="--delay:.15s">
          ${p.role ? `<div><small>Peran</small><strong>${esc(p.role)}</strong></div>` : ""}
          ${p.duration ? `<div><small>Durasi</small><strong>${esc(p.duration)}</strong></div>` : ""}
          ${p.year ? `<div><small>Tahun</small><strong>${esc(p.year)}</strong></div>` : ""}
        </div>
        <div class="project-tags reveal" style="--delay:.2s">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="hero-cta reveal" style="--delay:.25s;margin:0">
          ${p.demo ? `<a class="btn btn-primary" href="${esc(p.demo)}" target="_blank" rel="noopener">${ICONS.play} Live Demo</a>` : ""}
          ${p.repo ? `<a class="btn btn-outline" href="${esc(p.repo)}" target="_blank" rel="noopener">${ICONS.github} Source Code</a>` : ""}
        </div>
      </div>
    </section>

    <div class="detail-body">
      <div class="container detail-grid">
        <article>
          ${
            hasGallery || p.powerbi
              ? `<div class="detail-section reveal">
                  <div class="showcase-head" style="margin-bottom:16px">
                    <h2 style="margin:0">${p.powerbi ? "Dashboard Interaktif" : p.category === "Power BI" ? "Galeri Dashboard" : "Galeri Project"}</h2>
                    ${
                      p.powerbi && hasGallery
                        ? `<div class="tabs" role="tablist" id="modeTabs">
                            <button class="tab active" data-mode="live" role="tab" aria-selected="true">Live Power BI</button>
                            <button class="tab" data-mode="gallery" role="tab" aria-selected="false">Screenshot</button>
                          </div>`
                        : ""
                    }
                  </div>
                  <div id="detailViewer"></div>
                </div>`
              : ""
          }
          ${
            p.status === "in-progress"
              ? `<div class="wip-note reveal">⏳ Project ini masih dalam pengerjaan. Detail, hasil, dan source code akan diperbarui setelah selesai.</div>`
              : ""
          }
          ${p.problem ? `<div class="detail-section reveal"><h2>Latar Belakang Masalah</h2><p>${esc(p.problem)}</p></div>` : ""}
          ${p.solution ? `<div class="detail-section reveal"><h2>Solusi & Pendekatan</h2><p>${esc(p.solution)}</p></div>` : ""}
          ${
            p.features?.length
              ? `<div class="detail-section reveal"><h2>Fitur Utama</h2><ul class="feature-list">${p.features
                  .map((f) => `<li>${esc(f)}</li>`)
                  .join("")}</ul></div>`
              : ""
          }
          ${
            p.results?.length
              ? `<div class="detail-section reveal"><h2>Hasil & Dampak</h2><div class="results-grid">${p.results
                  .map((r) => `<div class="card result"><strong class="gradient-text">${esc(r.value)}</strong><span>${esc(r.label)}</span></div>`)
                  .join("")}</div></div>`
              : ""
          }
          <div class="project-pager reveal">
            <a class="btn btn-outline" href="project.html?id=${encodeURIComponent(prev.id)}">${ICONS.arrowLeft} ${esc(prev.title)}</a>
            <a class="btn btn-outline" href="project.html?id=${encodeURIComponent(next.id)}">${esc(next.title)} ${ICONS.arrowRight}</a>
          </div>
        </article>

        <aside class="sidebar">
          <div class="card reveal reveal-right">
            <h3>Link Project</h3>
            ${p.demo ? `<a class="btn btn-primary" href="${esc(p.demo)}" target="_blank" rel="noopener">${ICONS.play} Live Demo</a>` : ""}
            ${p.repo ? `<a class="btn btn-outline" href="${esc(p.repo)}" target="_blank" rel="noopener">${ICONS.github} GitHub Repo</a>` : ""}
            ${p.powerbi ? `<a class="btn btn-outline" href="${esc(p.powerbi)}" target="_blank" rel="noopener">${ICONS.external} Power BI</a>` : ""}
            <a class="btn btn-outline btn-cv" href="${esc(PORTFOLIO.profile.cv)}" download>${ICONS.download} Download CV</a>
          </div>
          <div class="card reveal reveal-right" style="--delay:.1s">
            <h3>Project Lainnya</h3>
            <ul class="related-list">
              ${related
                .map(
                  (r) =>
                    `<li><a href="project.html?id=${encodeURIComponent(r.id)}"><img src="${esc(r.cover)}" alt="" loading="lazy">${esc(r.title)}</a></li>`
                )
                .join("")}
            </ul>
          </div>
          <div class="card reveal reveal-right" style="--delay:.2s">
            <h3>Tertarik bekerja sama?</h3>
            <p style="color:var(--text-muted);font-size:.92rem">Mari diskusikan bagaimana data bisa membantu bisnis Anda.</p>
            <a class="btn btn-primary" href="index.html#contact">Hubungi Saya</a>
          </div>
        </aside>
      </div>
    </div>`;

  const viewerEl = $("#detailViewer");
  if (viewerEl) {
    const viewer = createViewer(viewerEl, p);
    $("#modeTabs")?.addEventListener("click", (e) => {
      const t = e.target.closest(".tab");
      if (!t) return;
      $$("#modeTabs .tab").forEach((b) => {
        b.classList.toggle("active", b === t);
        b.setAttribute("aria-selected", b === t);
      });
      viewer.setMode(t.dataset.mode);
    });
  }

  initReveal(root);
});

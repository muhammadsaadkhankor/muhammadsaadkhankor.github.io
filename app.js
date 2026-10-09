const { useState, useEffect } = React;
const html = htm.bind(React.createElement);

// ─── Icons ───
const GithubIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.15c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>`;

const ScholarIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="currentColor">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-3.73v3.72z"/>
  </svg>`;

const LinkedinIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>`;

const MailIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
  </svg>`;

const PinIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>`;

const linkIcon = (icon) =>
  icon === 'github' ? html`<${GithubIcon} />` :
  icon === 'scholar' ? html`<${ScholarIcon} />` :
  icon === 'linkedin' ? html`<${LinkedinIcon} />` :
  html`<${MailIcon} />`;

// ─── Top navbar ───
const Navbar = ({ active }) => html`
  <header class="navbar">
    <div class="navbar-inner">
      ${NAV.map((n) => html`
        <a key=${n.id} href=${'#' + n.id}
           class=${active === n.id ? 'active' : ''}
           onClick=${(e) => { e.preventDefault(); document.getElementById(n.id).scrollIntoView({ behavior: 'smooth' }); }}>
          ${n.label}
        </a>`)}
    </div>
  </header>`;

// ─── Left profile column ───
const Profile = () => html`
  <aside class="profile">
    <img class="avatar" src=${PROFILE.avatar} alt=${PROFILE.name} />
    <div class="p-name">${PROFILE.name}</div>
    <div class="p-line">${PROFILE.affiliation}</div>
    <div class="p-line">${PROFILE.university}</div>
    <div class="p-bio">${PROFILE.bio}</div>
    <ul class="p-links">
      <li><${PinIcon} /> ${PROFILE.location}</li>
      ${PROFILE.links.map((l) => html`
        <li key=${l.label}><a href=${l.href} target="_blank" rel="noopener">${linkIcon(l.icon)} ${l.label}</a></li>`)}
    </ul>
  </aside>`;

// ─── Content sections (academic style) ───
const About = () => html`
  <section id="about">
    <h1>🧐 About Saad</h1>
    <p>${ABOUT.intro}</p>
    <p><b>Research Interests</b>: Saad's research focuses on developing intelligent AI systems that perceive, understand, reason about, and interact with the physical and digital worlds. His primary research interests include:</p>
    <ul>
      ${ABOUT.interests.map((i) => html`<li key=${i.title}><b>${i.title}:</b> ${i.desc}</li>`)}
    </ul>
    <p>🔬 ${ABOUT.extra} Please feel free to contact Saad at <a href="mailto:${PROFILE.email}">${PROFILE.email}</a> for collaboration.</p>
    <div class="work-logos">
      ${WORK_LOGOS.map((l) => html`<img key=${l.name} src=${l.src} alt=${l.name} title=${l.name} />`)}
    </div>
  </section>`;

const News = () => html`
  <section id="news">
    <h1>🔥 News</h1>
    <div class="scrollable">
      <ul>
        ${NEWS.map((n, i) => html`<li key=${i}><strong>${n.date}</strong>: ${n.text}</li>`)}
      </ul>
    </div>
  </section>`;

const Publications = () => html`
  <section id="publications">
    <h1>📝 Selected Publications</h1>
    ${PUBLICATIONS.map((p) => html`
      <div class="pub" key=${p.title}>
        <a class="pub-title" href=${p.links.paper} target="_blank" rel="noopener">${p.title}</a>
        <div class="pub-authors">
          ${p.authors.split(', ').map((a) =>
            a.includes('Muhammad Saad') ? html`<b>${a}</b>` : a
          ).reduce((acc, x, i) => i ? [...acc, ', ', x] : [x], [])}
        </div>
        <div class="pub-meta">
          <span class="pub-badge">${p.venue}</span>
          <span class="pub-venue">${p.venueLine}</span>
        </div>
        <div class="pub-tldr">${p.tldr}</div>
      </div>`)}
  </section>`;

const Honors = () => html`
  <section id="honors">
    <h1>🏆 Honors and Awards</h1>
    ${HONORS.map((h) => html`
      <div class="entry-row" key=${h.title}>
        <span class="entry-year">${h.year}</span>
        <div class="entry-body">
          <div class="entry-title">${h.title}</div>
          <div class="entry-sub">${h.org}</div>
        </div>
      </div>`)}
  </section>`;

const Education = () => html`
  <section id="education">
    <h1>📖 Education</h1>
    ${EDUCATION.map((e) => html`
      <div class="entry" key=${e.degree}>
        <div class="entry-head">
          <div>
            <span class="entry-title">${e.degree}</span>
            <span class="entry-sub"> · ${e.school}</span>
          </div>
          <span class="entry-period">${e.period}</span>
        </div>
        <div class="entry-sub">${e.place}</div>
      </div>`)}
  </section>`;

const Services = () => html`
  <section id="services">
    <h1>💬 Services</h1>
    ${SERVICES.map((s) => html`
      <div class="entry" key=${s.title}>
        <div class="entry-title">${s.title}</div>
        <ul class="entry-list">
          ${s.items.map((it, i) => html`<li key=${i}>${it}</li>`)}
        </ul>
      </div>`)}
  </section>`;

const Experience = () => html`
  <section id="experience">
    <h1>💻 Experience</h1>
    ${EXPERIENCE.map((e) => html`
      <div class="entry" key=${e.org}>
        <div class="entry-head">
          <div>
            <span class="entry-title">${e.role}</span>
            <span class="entry-sub"> · ${e.org}</span>
          </div>
          <span class="entry-period">${e.period}</span>
        </div>
        <div class="entry-sub">${e.place}</div>
        <ul class="entry-list">
          ${e.points.map((pt, i) => html`<li key=${i}>${pt}</li>`)}
        </ul>
        ${e.tags && html`<div class="chips">${e.tags.map((t) => html`<span class="chip" key=${t}>${t}</span>`)}</div>`}
      </div>`)}
  </section>`;

const Misc = () => html`
  <section id="misc">
    <h1>🎙 Miscellaneous</h1>
    <h3>Nature</h3>
    <p>Saad is a nature lover and enjoys capturing it through photography.</p>
    <div class="photo-grid">
      ${NATURE_PHOTOS.map((src) => html`<img key=${src} src=${src} alt="Nature" loading="lazy" />`)}
    </div>
    <h3>Sports</h3>
    <p>Saad loves sports and always makes time for cricket. He stays active with regular gym workouts.</p>
    <div class="photo-grid">
      ${MISC_PHOTOS.map((src) => html`<img key=${src} src=${src} alt="Cricket team" loading="lazy" />`)}
    </div>
  </section>`;

const Footer = () => html`
  <footer class="footer">
    <hr/>
    <p>Last updated on: ${new Date().toLocaleDateString('en-CA')}.</p>
  </footer>`;

// ─── App ───
const App = () => {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' });
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return html`
    <${Navbar} active=${active} />
    <div class="container">
      <${Profile} />
      <main class="content">
        <${About} />
        <${Education} />
        <${News} />
        <${Publications} />
        <${Experience} />
        <${Honors} />
        <${Services} />
        <${Misc} />
        <${Footer} />
      </main>
    </div>`;
};

ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);

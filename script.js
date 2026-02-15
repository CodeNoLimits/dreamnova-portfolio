/* ════════════════════════════════════════════════════════════════
   DREAMNOVA PORTFOLIO — Engine
   ════════════════════════════════════════════════════════════════ */

// Thumbnail service
const thumb = (url, w = 600, h = 400) =>
  `https://image.thum.io/get/width/${w}/crop/${h}/noanimate/${encodeURIComponent(url)}`;

// ── Featured Projects ────────────────────────────────────────
const FEATURED = [
  {
    name: "Le Moulin Doré",
    url: "https://moulindore.co.il/en",
    category: "E-COMMERCE · SHOPIFY",
    desc: "Premium French bakery chain with 6 branches across Israel. Full e-commerce with kosher-certified products, catering services, and multi-currency checkout.",
    tags: ["Shopify", "E-commerce", "Multi-lang", "ILS/EUR"],
  },
  {
    name: "Keren Rabbi Yisrael",
    url: "https://haesh-sheli-new.vercel.app",
    category: "E-COMMERCE · REACT",
    desc: "Breslov bookshop featuring 43 books, Stripe + PayPal payments in 6 languages (Hebrew, English, French, Spanish, Russian, Arabic) with RTL support.",
    tags: ["React 18", "Vite", "Stripe", "6 Languages"],
  },
  {
    name: "DreamNova Consult",
    url: "https://dreamnova-consult.vercel.app",
    category: "AGENCY · NEXT.JS",
    desc: "AI consulting agency for entrepreneurs. Premium web design, automation, marketing, and training services. Monthly plans from Solo to Enterprise.",
    tags: ["Next.js 15", "Tailwind 4", "Vercel"],
  },
  {
    name: "Formation IA",
    url: "https://dreamnova-formation-ia.vercel.app",
    category: "EDTECH · NEXT.JS",
    desc: "Comprehensive AI training platform. 8 modules, 45+ practical lessons. Three pricing tiers from Starter (€297) to Expert (€997). 2,500+ students.",
    tags: ["Next.js 15", "Stripe", "EdTech"],
  },
  {
    name: "Ha-Mazon Investor Pitch",
    url: "https://ha-mazon-pitch.vercel.app",
    category: "INVESTOR DECK",
    desc: "Seed-stage pitch for AI-native electric food delivery logistics in Paris. Seeking €1.5M. AI voice ordering, route optimization, all-electric fleet.",
    tags: ["Pitch Deck", "€1.5M Raise", "AI/Logistics"],
  },
  {
    name: "TerraMind",
    url: "https://terramind-pitch.vercel.app",
    category: "INVESTOR DECK · HEALTH",
    desc: "AI-powered mental health platform. AI+human hybrid therapy at accessible pricing. Targeting $500K-$2M seed round for the $180B mental health market.",
    tags: ["AI Health", "Pitch Deck", "$500K-2M"],
  },
];

// ── All Projects ─────────────────────────────────────────────
const PROJECTS = [
  { name: "Maison Sagit", url: "https://maisonsagit.com", category: "client", desc: "Luxury jewelry e-commerce with custom domain. Multilingual (FR/EN/HE) with elegant product showcase.", status: "live" },
  { name: "Barukh Sagit Jewelry", url: "https://barukh-sagit-jewelry.vercel.app", category: "client", desc: "Luxury jewelry brand site. Next.js with Supabase backend and multi-currency support.", status: "live" },
  { name: "Esther Ifra Breslev", url: "https://ultime-esther-ifra-breslev.vercel.app", category: "client", desc: "Breslov books e-commerce with subscriptions, digital reader, and DRM protection.", status: "live" },
  { name: "Ariel Kavkom Solar", url: "https://ariel-solar-panels-kavkom.vercel.app", category: "client", desc: "Solar panel company website with lead generation and service showcase.", status: "live" },
  { name: "Noam Design", url: "https://noam-design.vercel.app", category: "client", desc: "Luxury architectural planters and premium artificial plants showcase.", status: "live" },
  { name: "Ran Entertainer", url: "https://ran-entertainer.vercel.app", category: "client", desc: "Entertainment services portfolio with booking and event showcase.", status: "live" },
  { name: "Breslev Books Preview", url: "https://breslev-books-preview.vercel.app", category: "client", desc: "Shopify-integrated Breslev books preview with product browsing.", status: "live" },
  { name: "Sagit Video Portfolio", url: "https://sagit-video-portfolio.vercel.app", category: "client", desc: "Video portfolio showcasing jewelry craftsmanship and brand stories.", status: "live" },
  { name: "Tikoun Aolam", url: "https://tikoun-aolam.com", category: "client", desc: "French Breslov bookshop. Rabbi Nahman literature, prayer books, and community engagement.", status: "live" },
  { name: "LMC Consulting", url: "https://lmc-consulting-proposition.vercel.app", category: "client", desc: "Professional consulting proposition and services presentation.", status: "live" },
  { name: "DreamNova Global Pitch", url: "https://dreamnova-global-pitch.vercel.app", category: "investor", desc: "Master investor pitch: 24 active projects, 3-tier portfolio, Impact+Profit mission.", status: "live" },
  { name: "TerraMind Vitrine", url: "https://terramind-vitrine.vercel.app", category: "investor", desc: "TerraMind product showcase and market positioning for investors.", status: "live" },
  { name: "Ha-Mazon Showcase", url: "https://hamazon-investor-showcase.vercel.app", category: "investor", desc: "Ha-Mazon detailed investor showcase with market analysis and projections.", status: "live" },
  { name: "DreamNova Investor", url: "https://dreamnova-investor-showcase.vercel.app", category: "investor", desc: "DreamNova ecosystem investor showcase with portfolio overview.", status: "live" },
  { name: "ACIC Proposal 2026", url: "https://acic-proposal-2026.vercel.app", category: "investor", desc: "Strategic proposal for ACIC partnership and collaboration.", status: "live" },
  { name: "LeadGen PAC 2026", url: "https://leadgen-pac-2026.vercel.app", category: "product", desc: "Automated lead generation tool for political action committees.", status: "live" },
  { name: "DreamNova AI Academy", url: "https://dreamnova-ai-academy.vercel.app", category: "product", desc: "AI education academy with courses and certification programs.", status: "live" },
  { name: "Sports Radar", url: "https://sports-radar.vercel.app", category: "product", desc: "Real-time sports analytics dashboard with AI-powered predictions.", status: "live" },
  { name: "Clinical Trial Screener", url: "https://clinical-trial-screening-assistant.vercel.app", category: "product", desc: "AI assistant for clinical trial patient screening and eligibility.", status: "live" },
  { name: "DreamOS", url: "https://dreamos-vert.vercel.app", category: "product", desc: "Neuro-Theological Operating System. AI-powered productivity meets spiritual practice.", status: "live" },
  { name: "Rabbi Nahman Site", url: "https://rabbi-nahman-site.vercel.app", category: "product", desc: "Educational platform for Rabbi Nachman teachings with multilingual content.", status: "live" },
  { name: "Coffee Price Tracker", url: "https://coffee-price-tracker.vercel.app", category: "product", desc: "Real-time commodity price tracking for coffee markets worldwide.", status: "live" },
  { name: "Crazy Coffee", url: "https://crazy-coffee-site.vercel.app", category: "product", desc: "Premium coffee brand website with product showcase and ordering.", status: "live" },
  { name: "Dream Hub", url: "https://dream-hub-kappa.vercel.app", category: "internal", desc: "Central hub connecting all DreamNova services and projects.", status: "live" },
  { name: "Mission Control", url: "https://dreamnova-mission-control.vercel.app", category: "internal", desc: "Real-time autonomous systems monitoring with AI insights and Telegram bridge.", status: "live" },
  { name: "Client Status", url: "https://dreamnova-client-status.vercel.app", category: "internal", desc: "Client project tracking dashboard with progress visualization.", status: "live" },
  { name: "DreamNova Dashboard", url: "https://dreamnova-dashboard.vercel.app", category: "internal", desc: "Command center showing all active projects, tasks, and infrastructure.", status: "live" },
  { name: "Bookmarklets v5", url: "https://bookmarklets-v5.vercel.app", category: "internal", desc: "Collection of productivity bookmarklets for web development.", status: "live" },
  { name: "DreamNova Nexus", url: "https://dreamnova-nexus-ultimate.vercel.app", category: "internal", desc: "Ultimate project nexus connecting all DreamNova systems.", status: "live" },
  { name: "God Mode", url: "https://dreamnova-god-mode.vercel.app", category: "internal", desc: "Advanced admin panel with full system control capabilities.", status: "live" },
];

// ── SaaS Apps ────────────────────────────────────────────────
const SAAS = [
  { name: "LeaseGuard AI", url: "https://01-leaseguard-ai.vercel.app", icon: "&#128220;", desc: "AI lease analysis" },
  { name: "VoiceNote Pro", url: "https://02-voicenote-pro.vercel.app", icon: "&#127908;", desc: "Voice transcription" },
  { name: "BG Remove AI", url: "https://03-bgremove-ai.vercel.app", icon: "&#127912;", desc: "Background removal" },
  { name: "ContentForge", url: "https://04-contentforge.vercel.app", icon: "&#9997;", desc: "AI content creation" },
  { name: "InvoiceWiz", url: "https://05-invoicewiz.vercel.app", icon: "&#128196;", desc: "Smart invoicing" },
  { name: "ResumeBoost", url: "https://06-resumeboost-ai.vercel.app", icon: "&#128188;", desc: "AI resume builder" },
  { name: "Chatbot Builder", url: "https://07-chatbot-builder.vercel.app", icon: "&#129302;", desc: "Custom chatbots" },
  { name: "EmailCraft AI", url: "https://08-emailcraft-ai.vercel.app", icon: "&#9993;", desc: "AI email writing" },
  { name: "PDF2Insights", url: "https://09-pdf2insights.vercel.app", icon: "&#128200;", desc: "PDF analysis" },
  { name: "SocialPulse AI", url: "https://10-socialpulse-ai.vercel.app", icon: "&#128225;", desc: "Social scheduler" },
];

// ════════════════════════════════════════════════════════════
//  RENDERERS
// ════════════════════════════════════════════════════════════

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;

  grid.innerHTML = FEATURED.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener" class="featured-card reveal">
      <div class="featured-thumb-wrap">
        <img class="featured-thumb thumb-loading" src="${thumb(p.url, 700, 350)}" alt="${p.name}" loading="lazy"
          onerror="this.style.display='none'" onload="this.classList.remove('thumb-loading')">
      </div>
      <div class="featured-info">
        <div class="featured-category">${p.category}</div>
        <div class="featured-name">${p.name}</div>
        <div class="featured-desc">${p.desc}</div>
        <div class="featured-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="featured-link">Visit site &#8594;</div>
      </div>
    </a>
  `).join('');
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener" class="project-card reveal" data-category="${p.category}">
      <div class="project-thumb-wrap">
        <img class="project-thumb thumb-loading" src="${thumb(p.url, 500, 280)}" alt="${p.name}" loading="lazy"
          onerror="this.style.display='none'" onload="this.classList.remove('thumb-loading')">
      </div>
      <div class="project-info">
        <div class="project-category">${p.category.toUpperCase()}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-status">
          <span class="status-dot ${p.status === 'live' ? 'live' : 'wip'}"></span>
          ${p.status === 'live' ? 'LIVE' : 'IN PROGRESS'}
        </div>
      </div>
    </a>
  `).join('');

  // Re-trigger reveal for newly rendered cards
  observeReveal();
}

function renderSaaS() {
  const grid = document.getElementById("saasGrid");
  if (!grid) return;

  grid.innerHTML = SAAS.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" class="saas-card reveal">
      <div class="saas-icon">${s.icon}</div>
      <div class="saas-name">${s.name}</div>
      <div class="saas-desc">${s.desc}</div>
    </a>
  `).join('');
}

// ════════════════════════════════════════════════════════════
//  FILTERS
// ════════════════════════════════════════════════════════════

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ════════════════════════════════════════════════════════════
//  STAT COUNTER ANIMATION
// ════════════════════════════════════════════════════════════

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = current + '+';
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ════════════════════════════════════════════════════════════
//  SCROLL REVEAL
// ════════════════════════════════════════════════════════════

function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ════════════════════════════════════════════════════════════
//  MOBILE NAV
// ════════════════════════════════════════════════════════════

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ════════════════════════════════════════════════════════════
//  NAV SCROLL EFFECT
// ════════════════════════════════════════════════════════════

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.padding = '8px 0';
      nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
    } else {
      nav.style.padding = '16px 0';
      nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
    }
  }, { passive: true });
}

// ════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderProjects();
  renderSaaS();
  initFilters();
  animateCounters();
  observeReveal();
  initMobileNav();
  initNavScroll();
});

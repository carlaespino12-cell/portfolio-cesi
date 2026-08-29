// ─────────────────────────────────────────────────────────
//  content.js  ·  Edit this file to update site-wide text
// ─────────────────────────────────────────────────────────

const siteContent = {

  // ── Personal ────────────────────────────────────────────
  name:     'Carla Espino',
  nameFull: 'Carla Espino Segura-Illa',
  email:    'carlaespinoseg@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/carla-esi/',

  // ── Footer ──────────────────────────────────────────────
  footerCta: 'Always happy to connect <em>— say hi</em>',

  // ── About page ──────────────────────────────────────────
  about: [
    'I work across product design and design operations, simplifying complex systems into seamless experiences.',
    'With a background in industrial design and a focus on user experience and business strategy, I approach products through function, deep understanding of user needs, and long-term scalability. I\'ve shipped across hardware, SaaS, and multi-platform environments.'
  ],

  // ── Projects ────────────────────────────────────────────
  //  Used on: home page cards · next-project thumbnails
  projects: [
    {
      href:    'hp-build-gc.html',
      image:   'project-1/thumbnail1.png',
      alt:     'HP Build Workspace — GC Workflow',
      title:   'Making sure the right drawing is always in the right hands',
      desc:    'Redesigning the product architecture around the General Contractor\'s real workflow',
      product: 'HP Build',
      logo:    'assets/HPBuild-icon-foreground.svg'
    },
    {
      href:    'ai-vectorize.html',
      image:   'project-2/thumbnail2.png',
      alt:     'AI Vectorize',
      title:   'Turning HP printers into an adoption channel for HP Build',
      desc:    'Designing a seamless plotter-to-cloud workflow that converts scanned analog plans into editable CAD files — across three screen sizes and two platforms.',
      product: 'HP DesignJet',
      logo:    'project-2/vectorize-icon.svg'
    }
  ]
};

// ─── Rendering helpers (do not edit below) ──────────────

function _renderFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
  <div class="wrap">
    <p class="footer-cta">${siteContent.footerCta}</p>
    <div class="footer-links-row">
      <a class="btn-tertiary footer-text-link" href="mailto:${siteContent.email}">Email me <span class="btn-arrow"><i data-lucide="arrow-right" width="11" height="11" stroke-width="1.2" aria-hidden="true"></i></span></a>
      <button class="btn-tertiary footer-copy-btn" data-email="${siteContent.email}">Copy email <span class="btn-icon"><i data-lucide="copy" width="13" height="13" stroke-width="1.5" aria-hidden="true"></i></span></button>
      <a class="btn-tertiary footer-text-link" href="${siteContent.linkedIn}" target="_blank">LinkedIn <span class="btn-arrow"><i data-lucide="arrow-right" width="11" height="11" stroke-width="1.2" aria-hidden="true"></i></span></a>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} ${siteContent.nameFull}</span>
      <span class="footer-copy">Designed and built vibecoding with Claude</span>
    </div>
  </div>`;
}

const _actionSvg = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 5.5h8M6 1.5l4 4-4 4"/></svg>`;
// btn class is added wherever _actionBtn is used
const _logoSvg   = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`;

const _viewArrowSvg = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"/></svg>`;

function _renderProjectCards() {
  const el = document.querySelector('#case-studies');
  if (!el) return;
  el.innerHTML = siteContent.projects.map(p => `
    <div class="preview-entry">
      <a class="entry-images-wrap" href="${p.href}">
        <div class="entry-image-wrap">
          <img src="${p.image}" alt="${p.alt}" loading="lazy" width="800" height="600" />
          <div class="entry-hover-overlay" aria-hidden="true">
            <span class="entry-view-pill">${_viewArrowSvg} View now</span>
          </div>
        </div>
      </a>
      <div class="entry-info">
        <div class="entry-client-row">
          <span class="entry-product-name">${p.product}</span>
        </div>
        <h2 class="entry-title">${p.title}</h2>
      </div>
    </div>`).join('');
}

function _renderAbout() {
  const el = document.querySelector('.bg-content');
  if (!el) return;
  el.innerHTML = siteContent.about.map(p => `<p class="bg-para">${p}</p>`).join('');
}

// ── Toast ──────────────────────────────────────────────────────────────
function _initToast() {
  const style = document.createElement('style');
  style.textContent = `
    #site-toast {
      position: fixed;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%) translateY(6px);
      background: var(--gray-100, #0F161E);
      color: #fff;
      font-family: var(--font-sans, sans-serif);
      font-size: var(--text-sm, 12px);
      font-weight: var(--weight-regular, 400);
      padding: 8px 18px;
      border-radius: 999px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
      z-index: 9999;
      white-space: nowrap;
    }
    #site-toast.visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  `;
  document.head.appendChild(style);

  const toast = document.createElement('div');
  toast.id = 'site-toast';
  document.body.appendChild(toast);
}

let _toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('site-toast');
  if (!toast) return;
  clearTimeout(_toastTimer);
  toast.textContent = msg;
  toast.classList.add('visible');
  _toastTimer = setTimeout(() => toast.classList.remove('visible'), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  _initToast();
  _renderFooter();
  _renderProjectCards();
  _renderAbout();
  _initCounterAnimations();
  if (window.lucide) lucide.createIcons();

  document.addEventListener('click', e => {
    const btn = e.target.closest('.footer-copy-btn');
    if (!btn) return;
    navigator.clipboard.writeText(btn.dataset.email)
      .then(() => showToast('Email copied'))
      .catch(() => console.error('Failed to copy email to clipboard'));
  });

  _initSidenavActive();
});

// ─── Counter animations (data-count) ──────────────────────────────
function _initCounterAnimations() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        _animateCounter(entry.target);
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  counters.forEach(counter => observer.observe(counter));
}

function _animateCounter(element) {
  const target = parseInt(element.dataset.count);
  const suffix = element.dataset.suffix || '';
  const duration = 1200; // ms
  const start = Date.now();
  const startValue = 0;
  
  const animate = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function: cubic-bezier for smooth animation
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const current = Math.floor(startValue + (target - startValue) * easeOut(progress));
    
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  animate();
}

// ─── Sidebar active state detection ─────────────────────────────────
function _initSidenavActive() {
  const sidenavLinks = document.querySelectorAll('.cs-sidenav-link');
  if (sidenavLinks.length === 0) return; // Not a case study page

  const updateActiveLink = () => {
    let currentSection = null;
    
    // Find which section is closest to viewport top
    sidenavLinks.forEach(link => {
      const targetId = link.getAttribute('href').slice(1); // Remove #
      const section = document.getElementById(targetId);
      
      if (section) {
        const rect = section.getBoundingClientRect();
        // Section is in view if it's within the top 30% of the viewport
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom > 0) {
          currentSection = link;
        }
      }
    });
    
    // Update active state
    sidenavLinks.forEach(link => link.classList.remove('active'));
    if (currentSection) {
      currentSection.classList.add('active');
    }
  };

  // Update on scroll with debounce
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveLink, 50);
  }, { passive: true });

  // Initial update
  updateActiveLink();
}

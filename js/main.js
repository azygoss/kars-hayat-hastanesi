document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileNavClose = document.querySelector('.mobile-nav__close');
  const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const doctorCards = document.querySelectorAll('.doctor-card');
  const doctorsEmpty = document.getElementById('doctors-empty');
  const revealElements = document.querySelectorAll('.reveal');
  const statNumbers = document.querySelectorAll('.stat__num');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const backToTop = document.getElementById('back-to-top');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const faqList = document.getElementById('faq-list');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchBackdrop = document.getElementById('search-backdrop');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  let lastFocus = null;
  let scrollY = 0;
  let menuOpen = false;
  let modalOpen = false;
  let lightboxOpen = false;
  let searchOpen = false;
  let newsExpanded = false;
  let currentLang = localStorage.getItem('lang') || 'tr';

  function t(path) {
    return path.split('.').reduce((o, k) => o?.[k], I18N[currentLang]) ?? path;
  }

  function getNewsContent(key) {
    const base = SITE_DATA.news[key];
    const rich = typeof NEWS_CONTENT !== 'undefined' ? NEWS_CONTENT[key] : null;
    if (!base) return null;
    const loc = rich?.[currentLang] || rich?.tr;
    return {
      date: base.date,
      image: base.image,
      category: rich?.category?.[currentLang] || rich?.category?.tr || '',
      tags: rich?.tags?.[currentLang] || rich?.tags?.tr || [],
      title: loc?.title || base.title,
      excerpt: loc?.excerpt || base.body,
      article: loc?.article || [{ type: 'p', text: base.body }]
    };
  }

  function renderArticleBlocks(blocks) {
    return blocks.map(block => {
      if (block.type === 'h3') return `<h3 class="blog-article__heading">${block.text}</h3>`;
      if (block.type === 'ul') return `<ul class="blog-article__list">${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
      return `<p class="blog-article__para">${block.text}</p>`;
    }).join('');
  }

  function applyI18n() {
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.description');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active);
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
      const map = { all: 'ui.filters.all', cerrahi: 'ui.filters.surgical', dahili: 'ui.filters.internal', acil: 'ui.filters.emergency' };
      if (map[btn.dataset.filter]) btn.textContent = t(map[btn.dataset.filter]);
    });
    [
      ['#hakkimizda .eyebrow', 'ui.sections.aboutEyebrow'],
      ['#hakkimizda .section-title', 'ui.sections.aboutTitle'],
      ['#olanaklar .eyebrow', 'ui.sections.facilitiesEyebrow'],
      ['#olanaklar .section-title', 'ui.sections.facilitiesTitle'],
      ['#birimler .eyebrow', 'ui.sections.deptsEyebrow'],
      ['#birimler .section-title', 'ui.sections.deptsTitle'],
      ['#birimler .section-desc', 'ui.sections.deptsDesc'],
      ['#doktorlar .eyebrow', 'ui.sections.doctorsEyebrow'],
      ['#doktorlar .section-title', 'ui.sections.doctorsTitle'],
      ['#doktorlar .section-desc', 'ui.sections.doctorsDesc'],
      ['#referanslar .eyebrow', 'ui.sections.partnersEyebrow'],
      ['#referanslar .section-title', 'ui.sections.partnersTitle'],
      ['#referanslar .section-desc', 'ui.sections.partnersDesc'],
      ['#haberler .eyebrow', 'ui.sections.newsEyebrow'],
      ['#haberler .section-title', 'ui.sections.newsTitle'],
      ['#galeri .eyebrow', 'ui.sections.galleryEyebrow'],
      ['#galeri .section-title', 'ui.sections.galleryTitle'],
      ['#videolar .eyebrow', 'ui.sections.videosEyebrow'],
      ['#videolar .section-title', 'ui.sections.videosTitle'],
      ['#kalite .eyebrow', 'ui.sections.qualityEyebrow'],
      ['#kalite .section-title', 'ui.sections.qualityTitle'],
      ['#refakatci .eyebrow', 'ui.sections.companionEyebrow'],
      ['#refakatci .section-title', 'ui.sections.companionTitle'],
      ['#refakatci .section-desc', 'ui.sections.companionDesc'],
      ['#gorusler .eyebrow', 'ui.sections.feedbackEyebrow'],
      ['#gorusler .section-title', 'ui.sections.feedbackTitle'],
      ['#gorusler .section-desc', 'ui.sections.feedbackDesc'],
      ['#ik .eyebrow', 'ui.sections.careerEyebrow'],
      ['#ik .section-title', 'ui.sections.careerTitle'],
      ['#ik .section-desc', 'ui.sections.careerDesc'],
      ['#sss .eyebrow', 'ui.sections.faqEyebrow'],
      ['#sss .section-title', 'ui.sections.faqTitle'],
      ['#sss .section-desc', 'ui.sections.faqDesc'],
      ['#iletisim .eyebrow', 'ui.sections.contactEyebrow'],
      ['#iletisim .section-title', 'ui.sections.contactTitle'],
      ['#iletisim .section-desc', 'ui.sections.contactDesc']
    ].forEach(([sel, key]) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = t(key);
    });
    document.querySelectorAll('.mobile-nav__link').forEach((link, i) => {
      const keyList = ['about','partners','facilities','depts','doctors','news','gallery','videos','quality','companion','feedback','career','faq','contact'];
      if (keyList[i]) link.textContent = t(`ui.mobile.${keyList[i]}`);
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyI18n();
    renderNews();
    renderFaq();
    renderQuality();
    renderCompanionRules();
    renderVideos();
    if (searchOpen) runSearch(searchInput?.value || '');
  }

  function lockScroll() {
    scrollY = window.scrollY;
    document.body.classList.add('scroll-locked');
    document.body.style.top = `-${scrollY}px`;
  }

  function unlockScroll() {
    document.body.classList.remove('scroll-locked');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  }

  function updateScrollLock() {
    if (menuOpen || modalOpen || lightboxOpen || searchOpen) lockScroll();
    else unlockScroll();
  }

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    backToTop?.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function setMenuOpen(isOpen) {
    menuOpen = isOpen;
    menuToggle?.classList.toggle('active', isOpen);
    mobileNav?.classList.toggle('open', isOpen);
    mobileNavBackdrop?.classList.toggle('open', isOpen);
    mobileNav?.setAttribute('aria-hidden', !isOpen);
    mobileNavBackdrop?.setAttribute('aria-hidden', !isOpen);
    menuToggle?.setAttribute('aria-expanded', isOpen);
    updateScrollLock();
  }

  function closeMobileNav() {
    setMenuOpen(false);
  }

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(!menuOpen);
  });

  mobileNavClose?.addEventListener('click', closeMobileNav);
  mobileNavBackdrop?.addEventListener('click', closeMobileNav);

  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  const sections = document.querySelectorAll('section[id]');
  const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(section => observerNav.observe(section));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(num => animateCount(num));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats');
  if (statsSection) statsObserver.observe(statsSection);

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('tr-TR');
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visible = 0;

      doctorCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
      });

      if (doctorsEmpty) doctorsEmpty.hidden = visible > 0;
    });
  });

  function openModal(html, wide = false) {
    lastFocus = document.activeElement;
    modalContent.innerHTML = html;
    modal.classList.toggle('modal--wide', wide);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalOpen = true;
    updateScrollLock();
    modal.querySelector('.modal__close')?.focus();
  }

  function closeModal() {
    modal.classList.remove('open', 'modal--wide');
    modal.setAttribute('aria-hidden', 'true');
    modalContent.innerHTML = '';
    modalOpen = false;
    updateScrollLock();
    lastFocus?.focus();
  }

  modal?.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxOpen = true;
    updateScrollLock();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxOpen = false;
    updateScrollLock();
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key !== 'Escape') return;
    if (searchOpen) closeSearch();
    else if (lightboxOpen) closeLightbox();
    else if (modalOpen) closeModal();
    else if (menuOpen) closeMobileNav();
  });

  function formatDate(dateStr) {
    const locale = currentLang === 'en' ? 'en-US' : 'tr-TR';
    return new Date(dateStr).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function openNewsArticle(key) {
    const item = getNewsContent(key);
    if (!item) return;
    const tagsHtml = item.tags.length
      ? `<div class="blog-article__tags"><span class="blog-article__tags-label">${t('ui.blogTags')}:</span> ${item.tags.map(tag => `<span class="blog-article__tag">${tag}</span>`).join('')}</div>`
      : '';
    openModal(`
      <article class="blog-article">
        <header class="blog-article__header">
          ${item.category ? `<span class="blog-article__category">${item.category}</span>` : ''}
          <time class="blog-article__date" datetime="${item.date}">${formatDate(item.date)}</time>
          <h2 class="blog-article__title">${item.title}</h2>
        </header>
        <img src="${item.image}" alt="${item.title}" class="blog-article__hero">
        <div class="blog-article__content">${renderArticleBlocks(item.article)}</div>
        ${tagsHtml}
        <footer class="blog-article__footer">
          <a href="${SITE_DATA.links.randevu}" target="_blank" rel="noopener" class="btn btn--primary">${t('ui.cta.appointment')}</a>
        </footer>
      </article>
    `, true);
  }

  function bindNewsButtons(root = document) {
    root.querySelectorAll('[data-news]').forEach(btn => {
      btn.addEventListener('click', () => openNewsArticle(btn.dataset.news));
    });
  }

  function newsCardHtml(key, item, extraClass = '', delay = '') {
    return `
      <article class="news-card ${extraClass} reveal${delay}">
        <button type="button" class="news-card__link" data-news="${key}">
          <div class="news-card__img">
            ${item.category ? `<span class="news-card__category">${item.category}</span>` : ''}
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
          <div class="news-card__body">
            <time datetime="${item.date}">${formatDate(item.date)}</time>
            <h3>${item.title}</h3>
            ${extraClass.includes('featured') ? `<p>${item.excerpt.slice(0, 130)}…</p>` : ''}
            <span class="news-card__more">${t('ui.cta.readMore')}</span>
          </div>
        </button>
      </article>
    `;
  }

  function renderNews() {
    const grid = document.getElementById('news-grid');
    const toggle = document.getElementById('news-toggle');
    if (!grid || !SITE_DATA.news) return;

    const sorted = Object.keys(SITE_DATA.news)
      .map(key => [key, getNewsContent(key)])
      .sort((a, b) => new Date(b[1].date) - new Date(a[1].date));

    const [featuredKey, featuredItem] = sorted[0] || [];
    const rest = sorted.slice(1);
    const rowItems = rest.slice(0, 3);
    const moreItems = newsExpanded ? rest.slice(3) : [];

    grid.innerHTML = `
      ${featuredItem ? newsCardHtml(featuredKey, featuredItem, 'news-card--featured') : ''}
      <div class="news-layout__row">${rowItems.map(([key, item], i) =>
        newsCardHtml(key, item, '', i > 0 ? (i > 1 ? ' reveal--delay-2' : ' reveal--delay') : '')
      ).join('')}</div>
      ${moreItems.length ? `<div class="news-layout__more">${moreItems.map(([key, item]) =>
        newsCardHtml(key, item, 'news-card--compact')
      ).join('')}</div>` : ''}
    `;

    bindNewsButtons(grid);
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    if (toggle) {
      const hasMore = rest.length > 3;
      toggle.hidden = !hasMore;
      toggle.textContent = newsExpanded
        ? t('ui.cta.showLess')
        : `${t('ui.cta.showAllNews')} (${rest.length - 3})`;
      toggle.onclick = () => { newsExpanded = !newsExpanded; renderNews(); };
    }
  }

  function buildSearchIndex() {
    const index = [];
    const add = (title, text, type, action) => index.push({ title, text: text.toLowerCase(), type, action });

    Object.entries(SITE_DATA.departments).forEach(([key, d]) => {
      add(d.title, d.desc, currentLang === 'en' ? 'Department' : 'Birim', () => {
        closeSearch();
        document.querySelector(`[data-dept="${key}"]`)?.click();
      });
    });

    Object.entries(SITE_DATA.doctors).forEach(([key, d]) => {
      add(d.name, `${d.title} ${d.bio}`, currentLang === 'en' ? 'Doctor' : 'Doktor', () => {
        closeSearch();
        document.querySelector(`[data-doctor="${key}"]`)?.click();
      });
    });

    Object.keys(SITE_DATA.news).forEach(key => {
      const n = getNewsContent(key);
      const articleText = n.article.map(b => b.text || (b.items || []).join(' ')).join(' ');
      add(n.title, `${n.excerpt} ${articleText}`, currentLang === 'en' ? 'News' : 'Haber', () => {
        closeSearch();
        openNewsArticle(key);
      });
    });

    SITE_DATA.faq.forEach((item, i) => {
      add(item.q, item.a, 'FAQ', () => {
        closeSearch();
        document.getElementById('sss')?.scrollIntoView({ behavior: 'smooth' });
        faqList?.querySelectorAll('.faq__item').forEach((el, j) => {
          el.classList.toggle('open', j === i);
          el.querySelector('.faq__question')?.setAttribute('aria-expanded', j === i);
        });
      });
    });

    const sections = [
      ['#hakkimizda', currentLang === 'en' ? 'About' : 'Hakkımızda'],
      ['#birimler', currentLang === 'en' ? 'Departments' : 'Birimler'],
      ['#doktorlar', currentLang === 'en' ? 'Doctors' : 'Doktorlar'],
      ['#haberler', currentLang === 'en' ? 'News' : 'Haberler'],
      ['#iletisim', currentLang === 'en' ? 'Contact' : 'İletişim'],
      ['#referanslar', currentLang === 'en' ? 'Partners' : 'Anlaşmalı Kurumlar'],
      ['#galeri', currentLang === 'en' ? 'Gallery' : 'Galeri'],
      ['#kalite', currentLang === 'en' ? 'Quality' : 'Kalite'],
      ['#ik', currentLang === 'en' ? 'Careers' : 'Kariyer']
    ];
    sections.forEach(([sel, title]) => {
      add(title, title, currentLang === 'en' ? 'Section' : 'Bölüm', () => {
        closeSearch();
        document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    return index;
  }

  let searchIndex = buildSearchIndex();

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    searchIndex = buildSearchIndex();
    if (!q) {
      searchResults.innerHTML = '';
      return;
    }
    const matches = searchIndex.filter(item => item.title.toLowerCase().includes(q) || item.text.includes(q)).slice(0, 8);
    if (!matches.length) {
      searchResults.innerHTML = `<li class="search-overlay__empty">${t('ui.searchEmpty')}</li>`;
      return;
    }
    searchResults.innerHTML = matches.map((m, i) => `
      <li><button type="button" class="search-result" data-idx="${i}">
        <span class="search-result__type">${m.type}</span>
        <span class="search-result__title">${m.title}</span>
      </button></li>
    `).join('');
    searchResults.querySelectorAll('.search-result').forEach((btn, i) => {
      btn.addEventListener('click', () => matches[i].action());
    });
  }

  function openSearch() {
    searchOpen = true;
    searchOverlay.classList.add('open');
    searchOverlay.setAttribute('aria-hidden', 'false');
    updateScrollLock();
    searchInput?.focus();
    runSearch('');
  }

  function closeSearch() {
    searchOpen = false;
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
    if (searchInput) searchInput.value = '';
    searchResults.innerHTML = '';
    updateScrollLock();
  }

  searchToggle?.addEventListener('click', openSearch);
  document.getElementById('mobile-search-btn')?.addEventListener('click', () => {
    closeMobileNav();
    openSearch();
  });
  searchClose?.addEventListener('click', closeSearch);
  searchBackdrop?.addEventListener('click', closeSearch);
  searchInput?.addEventListener('input', e => runSearch(e.target.value));

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  function renderPartners() {
    const grid = document.getElementById('partners-grid');
    if (!grid || !SITE_DATA.partners) return;
    grid.innerHTML = SITE_DATA.partners.map(p => `
      <div class="partner-card">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
    `).join('');
  }

  function renderGallery() {
    const grid = document.getElementById('photo-gallery');
    if (!grid || !SITE_DATA.gallery) return;
    grid.innerHTML = SITE_DATA.gallery.map(item => `
      <button type="button" class="photo-gallery__item" data-src="${item.src}" data-alt="${item.alt}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
      </button>
    `).join('');

    grid.querySelectorAll('.photo-gallery__item').forEach(btn => {
      btn.addEventListener('click', () => {
        openLightbox(btn.dataset.src, btn.dataset.alt);
      });
    });
  }

  function renderVideos() {
    const grid = document.getElementById('video-gallery');
    if (!grid || !SITE_DATA.videos) return;
    const videoTitles = { '7/24 Acil Servis': '24/7 Emergency Department' };
    grid.innerHTML = SITE_DATA.videos.map(v => {
      const title = currentLang === 'en' ? (videoTitles[v.title] || v.title) : v.title;
      return `
      <article class="video-card">
        <div class="video-card__embed">
          <iframe src="${v.embed}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        <h3>${title}</h3>
      </article>`;
    }).join('');
  }

  function getQualityData() {
    const en = I18N.en.quality;
    const tr = SITE_DATA.quality;
    return currentLang === 'en' && en ? en : tr;
  }

  function renderQuality() {
    const q = getQualityData();
    if (!q) return;

    document.getElementById('quality-intro')?.replaceChildren(document.createTextNode(q.intro));
    const areas = document.getElementById('quality-areas');
    if (areas) {
      areas.innerHTML = q.areas.map(area => `
        <article class="quality-card">
          <h3>${area.title}</h3>
          <ul>${area.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </article>
      `).join('');
    }
    const committees = document.getElementById('quality-committees');
    if (committees) {
      committees.innerHTML = q.committees.map(c => `<li>${c}</li>`).join('');
    }
    const notes = document.getElementById('quality-notes');
    if (notes) {
      notes.innerHTML = q.notes.map(n => `<li>${n}</li>`).join('');
    }
  }

  function renderCompanionRules() {
    const list = document.getElementById('companion-rules');
    if (!list) return;
    const rules = currentLang === 'en' && I18N.en.companionRules
      ? I18N.en.companionRules
      : SITE_DATA.companionRules;
    list.innerHTML = rules.map(rule => `<li>${rule}</li>`).join('');
  }

  function renderFaq() {
    if (!faqList) return;
    const items = I18N[currentLang].faq || SITE_DATA.faq;
    faqList.innerHTML = items.map((item, i) => `
      <div class="faq__item${i === 0 ? ' open' : ''}">
        <button type="button" class="faq__question" aria-expanded="${i === 0}">
          ${item.q}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq__answer"><p>${item.a}</p></div>
      </div>
    `).join('');

    faqList.querySelectorAll('.faq__question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq__item');
        const isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq__item').forEach(el => {
          el.classList.remove('open');
          el.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  renderNews();
  renderPartners();
  renderGallery();
  renderVideos();
  renderQuality();
  renderCompanionRules();
  renderFaq();
  applyI18n();

  document.querySelectorAll('[data-dept]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dept = SITE_DATA.departments[btn.dataset.dept];
      if (!dept) return;
      openModal(`
        <img src="${dept.image}" alt="${dept.title}" class="modal__img">
        ${dept.tag ? `<span class="modal__tag">${dept.tag}</span>` : ''}
        <h2 class="modal__title">${dept.title}</h2>
        <p class="modal__body">${dept.desc}</p>
        <div class="modal__actions">
          <a href="${SITE_DATA.links.randevu}" target="_blank" rel="noopener" class="btn btn--primary">${t('ui.cta.appointment')}</a>
          <a href="tel:+904745024436" class="btn btn--outline">${t('ui.cta.info')}</a>
        </div>
      `);
    });
  });

  document.querySelectorAll('[data-doctor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const doc = SITE_DATA.doctors[btn.dataset.doctor];
      if (!doc) return;
      const specsHtml = doc.specialties?.length
        ? `<div class="modal__specialties"><h4>${t('ui.specialties')}</h4><ul>${doc.specialties.map(s => `<li>${s}</li>`).join('')}</ul></div>`
        : '';
      openModal(`
        <img src="${doc.image}" alt="${doc.name}" class="modal__img modal__img--portrait">
        <h2 class="modal__title">${doc.name}</h2>
        <p class="modal__subtitle">${doc.title}</p>
        <p class="modal__body">${doc.bio}</p>
        ${specsHtml}
        <div class="modal__actions">
          <a href="${SITE_DATA.links.randevu}" target="_blank" rel="noopener" class="btn btn--primary">${t('ui.cta.appointment')}</a>
          ${doc.instagram ? `<a href="${doc.instagram}" target="_blank" rel="noopener" class="btn btn--outline">Instagram</a>` : ''}
        </div>
      `);
    });
  });

  document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const content = SITE_DATA.legal?.[link.dataset.legal];
      if (!content) return;
      const bodyHtml = content.sections.map(s => `
        ${s.heading ? `<h3 class="modal__section-title">${s.heading}</h3>` : ''}
        <p class="modal__body-text">${s.body}</p>
      `).join('');
      openModal(`
        <h2 class="modal__title">${content.title}</h2>
        <div class="modal__legal">${bodyHtml}</div>
      `, true);
    });
  });

  function handleFormSubmit(form, fields, successEl, subject) {
    form?.addEventListener('submit', e => {
      e.preventDefault();
      successEl.hidden = true;

      let valid = true;
      Object.entries(fields).forEach(([key, { el, rule, msg }]) => {
        const errorEl = form.querySelector(`[data-for="${key}"]`);
        const ok = rule(el.value);
        el.classList.toggle('error', !ok);
        if (errorEl) errorEl.textContent = ok ? '' : msg;
        if (!ok) valid = false;
      });

      if (!valid) return;

      const body = Object.entries(fields)
        .map(([key, { el }]) => `${key}: ${el.value}`)
        .join('\n');

      window.location.href = `mailto:info@karshayathastanesi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      successEl.hidden = false;
      form.reset();
      Object.values(fields).forEach(({ el }) => el.classList.remove('error'));
    });
  }

  handleFormSubmit(contactForm, {
    name: { el: contactForm?.name, rule: v => v.trim().length >= 2, msg: 'Ad soyad en az 2 karakter olmalıdır.' },
    phone: { el: contactForm?.phone, rule: v => /^[\d\s()+-]{10,}$/.test(v.replace(/\s/g, '')), msg: 'Geçerli bir telefon numarası giriniz.' },
    email: { el: contactForm?.email, rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Geçerli bir e-posta adresi giriniz.' },
    message: { el: contactForm?.message, rule: v => v.trim().length >= 10, msg: 'Mesaj en az 10 karakter olmalıdır.' }
  }, formSuccess, 'Web Sitesi İletişim Formu');

  const feedbackForm = document.getElementById('feedback-form');
  const feedbackSuccess = document.getElementById('feedback-success');
  const ratingInput = document.getElementById('fb-rating');
  const ratingStars = document.querySelectorAll('.rating__star');

  ratingStars.forEach(star => {
    star.addEventListener('click', () => {
      const val = star.dataset.value;
      ratingInput.value = val;
      ratingStars.forEach(s => s.classList.toggle('active', s.dataset.value <= val));
    });
  });
  ratingStars.forEach(s => s.classList.add('active'));

  handleFormSubmit(feedbackForm, {
    name: { el: feedbackForm?.name, rule: v => v.trim().length >= 2, msg: 'Ad soyad en az 2 karakter olmalıdır.' },
    comment: { el: feedbackForm?.comment, rule: v => v.trim().length >= 10, msg: 'Yorum en az 10 karakter olmalıdır.' }
  }, feedbackSuccess, 'Hasta Görüş Formu');

  const careerForm = document.getElementById('career-form');
  const careerSuccess = document.getElementById('career-success');

  handleFormSubmit(careerForm, {
    name: { el: careerForm?.name, rule: v => v.trim().length >= 2, msg: 'Ad soyad en az 2 karakter olmalıdır.' },
    tc: { el: careerForm?.tc, rule: v => /^\d{11}$/.test(v.replace(/\s/g, '')), msg: 'Geçerli bir T.C. kimlik numarası giriniz.' },
    email: { el: careerForm?.email, rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Geçerli bir e-posta adresi giriniz.' },
    phone: { el: careerForm?.phone, rule: v => /^[\d\s()+-]{10,}$/.test(v.replace(/\s/g, '')), msg: 'Geçerli bir telefon numarası giriniz.' },
    message: { el: careerForm?.message, rule: v => v.trim().length >= 10, msg: 'Mesaj en az 10 karakter olmalıdır.' }
  }, careerSuccess, 'İnsan Kaynakları Başvuru Formu');

  if (!localStorage.getItem('cookie-consent')) {
    cookieBanner?.removeAttribute('hidden');
  }

  cookieAccept?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', '1');
    cookieBanner?.setAttribute('hidden', '');
  });
});
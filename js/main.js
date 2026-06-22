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

  let lastFocus = null;
  let scrollY = 0;
  let menuOpen = false;
  let modalOpen = false;
  let lightboxOpen = false;
  let newsExpanded = false;

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
    if (menuOpen || modalOpen || lightboxOpen) lockScroll();
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
    if (e.key !== 'Escape') return;
    if (lightboxOpen) closeLightbox();
    else if (modalOpen) closeModal();
    else if (menuOpen) closeMobileNav();
  });

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function bindNewsButtons(root = document) {
    root.querySelectorAll('[data-news]').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = SITE_DATA.news[btn.dataset.news];
        if (!item) return;
        openModal(`
          <img src="${item.image}" alt="${item.title}" class="modal__img">
          <p class="modal__meta">${formatDate(item.date)}</p>
          <h2 class="modal__title">${item.title}</h2>
          <p class="modal__body">${item.body}</p>
        `);
      });
    });
  }

  function newsCardHtml(key, item, extraClass = '', delay = '') {
    return `
      <article class="news-card ${extraClass} reveal${delay}">
        <button type="button" class="news-card__link" data-news="${key}">
          <div class="news-card__img"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
          <div class="news-card__body">
            <time datetime="${item.date}">${formatDate(item.date)}</time>
            <h3>${item.title}</h3>
            ${extraClass.includes('featured') ? `<p>${item.body.slice(0, 120)}…</p>` : ''}
            <span class="news-card__more">Devamını oku →</span>
          </div>
        </button>
      </article>
    `;
  }

  function renderNews() {
    const grid = document.getElementById('news-grid');
    const toggle = document.getElementById('news-toggle');
    if (!grid || !SITE_DATA.news) return;

    const sorted = Object.entries(SITE_DATA.news)
      .sort((a, b) => new Date(b[1].date) - new Date(a[1].date));

    const [featuredKey, featuredItem] = sorted[0] || [];
    const rest = sorted.slice(1);
    const rowItems = rest.slice(0, 3);
    const moreItems = newsExpanded ? rest.slice(3) : [];

    const featuredHtml = featuredItem
      ? newsCardHtml(featuredKey, featuredItem, 'news-card--featured')
      : '';

    const rowHtml = rowItems.map(([key, item], i) =>
      newsCardHtml(key, item, '', i > 0 ? (i > 1 ? ' reveal--delay-2' : ' reveal--delay') : '')
    ).join('');

    const moreHtml = moreItems.map(([key, item]) =>
      newsCardHtml(key, item, 'news-card--compact')
    ).join('');

    grid.innerHTML = `
      ${featuredHtml}
      <div class="news-layout__row">${rowHtml}</div>
      ${moreHtml ? `<div class="news-layout__more">${moreHtml}</div>` : ''}
    `;

    bindNewsButtons(grid);
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    if (toggle) {
      const hasMore = rest.length > 3;
      toggle.hidden = !hasMore;
      toggle.textContent = newsExpanded ? 'Daha az göster' : `Tüm haberleri göster (${rest.length - 3} daha)`;
      toggle.onclick = () => {
        newsExpanded = !newsExpanded;
        renderNews();
      };
    }
  }

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
    grid.innerHTML = SITE_DATA.videos.map(v => `
      <article class="video-card">
        <div class="video-card__embed">
          <iframe src="${v.embed}" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        <h3>${v.title}</h3>
      </article>
    `).join('');
  }

  function renderQuality() {
    const q = SITE_DATA.quality;
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
    if (!list || !SITE_DATA.companionRules) return;
    list.innerHTML = SITE_DATA.companionRules.map(rule => `<li>${rule}</li>`).join('');
  }

  renderNews();
  renderPartners();
  renderGallery();
  renderVideos();
  renderQuality();
  renderCompanionRules();

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
          <a href="${SITE_DATA.links.randevu}" target="_blank" rel="noopener" class="btn btn--primary">Randevu Al</a>
          <a href="tel:+904745024436" class="btn btn--outline">Bilgi Al</a>
        </div>
      `);
    });
  });

  document.querySelectorAll('[data-doctor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const doc = SITE_DATA.doctors[btn.dataset.doctor];
      if (!doc) return;
      const specsHtml = doc.specialties?.length
        ? `<div class="modal__specialties"><h4>İlgi Alanları</h4><ul>${doc.specialties.map(s => `<li>${s}</li>`).join('')}</ul></div>`
        : '';
      openModal(`
        <img src="${doc.image}" alt="${doc.name}" class="modal__img modal__img--portrait">
        <h2 class="modal__title">${doc.name}</h2>
        <p class="modal__subtitle">${doc.title}</p>
        <p class="modal__body">${doc.bio}</p>
        ${specsHtml}
        <div class="modal__actions">
          <a href="${SITE_DATA.links.randevu}" target="_blank" rel="noopener" class="btn btn--primary">Randevu Al</a>
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

  if (faqList && SITE_DATA.faq) {
    faqList.innerHTML = SITE_DATA.faq.map((item, i) => `
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
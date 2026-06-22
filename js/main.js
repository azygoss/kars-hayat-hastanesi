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

  let lastFocus = null;
  let scrollY = 0;
  let menuOpen = false;
  let modalOpen = false;

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
    if (menuOpen || modalOpen) lockScroll();
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

  function openModal(html) {
    lastFocus = document.activeElement;
    modalContent.innerHTML = html;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalOpen = true;
    updateScrollLock();
    modal.querySelector('.modal__close')?.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalContent.innerHTML = '';
    modalOpen = false;
    updateScrollLock();
    lastFocus?.focus();
  }

  modal?.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (modalOpen) closeModal();
    else if (menuOpen) closeMobileNav();
  });

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
          <a href="http://195.175.92.206:3634/randevu" target="_blank" rel="noopener" class="btn btn--primary">Randevu Al</a>
          <a href="tel:+904745024436" class="btn btn--outline">Bilgi Al</a>
        </div>
      `);
    });
  });

  document.querySelectorAll('[data-doctor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const doc = SITE_DATA.doctors[btn.dataset.doctor];
      if (!doc) return;
      openModal(`
        <img src="${doc.image}" alt="${doc.name}" class="modal__img modal__img--portrait">
        <h2 class="modal__title">${doc.name}</h2>
        <p class="modal__subtitle">${doc.title}</p>
        <p class="modal__body">${doc.bio}</p>
        <div class="modal__actions">
          <a href="http://195.175.92.206:3634/randevu" target="_blank" rel="noopener" class="btn btn--primary">Randevu Al</a>
          ${doc.instagram ? `<a href="${doc.instagram}" target="_blank" rel="noopener" class="btn btn--outline">Instagram</a>` : ''}
        </div>
      `);
    });
  });

  document.querySelectorAll('[data-news]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = SITE_DATA.news[btn.dataset.news];
      if (!item) return;
      const date = new Date(item.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
      openModal(`
        <img src="${item.image}" alt="${item.title}" class="modal__img">
        <p class="modal__meta">${date}</p>
        <h2 class="modal__title">${item.title}</h2>
        <p class="modal__body">${item.body}</p>
      `);
    });
  });

  const legalContent = {
    kvkk: {
      title: 'Kişisel Verilerin Korunması (KVKK)',
      body: 'Özel Kars Hayat Hastanesi olarak kişisel verilerinizin güvenliğine önem veriyoruz. Hastane hizmetleri kapsamında toplanan kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu\'na uygun olarak işlenmekte, saklanmakta ve korunmaktadır. Verileriniz yalnızca sağlık hizmetlerinin sunulması, yasal yükümlülüklerin yerine getirilmesi ve hasta haklarının korunması amacıyla kullanılmaktadır.'
    },
    yasal: {
      title: 'Yasal Uyarı',
      body: 'Bu web sitesinde yer alan bilgiler genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz. Tanı ve tedavi için mutlaka bir sağlık profesyoneline başvurunuz. Sitedeki içerik, görseller ve metinler Özel Kars Hayat Hastanesi\'ne aittir; izinsiz kopyalanamaz ve çoğaltılamaz.'
    }
  };

  document.querySelectorAll('[data-legal]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const content = legalContent[link.dataset.legal];
      if (!content) return;
      openModal(`
        <h2 class="modal__title">${content.title}</h2>
        <p class="modal__body">${content.body}</p>
      `);
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

  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    formSuccess.hidden = true;

    const fields = {
      name: { el: contactForm.name, rule: v => v.trim().length >= 2, msg: 'Ad soyad en az 2 karakter olmalıdır.' },
      phone: { el: contactForm.phone, rule: v => /^[\d\s()+-]{10,}$/.test(v.replace(/\s/g, '')), msg: 'Geçerli bir telefon numarası giriniz.' },
      email: { el: contactForm.email, rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Geçerli bir e-posta adresi giriniz.' },
      message: { el: contactForm.message, rule: v => v.trim().length >= 10, msg: 'Mesaj en az 10 karakter olmalıdır.' }
    };

    let valid = true;

    Object.entries(fields).forEach(([key, { el, rule, msg }]) => {
      const errorEl = contactForm.querySelector(`[data-for="${key}"]`);
      const ok = rule(el.value);
      el.classList.toggle('error', !ok);
      if (errorEl) errorEl.textContent = ok ? '' : msg;
      if (!ok) valid = false;
    });

    if (!valid) return;

    const body = Object.entries(fields)
      .map(([key, { el }]) => `${key}: ${el.value}`)
      .join('\n');

    const mailto = `mailto:info@karshayathastanesi.com?subject=${encodeURIComponent('Web Sitesi İletişim Formu')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    formSuccess.hidden = false;
    contactForm.reset();
    Object.values(fields).forEach(({ el }) => el.classList.remove('error'));
  });
});
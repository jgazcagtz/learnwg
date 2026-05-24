// ============================================================
// Learn WG — App script
// ============================================================
(function () {
    'use strict';

    // ---------- i18n dictionary ----------
    const i18n = {
        en: {
            // Navigation
            navAbout: 'About',
            navLang: 'Languages',
            navTech: 'Tech',
            navHabla: 'Habla Ya',
            // Language toggle button label
            langButton: 'Español',
            // Hero
            heroEyebrow: 'Online Education Platform',
            heroTitle: 'Learn languages and tech, the smart way.',
            heroSub: 'Curated online courses and AI-powered language practice with Habla Ya — built for real-world fluency and in-demand digital skills.',
            heroCtaPrimary: 'Explore Courses',
            heroCtaSecondary: 'Try Habla Ya',
            statLangs: 'Languages',
            statCourses: 'Tech Courses',
            statSupport: 'AI Practice',
            // About
            aboutEyebrow: 'About',
            aboutTitle: 'About Us',
            aboutText: 'Learn WG is an innovative educational platform connecting you with the best online courses for mastering languages and technology — taught by industry experts and designed for real progress.',
            // Languages
            langEyebrow: 'Languages',
            langTitle: 'Language Courses',
            langText: 'A growing catalog of language courses for every level — from absolute beginner to confident speaker.',
            langCardSpanish: 'Spanish',
            langCardEnglish: 'English',
            langCardFrench: 'French',
            langCardGerman: 'German',
            langCardRussian: 'Russian',
            langCardChinese: 'Chinese',
            langCardKorean: 'Korean',
            langCardMore: 'And more',
            langCardMoreSub: 'New languages added regularly',
            langCardLevel: 'Beginner — Advanced',
            // Tech
            techEyebrow: 'Tech',
            techTitle: 'Tech Courses',
            techText: 'Build the in-demand technical skills employers actually look for — taught by working professionals.',
            techCardWebTitle: 'Web Development',
            techCardWebSub: 'HTML, CSS, JavaScript, modern frameworks.',
            techCardDataTitle: 'Data Analysis',
            techCardDataSub: 'Spreadsheets, SQL, Python and data viz.',
            techCardCyberTitle: 'Cybersecurity',
            techCardCyberSub: 'Fundamentals, threats, defense and ethics.',
            // Habla Ya
            hablaTitle: 'Practice languages in real-time with AI.',
            hablaText: 'Habla Ya is an interactive AI tutor that helps you build speaking confidence — anytime, anywhere. Customize your learning experience and reach your goals faster.',
            hablaCta: 'Visit Habla Ya',
            // Footer
            footerNote: 'All rights reserved.'
        },
        es: {
            navAbout: 'Nosotros',
            navLang: 'Idiomas',
            navTech: 'Tecnología',
            navHabla: 'Habla Ya',
            langButton: 'English',
            heroEyebrow: 'Plataforma de Educación en Línea',
            heroTitle: 'Aprende idiomas y tecnología, de forma inteligente.',
            heroSub: 'Cursos en línea seleccionados y práctica de idiomas con IA en Habla Ya — diseñados para fluidez real y habilidades digitales con alta demanda.',
            heroCtaPrimary: 'Explorar Cursos',
            heroCtaSecondary: 'Probar Habla Ya',
            statLangs: 'Idiomas',
            statCourses: 'Cursos TI',
            statSupport: 'Práctica con IA',
            aboutEyebrow: 'Nosotros',
            aboutTitle: 'Acerca de Nosotros',
            aboutText: 'Learn WG es una plataforma educativa que te conecta con los mejores cursos en línea para dominar idiomas y tecnología — impartidos por expertos y diseñados para progreso real.',
            langEyebrow: 'Idiomas',
            langTitle: 'Cursos de Idiomas',
            langText: 'Un catálogo en crecimiento de cursos de idiomas para todos los niveles — desde principiante absoluto hasta hablante con confianza.',
            langCardSpanish: 'Español',
            langCardEnglish: 'Inglés',
            langCardFrench: 'Francés',
            langCardGerman: 'Alemán',
            langCardRussian: 'Ruso',
            langCardChinese: 'Chino',
            langCardKorean: 'Coreano',
            langCardMore: 'Y más',
            langCardMoreSub: 'Agregamos nuevos idiomas con frecuencia',
            langCardLevel: 'Principiante — Avanzado',
            techEyebrow: 'Tecnología',
            techTitle: 'Cursos de Tecnología',
            techText: 'Adquiere las habilidades técnicas con alta demanda que las empresas realmente buscan — con profesionales en activo.',
            techCardWebTitle: 'Desarrollo Web',
            techCardWebSub: 'HTML, CSS, JavaScript y frameworks modernos.',
            techCardDataTitle: 'Análisis de Datos',
            techCardDataSub: 'Hojas de cálculo, SQL, Python y visualización.',
            techCardCyberTitle: 'Ciberseguridad',
            techCardCyberSub: 'Fundamentos, amenazas, defensa y ética.',
            hablaTitle: 'Practica idiomas en tiempo real con IA.',
            hablaText: 'Habla Ya es un tutor de IA interactivo que te ayuda a ganar confianza hablando — en cualquier momento y lugar. Personaliza tu aprendizaje y alcanza tus metas más rápido.',
            hablaCta: 'Visitar Habla Ya',
            footerNote: 'Todos los derechos reservados.'
        }
    };

    const STORAGE_KEY = 'learnwg.lang';
    const MOBILE_BREAKPOINT = 768;

    // ---------- Helpers ----------
    function getStoredLang() {
        try {
            const v = localStorage.getItem(STORAGE_KEY);
            return v === 'en' || v === 'es' ? v : null;
        } catch (_) {
            return null;
        }
    }

    function storeLang(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
    }

    function detectInitialLang() {
        const stored = getStoredLang();
        if (stored) return stored;
        const browser = (navigator.language || 'en').toLowerCase();
        return browser.startsWith('es') ? 'es' : 'en';
    }

    // ---------- i18n apply ----------
    function applyTranslations(lang) {
        const dict = i18n[lang] || i18n.en;
        const nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach((node) => {
            const key = node.getAttribute('data-i18n');
            const value = dict[key];
            if (typeof value === 'string') {
                node.textContent = value;
            }
        });

        // Update <html lang="">
        document.documentElement.setAttribute('lang', lang);

        // Update language toggle button aria-label
        const langBtn = document.getElementById('language-toggle');
        if (langBtn) {
            const targetLabel = lang === 'en'
                ? 'Switch language to Spanish'
                : 'Switch language to English';
            langBtn.setAttribute('aria-label', targetLabel);

            const flag = langBtn.querySelector('span[aria-hidden="true"]');
            if (flag) flag.textContent = lang === 'en' ? 'ES' : 'EN';
        }
    }

    // ---------- Nav drawer ----------
    function setupNav() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('primary-nav');
        if (!hamburger || !navMenu) return;

        const open = () => {
            navMenu.classList.add('is-open');
            hamburger.classList.add('is-open');
            hamburger.setAttribute('aria-expanded', 'true');
            hamburger.setAttribute('aria-label', 'Close menu');
        };

        const close = () => {
            navMenu.classList.remove('is-open');
            hamburger.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Open menu');
        };

        const toggle = () => {
            if (navMenu.classList.contains('is-open')) close();
            else open();
        };

        hamburger.addEventListener('click', toggle);

        // Close on link click (mobile)
        navMenu.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.tagName === 'A') close();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
                close();
                hamburger.focus();
            }
        });

        // Close drawer when resizing to desktop
        let lastWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            const w = window.innerWidth;
            if (w >= MOBILE_BREAKPOINT && navMenu.classList.contains('is-open')) {
                close();
            }
            lastWidth = w;
        }, { passive: true });
    }

    // ---------- Language toggle ----------
    function setupLanguageToggle(initialLang) {
        const btn = document.getElementById('language-toggle');
        if (!btn) return;

        let current = initialLang;
        btn.addEventListener('click', () => {
            current = current === 'en' ? 'es' : 'en';
            applyTranslations(current);
            storeLang(current);
        });
    }

    // ---------- Reveal on scroll (IntersectionObserver) ----------
    function setupReveal() {
        const sections = document.querySelectorAll('.section');
        if (!sections.length) return;

        // Fallback for environments without IntersectionObserver: show everything.
        if (!('IntersectionObserver' in window)) {
            sections.forEach((s) => s.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.05
        });

        sections.forEach((s) => observer.observe(s));
    }

    // ---------- Header scroll state ----------
    function setupHeaderScroll() {
        const header = document.getElementById('site-header');
        if (!header) return;

        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                header.classList.toggle('is-scrolled', window.scrollY > 4);
                raf = 0;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ---------- Footer year ----------
    function setupFooterYear() {
        const el = document.getElementById('footer-year');
        if (el) el.textContent = String(new Date().getFullYear());
    }

    // ---------- Init ----------
    function init() {
        const lang = detectInitialLang();
        applyTranslations(lang);
        setupLanguageToggle(lang);
        setupNav();
        setupReveal();
        setupHeaderScroll();
        setupFooterYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();

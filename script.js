// ============================================================
// Learn WG — App script
// ============================================================
(function () {
    'use strict';

    // ---------- i18n dictionary ----------
    const i18n = {
        en: {
            navAbout: 'About',
            navLang: 'Languages',
            navTech: 'Tech',
            navHabla: 'Habla Ya',
            langButton: 'Español',
            heroEyebrow: 'Online Education Platform',
            heroTitle: 'Learn languages and tech, the smart way.',
            heroSub: 'Curated online courses and AI-powered language practice with Habla Ya — built for real-world fluency and in-demand digital skills.',
            heroCtaPrimary: 'Explore Courses',
            heroCtaSecondary: 'Try Habla Ya',
            statLangs: 'Languages',
            statCourses: 'Tech Courses',
            statSupport: 'AI Practice',
            aboutEyebrow: 'About',
            aboutTitle: 'About Us',
            aboutText: 'Learn WG is an innovative educational platform connecting you with the best online courses for mastering languages and technology — taught by industry experts and designed for real progress.',
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
            cardCta: 'View Course →',
            techEyebrow: 'Tech',
            techTitle: 'Tech Courses',
            techText: 'Build the in-demand technical skills employers actually look for — taught by working professionals.',
            techCardWebTitle: 'Web Development',
            techCardWebSub: 'HTML, CSS, JavaScript, modern frameworks.',
            techCardDataTitle: 'Data Analysis',
            techCardDataSub: 'Spreadsheets, SQL, Python and data viz.',
            techCardCyberTitle: 'Cybersecurity',
            techCardCyberSub: 'Fundamentals, threats, defense and ethics.',
            testEyebrow: 'Testimonials',
            testTitle: 'What Our Students Say',
            test1Text: '"Learn WG helped me go from zero to conversational Spanish in just 3 months. The courses are well-structured and the AI practice is a game-changer."',
            test1Name: 'Maria G.',
            test1Role: 'Spanish Student',
            test2Text: '"The Web Development course gave me the skills to land my first tech job. The instructors are industry pros who actually care."',
            test2Name: 'Carlos R.',
            test2Role: 'Web Dev Graduate',
            test3Text: '"Habla Ya is like having a patient language tutor available 24/7. I practice during my commute and my confidence has skyrocketed."',
            test3Name: 'Sophie L.',
            test3Role: 'French Learner',
            hablaTitle: 'Practice languages in real-time with AI.',
            hablaText: 'Habla Ya is an interactive AI tutor that helps you build speaking confidence — anytime, anywhere. Customize your learning experience and reach your goals faster.',
            hablaFeat1: 'Real-time conversation practice',
            hablaFeat2: 'Instant pronunciation feedback',
            hablaFeat3: 'Personalized learning paths',
            hablaCta: 'Visit Habla Ya',
            ctaTitle: 'Ready to start learning?',
            ctaText: 'Join thousands of students building real skills in languages and technology.',
            ctaPrimary: 'Browse Courses',
            ctaSecondary: 'Contact Us',
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
            cardCta: 'Ver Curso →',
            techEyebrow: 'Tecnología',
            techTitle: 'Cursos de Tecnología',
            techText: 'Adquiere las habilidades técnicas con alta demanda que las empresas realmente buscan — con profesionales en activo.',
            techCardWebTitle: 'Desarrollo Web',
            techCardWebSub: 'HTML, CSS, JavaScript y frameworks modernos.',
            techCardDataTitle: 'Análisis de Datos',
            techCardDataSub: 'Hojas de cálculo, SQL, Python y visualización.',
            techCardCyberTitle: 'Ciberseguridad',
            techCardCyberSub: 'Fundamentos, amenazas, defensa y ética.',
            testEyebrow: 'Testimonios',
            testTitle: 'Lo Que Dicen Nuestros Estudiantes',
            test1Text: '"Learn WG me ayudó a pasar de cero a conversar en español en solo 3 meses. Los cursos están bien estructurados y la práctica con IA es un cambio total."',
            test1Name: 'María G.',
            test1Role: 'Estudiante de Español',
            test2Text: '"El curso de Desarrollo Web me dio las habilidades para conseguir mi primer trabajo en tecnología. Los instructores son profesionales que realmente se preocupan."',
            test2Name: 'Carlos R.',
            test2Role: 'Graduado de Desarrollo Web',
            test3Text: '"Habla Ya es como tener un tutor de idiomas paciente disponible 24/7. Practico durante mi trayecto y mi confianza se ha disparado."',
            test3Name: 'Sophie L.',
            test3Role: 'Estudiante de Francés',
            hablaTitle: 'Practica idiomas en tiempo real con IA.',
            hablaText: 'Habla Ya es un tutor de IA interactivo que te ayuda a ganar confianza hablando — en cualquier momento y lugar. Personaliza tu aprendizaje y alcanza tus metas más rápido.',
            hablaFeat1: 'Práctica de conversación en tiempo real',
            hablaFeat2: 'Retroalimentación instantánea de pronunciación',
            hablaFeat3: 'Rutas de aprendizaje personalizadas',
            hablaCta: 'Visitar Habla Ya',
            ctaTitle: '¿Listo para empezar a aprender?',
            ctaText: 'Únete a miles de estudiantes desarrollando habilidades reales en idiomas y tecnología.',
            ctaPrimary: 'Explorar Cursos',
            ctaSecondary: 'Contáctanos',
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

        document.documentElement.setAttribute('lang', lang);

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

        navMenu.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.tagName === 'A') close();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
                close();
                hamburger.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= MOBILE_BREAKPOINT && navMenu.classList.contains('is-open')) {
                close();
            }
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

    // ---------- Scroll-spy for active nav ----------
    function setupScrollSpy() {
        const navLinks = document.querySelectorAll('#primary-nav a[href^="#"]');
        const footerLinks = document.querySelectorAll('.footer-nav a[href^="#"]');
        const allLinks = [...navLinks, ...footerLinks];
        if (!navLinks.length) return;

        const sections = [];
        navLinks.forEach((link) => {
            const id = link.getAttribute('href');
            if (id && id !== '#') {
                const section = document.querySelector(id);
                if (section) sections.push({ id, link, section });
            }
        });
        if (!sections.length) return;

        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const scrollY = window.scrollY + 120;
                let activeId = sections[0].id;

                for (let i = sections.length - 1; i >= 0; i--) {
                    if (sections[i].section.offsetTop <= scrollY) {
                        activeId = sections[i].id;
                        break;
                    }
                }

                allLinks.forEach((link) => {
                    const href = link.getAttribute('href');
                    link.classList.toggle('is-active', href === activeId);
                });

                raf = 0;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ---------- Reveal on scroll (IntersectionObserver) ----------
    function setupReveal() {
        const sections = document.querySelectorAll('.section');
        if (!sections.length) return;

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

    // ---------- Card click handling ----------
    function setupCardClicks() {
        const cards = document.querySelectorAll('.card-interactive');
        cards.forEach((card) => {
            const handler = () => {
                const course = card.dataset.course;
                if (course) {
                    window.open('https://wa.me/5533355687?text=Hi%2C%20I%27m%20interested%20in%20the%20' + encodeURIComponent(course) + '%20course', '_blank', 'noopener');
                }
            };
            card.addEventListener('click', handler);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handler();
                }
            });
        });
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
        setupScrollSpy();
        setupReveal();
        setupHeaderScroll();
        setupCardClicks();
        setupFooterYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();

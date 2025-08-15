const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const sections = document.querySelectorAll('section');
const languageToggle = document.getElementById('language-toggle');
const content = {
    en: {
        about: 'About Us',
        aboutText: 'Learn WG is an innovative educational platform connecting you with the best online courses for mastering languages and technology.',
        languageCourses: 'Language Courses',
        languageCoursesText: 'We offer a variety of language courses, including English, French, German, and more, tailored for all skill levels.',
        techCourses: 'Tech Courses',
        techCoursesText: 'Learn high-demand technical skills like web development, data analysis, and cybersecurity with industry experts.',
        languageTutor: 'Language Tutor',
        tutorText: 'Discover our Language Tutor, an interactive tool designed to help you practice languages in real-time using AI.',
    },
    es: {
        about: 'Acerca de',
        aboutText: 'Learn WG te conecta con los mejores cursos en línea para aprender idiomas y tecnología.',
        languageCourses: 'Cursos de Idiomas',
        languageCoursesText: 'Ofrecemos una variedad de cursos como inglés, francés, alemán, y más, diseñados para todos los niveles.',
        techCourses: 'Cursos TI',
        techCoursesText: 'Aprende habilidades técnicas como desarrollo web, análisis de datos, y ciberseguridad con expertos.',
        languageTutor: 'Tutor de Idiomas',
        tutorText: 'Descubre nuestro tutor de idiomas interactivo para practicar con inteligencia artificial.',
    },
};

const toggleMenu = () => {
    const willOpen = navMenu.style.display !== 'flex';
    navMenu.style.display = willOpen ? 'flex' : 'none';
    hamburger.classList.toggle('active', willOpen);
    hamburger.setAttribute('aria-expanded', String(willOpen));
};

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Close nav on link click (mobile)
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.style.display = 'none';
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

const revealSections = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

languageToggle.addEventListener('click', () => {
    const currentLang = languageToggle.textContent === 'Español' ? 'en' : 'es';
    languageToggle.textContent = currentLang === 'en' ? 'Español' : 'English';
    document.getElementById('main-title').textContent = 'Learn WG';
    document.querySelector('#about h2').textContent = content[currentLang].about;
    document.querySelector('#about p').textContent = content[currentLang].aboutText;
    document.querySelector('#language-courses h2').textContent = content[currentLang].languageCourses;
    document.querySelector('#language-courses p').textContent = content[currentLang].languageCoursesText;
    document.querySelector('#tech-courses h2').textContent = content[currentLang].techCourses;
    document.querySelector('#tech-courses p').textContent = content[currentLang].techCoursesText;
    const hablaHeader = document.querySelector('#habla-ya h2');
    const hablaParagraph = document.querySelector('#habla-ya p');
    if (hablaHeader && hablaParagraph) {
        hablaHeader.textContent = currentLang === 'en' ? 'Habla Ya' : 'Habla Ya';
        hablaParagraph.textContent = currentLang === 'en'
            ? 'Discover Habla Ya, an interactive AI tool designed to help you practice languages in real-time. Customize your learning experience and achieve your linguistic goals faster.'
            : 'Descubre Habla Ya, una herramienta de IA interactiva diseñada para ayudarte a practicar idiomas en tiempo real. Personaliza tu aprendizaje y alcanza tus metas lingüísticas más rápido.';
    }
});

window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

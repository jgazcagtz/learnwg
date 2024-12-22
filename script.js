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
        aboutText: 'Learn WG es una plataforma educativa innovadora que te conecta con los mejores cursos en línea para aprender idiomas y tecnología.',
        languageCourses: 'Cursos de Idiomas',
        languageCoursesText: 'Ofrecemos una variedad de cursos como inglés, francés, alemán, y más, diseñados para todos los niveles.',
        techCourses: 'Cursos TI',
        techCoursesText: 'Aprende habilidades técnicas como desarrollo web, análisis de datos, y ciberseguridad con expertos.',
        languageTutor: 'Tutor de Idiomas',
        tutorText: 'Descubre nuestro tutor de idiomas interactivo para practicar con inteligencia artificial.',
    },
};

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
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
    document.querySelector('#language-tutor h2').textContent = content[currentLang].languageTutor;
    document.querySelector('#language-tutor p').textContent = content[currentLang].tutorText;
});

window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

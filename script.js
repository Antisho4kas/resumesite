// Переводы
const translations = {
    ru: {
        'site-title': 'Портфолио',
        'nav-home': 'Главная',
        'nav-links': 'Ссылки',
        'nav-files': 'Файлы',
        'nav-contacts': 'Контакты',
        'hero-title': 'Добро пожаловать в мое портфолио',
        'hero-subtitle': '"Успех — это способность идти от неудачи к неудаче, не теряя энтузиазма"',
        'hero-description': 'Я — профессионал, который стремится к совершенству в каждом проекте. Здесь вы найдете всю необходимую информацию о моих навыках, опыте и достижениях.',
        'btn-download-resume': 'Скачать резюме',
        'btn-contact': 'Связаться со мной',
        'features-title': 'Что вы здесь найдете',
        'feature-1-title': 'Профессиональный опыт',
        'feature-1-desc': 'Подробная информация о моем опыте работы и достижениях',
        'feature-2-title': 'Технические навыки',
        'feature-2-desc': 'Список технологий и инструментов, которыми я владею',
        'feature-3-title': 'Образование',
        'feature-3-desc': 'Информация об образовании и сертификатах',
        'feature-4-title': 'Проекты',
        'feature-4-desc': 'Примеры моих работ и успешных проектов',
        'links-page-title': 'Мои Профили и Ссылки',
        'links-page-subtitle': 'Следите за моей деятельностью в социальных сетях и профессиональных платформах',
        'linkedin-title': 'LinkedIn',
        'linkedin-desc': 'Профессиональная сеть для карьерного роста',
        'github-title': 'GitHub',
        'github-desc': 'Мои проекты и исходный код',
        'telegram-title': 'Telegram',
        'telegram-desc': 'Для быстрой связи и обсуждения проектов',
        'twitter-title': 'Twitter',
        'twitter-desc': 'Мысли и новости из IT-мира',
        'codepen-title': 'CodePen',
        'codepen-desc': 'Эксперименты с кодом и фронтенд',
        'go-to-link': 'Перейти',
        'qr-title': 'QR-код для быстрого доступа',
        'qr-desc': 'Здесь будет QR-код с визитной карточкой',
        'files-page-title': 'Документы и Файлы',
        'files-page-subtitle': 'Здесь вы можете скачать мои резюме, сертификаты и другие важные документы',
        'contacts-page-title': 'Свяжитесь со мной',
        'contacts-page-subtitle': 'Я всегда открыт для новых возможностей и интересных проектов',
        'contact-email': 'Email',
        'contact-phone': 'Телефон',
        'contact-address': 'Адрес',
        'contact-whatsapp': 'WhatsApp',
        'contact-call': 'Позвонить',
        'contact-show-map': 'Показать на карте',
        'contact-whatsapp-action': 'Написать в WhatsApp',
        'footer-contacts-title': 'Контакты',
        'footer-social-title': 'Социальные сети',
        'footer-nav-title': 'Навигация'
    },
    en: {
        'site-title': 'Portfolio',
        'nav-home': 'Home',
        'nav-links': 'Links',
        'nav-files': 'Files',
        'nav-contacts': 'Contacts',
        'hero-title': 'Welcome to My Portfolio',
        'hero-subtitle': '"Success is the ability to go from failure to failure without losing your enthusiasm"',
        'hero-description': 'I am a professional who strives for excellence in every project. Here you will find all the necessary information about my skills, experience and achievements.',
        'btn-download-resume': 'Download Resume',
        'btn-contact': 'Contact Me',
        'features-title': 'What You Will Find Here',
        'feature-1-title': 'Professional Experience',
        'feature-1-desc': 'Detailed information about my work experience and achievements',
        'feature-2-title': 'Technical Skills',
        'feature-2-desc': 'List of technologies and tools I master',
        'feature-3-title': 'Education',
        'feature-3-desc': 'Information about education and certificates',
        'feature-4-title': 'Projects',
        'feature-4-desc': 'Examples of my work and successful projects',
        'links-page-title': 'My Profiles and Links',
        'links-page-subtitle': 'Follow my activities on social networks and professional platforms',
        'linkedin-title': 'LinkedIn',
        'linkedin-desc': 'Professional network for career growth',
        'github-title': 'GitHub',
        'github-desc': 'My projects and source code',
        'telegram-title': 'Telegram',
        'telegram-desc': 'For quick communication and project discussions',
        'twitter-title': 'Twitter',
        'twitter-desc': 'Thoughts and news from the IT world',
        'codepen-title': 'CodePen',
        'codepen-desc': 'Code experiments and frontend',
        'go-to-link': 'Go to',
        'qr-title': 'QR Code for Quick Access',
        'qr-desc': 'QR code with business card will be here',
        'files-page-title': 'Documents and Files',
        'files-page-subtitle': 'Here you can download my resume, certificates and other important documents',
        'contacts-page-title': 'Contact Me',
        'contacts-page-subtitle': 'I am always open to new opportunities and interesting projects',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-address': 'Address',
        'contact-whatsapp': 'WhatsApp',
        'contact-call': 'Call',
        'contact-show-map': 'Show on Map',
        'contact-whatsapp-action': 'Message on WhatsApp',
        'footer-contacts-title': 'Contacts',
        'footer-social-title': 'Social Networks',
        'footer-nav-title': 'Navigation'
    },
    de: {
        'site-title': 'Portfolio',
        'nav-home': 'Startseite',
        'nav-links': 'Links',
        'nav-files': 'Dateien',
        'nav-contacts': 'Kontakt',
        'hero-title': 'Willkommen in Meinem Portfolio',
        'hero-subtitle': '"Erfolg ist die Fähigkeit, von Misserfolg zu Misserfolg zu gehen ohne den Enthusiasmus zu verlieren"',
        'hero-description': 'Ich bin ein Profi, der in jedem Projekt nach Exzellenz strebt. Hier finden Sie alle notwendigen Informationen über meine Fähigkeiten, Erfahrungen und Erfolge.',
        'btn-download-resume': 'Lebenslauf Herunterladen',
        'btn-contact': 'Kontaktieren Sie Mich',
        'features-title': 'Was Sie Hier Finden Werden',
        'feature-1-title': 'Berufserfahrung',
        'feature-1-desc': 'Detaillierte Informationen über meine Arbeitserfahrung und Erfolge',
        'feature-2-title': 'Technische Fähigkeiten',
        'feature-2-desc': 'Liste der Technologien und Werkzeuge, die ich beherrsche',
        'feature-3-title': 'Ausbildung',
        'feature-3-desc': 'Informationen über Ausbildung und Zertifikate',
        'feature-4-title': 'Projekte',
        'feature-4-desc': 'Beispiele meiner Arbeiten und erfolgreichen Projekte',
        'links-page-title': 'Meine Profile und Links',
        'links-page-subtitle': 'Folgen Sie meinen Aktivitäten in sozialen Netzwerken und professionellen Plattformen',
        'linkedin-title': 'LinkedIn',
        'linkedin-desc': 'Professionelles Netzwerk für Karrierewachstum',
        'github-title': 'GitHub',
        'github-desc': 'Meine Projekte und Quellcode',
        'telegram-title': 'Telegram',
        'telegram-desc': 'Für schnelle Kommunikation und Projektdiskussionen',
        'twitter-title': 'Twitter',
        'twitter-desc': 'Gedanken und Nachrichten aus der IT-Welt',
        'codepen-title': 'CodePen',
        'codepen-desc': 'Code-Experimente und Frontend',
        'go-to-link': 'Gehe Zu',
        'qr-title': 'QR-Code für Schnellen Zugriff',
        'qr-desc': 'QR-Code mit Visitenkarte wird hier sein',
        'files-page-title': 'Dokumente und Dateien',
        'files-page-subtitle': 'Hier können Sie meinen Lebenslauf, Zertifikate und andere wichtige Dokumente herunterladen',
        'contacts-page-title': 'Kontaktieren Sie Mich',
        'contacts-page-subtitle': 'Ich bin immer offen für neue Möglichkeiten und interessante Projekte',
        'contact-email': 'E-Mail',
        'contact-phone': 'Telefon',
        'contact-address': 'Adresse',
        'contact-whatsapp': 'WhatsApp',
        'contact-call': 'Anrufen',
        'contact-show-map': 'Auf Karte Zeigen',
        'contact-whatsapp-action': 'Nachricht auf WhatsApp',
        'footer-contacts-title': 'Kontakt',
        'footer-social-title': 'Soziale Netzwerke',
        'footer-nav-title': 'Navigation'
    }
};

// Функция переключения языка
function switchLanguage(lang) {
    // Сохраняем выбранный язык
    localStorage.setItem('selectedLanguage', lang);
    
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем все элементы с data-i18n атрибутом
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновляем атрибут lang у html
    document.documentElement.lang = lang;
}

// Инициализация языкового переключателя
function initLanguageSwitcher() {
    // Загружаем сохраненный язык или используем русский по умолчанию
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Устанавливаем язык при загрузке страницы
    switchLanguage(savedLang);
    
    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
}

// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаем за элементами с анимацией
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .link-card, .file-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Обработка формы контактов
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Получаем данные формы
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Здесь можно добавить логику отправки формы
        console.log('Данные формы:', data);
        
        // Показываем сообщение об успешной отправке
        showNotification('Сообщение отправлено! Я свяжусь с вами в ближайшее время.', 'success');
        
        // Очищаем форму
        contactForm.reset();
    });
}

// Функция показа уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Стили для уведомления
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
        color: white;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Скрываем через 3 секунды
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Обработка кнопок скачивания
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const fileName = this.closest('.file-card').querySelector('h3').textContent;
        showNotification(`Начинается скачивание файла: ${fileName}`, 'success');
    });
});

// Активная ссылка в навигации
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher(); // Инициализация языкового переключателя
    updateActiveNavLink();
    
    // Добавляем плавное появление элементов
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Ленивая загрузка изображений (если будут добавлены)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Темная тема (опционально)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

// Валидация формы
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'Это поле обязательно для заполнения');
            isValid = false;
        } else {
            clearError(input);
        }
        
        // Валидация email
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                showError(input, 'Введите корректный email адрес');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function showError(input, message) {
    clearError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    
    input.style.borderColor = '#ef4444';
    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    input.style.borderColor = '';
    const errorMessage = input.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Добавляем обработчики валидации
document.querySelectorAll('.form').forEach(form => {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                showError(input, 'Это поле обязательно для заполнения');
            } else if (input.value) {
                clearError(input);
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value) {
                clearError(input);
            }
        });
    });
});

// Счетчик символов для текстовых полей
document.querySelectorAll('textarea').forEach(textarea => {
    const maxLength = textarea.getAttribute('maxlength');
    if (maxLength) {
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.875rem;
            color: var(--text-light);
            margin-top: 0.25rem;
        `;
        counter.textContent = `0 / ${maxLength}`;
        textarea.parentNode.appendChild(counter);
        
        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            counter.textContent = `${currentLength} / ${maxLength}`;
            
            if (currentLength > maxLength * 0.9) {
                counter.style.color = '#ef4444';
            } else {
                counter.style.color = 'var(--text-light)';
            }
        });
    }
});

console.log('Сайт-резюме успешно загружен!');

// Function to handle language change
function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    document.documentElement.lang = lang;
    setLanguageCookie(lang);

    // Change text based on language
    updateText(lang);
}

// Function to set language cookie
function setLanguageCookie(language) {
    document.cookie = `language=${language}; path=/; max-age=31536000`; // 1 year
}

// Function to update text content based on language
function updateText(language) {
    const translations = {
        en: {
            "brand-name": "Turkish Bath",
            "hero-title": "Welcome to the Turkish Bath",
            "hero-description": "Experience ultimate relaxation in our luxurious and traditional setting.",
            "services-title": "Our Services",
            "contact-title": "Contact Us",
            "contact-description": "Visit us at: 123 Turkish Bath Street, Istanbul, Turkey",
            "footer-text": "&copy; 2024 Turkish Bath. All Rights Reserved."
        },
        ar: {
            "brand-name": "حمام تركي",
            "hero-title": "مرحبًا بكم في الحمام التركي",
            "hero-description": "اختبر الاسترخاء التام في بيئتنا الفاخرة والتقليدية.",
            "services-title": "خدماتنا",
            "contact-title": "اتصل بنا",
            "contact-description": "زورونا في: شارع الحمام التركي 123، إسطنبول، تركيا",
            "footer-text": "&copy; 2024 الحمام التركي. جميع الحقوق محفوظة."
        }
    };

    const trans = translations[language];
    for (const key in trans) {
        document.getElementById(key).innerText = trans[key];
    }
}

// On page load, set the language based on the cookie or default to English
window.onload = function() {
    const langCookie = document.cookie.match(/language=([^;]+)/);
    const language = langCookie ? langCookie[1] : 'en';
    document.documentElement.lang = language;
    document.getElementById('language-select').value = language;

    updateText(language);
};

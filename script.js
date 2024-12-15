// Set language based on selection and store in a cooki
function setLanguage(language) {
    document.cookie = language=${language};path=/;max-age=31536000; // Set cookie for 1 year
    loadLanguage(language);
}

// Load language from cookie (or default to English)
function loadLanguage(language) {
    if (!language) {
        const cookieLanguage = document.cookie.match(/language=([^;]+)/);
        language = cookieLanguage ? cookieLanguage[1] : 'en';
    }

    // Translate the page based on the selected language
    const translations = {
        en: {
            "brand-name": "Turkish Bath",
            "hero-title": "Welcome to the Turkish Bath",
            "hero-description": "Experience ultimate relaxation in our luxurious and traditional setting.",
            "services-title": "Our Services",
            "service1-title": "Traditional Hammam",
            "service1-description": "A deep cleansing treatment for your skin.",
            "service2-title": "Massage Therapy",
            "service2-description": "Relax with a full-body massage.",
            "service3-title": "Facial Treatment",
            "service3-description": "Rejuvenate your face with our hydrating treatments.",
            "service4-title": "Aromatherapy",
            "service4-description": "Revitalize your senses with essential oils.",
            "service5-title": "Scrub & Exfoliation",
            "service5-description": "Exfoliate and remove dead skin cells.",
            "service6-title": "Foot Reflexology",
            "service6-description": "Relax your feet with a soothing massage.",
            "contact-title": "Contact Us",
            "contact-description": "Visit us at: 123 Turkish Bath Street, Istanbul, Turkey",
            "contact-phone": "Call: +90 123 456 7890",
            "footer-text": "&copy; 2024 Turkish Bath. All Rights Reserved."
        },
        ar: {
            "brand-name": "حمام تركي",
            "hero-title": "مرحبًا بكم في الحمام التركي",
            "hero-description": "اختبر الاسترخاء التام في بيئتنا الفاخرة والتقليدية.",
            "services-title": "خدماتنا",
            "service1-title": "حمام تقليدي",
            "service1-description": "علاج عميق لتنظيف بشرتك.",
            "service2-title": "علاج التدليك",
            "service2-description": "استرخِ مع تدليك كامل للجسم.",
            "service3-title": "علاج الوجه",
            "service3-description": "تنشيط وجهك مع علاجات مرطبة.",
            "service4-title": "العلاج بالعطور",
            "service4-description": "تنشيط حواسك باستخدام الزيوت الأساسية.",
            "service5-title": "تقشير البشرة",
            "service5-description": "إزالة خلايا الجلد الميتة وتنشيط البشرة.",
            "service6-title": "علاج القدمين بالضغط",
            "service6-description": "استرخِ مع تدليك مريح للقدمين.",
            "contact-title": "اتصل بنا",
            "contact-description": "زورونا في: شارع الحمام التركي 123، إسطنبول، تركيا",
            "contact-phone": "اتصل: +90 123 456 7890",
            "footer-text": "&copy; 2024 الحمام التركي. جميع الحقوق محفوظة."
        }
    };

    const trans = translations[language] || translations['en'];
    
    // Apply translations to all elements
    for (const key in trans) {
        document.getElementById(key).innerHTML = trans[key];
    }
}

// Load language from cookie on page load
window.onload = function() {
    const language = document.cookie.match(/language=([^;]+)/) ? document.cookie.match(/language=([^;]+)/)[1] : 'en';
    loadLanguage(language);
}

const translations = {
    'en': {
        'home': 'Home',
        'contact': 'Contact',
        'welcome': 'Welcome to Saray Osman',
        'experience': 'Experience Authentic Turkish Bath in Jordan',
        'book_now': 'Book Now',
        'services': 'Our Services',
        'traditional_bath': 'Traditional Bath',
        'massage_therapy': 'Massage Therapy',
        'skin_care': 'Skin Care',
        'hammam': 'Turkish Bath Experience',
        'prices': 'Prices',
        'facilities': 'Our Facilities'
    },
    'ar': {
        'home': 'الرئيسية',
        'contact': 'اتصل بنا',
        'welcome': 'مرحبًا بكم في سراي عثمان',
        'experience': 'استمتع بتجربة الحمام التركي الأصيلة في الأردن',
        'book_now': 'احجز الآن',
        'services': 'خدماتنا',
        'traditional_bath': 'الحمام التقليدي',
        'massage_therapy': 'العلاج بالتدليك',
        'skin_care': 'العناية بالبشرة',
        'hammam': 'تجربة الحمام التركي',
        'prices': 'الأسعار',
        'facilities': 'مرافقنا'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

const translations = {
    en: {
        'hero-title': 'Welcome to Saray Osman Turkish Bath',
        'hero-description': 'Experience authentic relaxation and rejuvenation in Amman.',
        'services-title': 'Our Services',
        'service1-title': 'Traditional Hammam',
        'service1-description': 'Enjoy a full traditional Turkish bath experience.',
        'service1-price': 'Price: 20 JOD',
        'service2-title': 'Aromatherapy Massage',
        'service2-description': 'Relax with our signature aromatherapy treatments.',
        'service2-price': 'Price: 25 JOD',
        'service3-title': 'Steam Room',
        'service3-description': 'Detoxify and refresh in our luxurious steam rooms.',
        'service3-price': 'Price: 15 JOD',
        'map-title': 'Find Us',
        'contact-title': 'Contact Info',
        'address': 'Address: Amman, Jordan',
        'phone': 'Phone: +1234567890',
        'email': 'Email: info@sarayosman.com',
        'follow-us-title': 'Follow Us'
    },
    ar: {
        'hero-title': 'مرحباً بكم في حمام سراي عثمان',
        'hero-description': 'تجربة استرخاء وتجديد حقيقية في عمان.',
        'services-title': 'خدماتنا',
        'service1-title': 'حمام تقليدي',
        'service1-description': 'استمتع بتجربة حمام تركي تقليدي كامل.',
        'service1-price': 'السعر: 20 دينار أردني',
        'service2-title': 'تدليك العلاج العطري',
        'service2-description': 'استرخِ مع علاجات العلاج العطري المميزة لدينا.',
        'service2-price': 'السعر: 25 دينار أردني',
        'service3-title': 'غرفة البخار',
        'service3-description': 'دِتُوكسي وتجدّد في غرف البخار الفاخرة لدينا.',
        'service3-price': 'السعر: 15 دينار أردني',
        'map-title': 'موقعنا',
        'contact-title': 'معلومات الاتصال',
        'address': 'العنوان: عمان، الأردن',
        'phone': 'الهاتف: +1234567890',
        'email': 'البريد الإلكتروني: info@sarayosman.com',
        'follow-us-title': 'تابعنا'
    }
};

document.getElementById("language").addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    const langData = translations[selectedLang];

    Object.keys(langData).forEach(key => {
        document.getElementById(key).textContent = langData[key];
    });
});

// Language Toggle Function
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';

    // Toggle 'lang' and 'dir' attributes
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

    // Update all text content for the new language
    const elementsToUpdate = document.querySelectorAll('[data-en], [data-ar]');
    elementsToUpdate.forEach(element => {
        element.textContent = element.getAttribute(`data-${newLang}`);
    });
}

// Smooth Scrolling Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

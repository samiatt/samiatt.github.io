function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';

    // Toggle the 'lang' attribute on the HTML element
    document.documentElement.lang = newLang;

    // Update direction for RTL
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

    // Update all text content based on the selected language
    const elementsToUpdate = document.querySelectorAll('[data-en], [data-ar]');
    elementsToUpdate.forEach(element => {
        element.textContent = element.getAttribute(`data-${newLang}`);
    });
}

// Cookie handling for language preference
function setLanguage(lang) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`; // 1 year
    location.reload();
}

// Check and apply the saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const lang = getCookie('lang');
    if (lang) {
        // You could set the language here based on the value in `lang` cookie
        // E.g., update text on the page to match selected language
        console.log(`Language selected: ${lang}`);
    }
});

// Get the value of a cookie by name
function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Toggle banner visibility based on a condition
function toggleBanner() {
    const banner = document.getElementById('offers');
    banner.style.display = banner.style.display === 'none' ? 'block' : 'none';
}

// Example: show banner after 5 seconds
setTimeout(toggleBanner, 5000);

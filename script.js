// Language selector - Save selected language to a cookie
function setLanguage(lang) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`; // 1 year
    location.reload();
}

// Cookie handling for language preference
document.addEventListener('DOMContentLoaded', () => {
    const lang = getCookie('lang');
    if (lang) {
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

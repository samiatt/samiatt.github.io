// Set language based on selection and store in a cookie
function setLanguage(language) {
    document.cookie = "language=" + language + ";path=/;max-age=31536000"; // Set cookie for 1 year
    loadLanguage();  // Reload the page with the correct language URL
}

// Load language from cookie (or default to Arabic if no cookie is found)
function loadLanguage() {
    // Get the language from the cookie
    const cookieLanguage = document.cookie.match(/language=([^;]+)/);
    let language = cookieLanguage ? cookieLanguage[1] : null;

    // If no language cookie is found, default to Arabic
    if (!language) {
        language = "ar";  // Default to Arabic
    }

    // Get the current URL to determine where to redirect
    const currentUrl = window.location.href;
    const baseUrl = "https://sarayosman.com";
    const englishUrl = baseUrl + "/en";

    // Check and redirect based on the language
    if (language === "ar") {
        if (!currentUrl.startsWith(baseUrl)) {
            // Redirect to Arabic if the user is not already on the Arabic site
            window.location.href = baseUrl;
        }
    } else if (language === "en") {
        if (!currentUrl.startsWith(englishUrl)) {
            // Redirect to English if the user is not already on the English site
            window.location.href = englishUrl;
        }
    }
}

// Check and load the language on page load
window.onload = function() {
    loadLanguage();
};

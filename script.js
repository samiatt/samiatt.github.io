// Set language based on selection and store in a cookie
function setLanguage(language) {
    document.cookie = "language=" + language + ";path=/;max-age=31536000"; // Set cookie for 1 year
    loadLanguage(language);  // Load the language and redirect to the correct URL
}

// Load language from cookie (or default to Arabic if no cookie is found)
function loadLanguage() {
    // Get the language from the cookie
    const cookieLanguage = document.cookie.match(/language=([^;]+)/);
    let language = cookieLanguage ? cookieLanguage[1] : null;

    // If no language cookie is found, determine the language from the URL
    if (!language) {
        if (window.location.pathname.startsWith("/en")) {
            language = "en";
        } else {
            language = "ar";  // Default to Arabic
        }
    }

    // Redirect based on the selected language and avoid looping if already at the correct URL
    if (language === "ar" && !window.location.pathname.startsWith("/en")) {
        window.location.href = "https://sarayosman.com";  // For Arabic, load the base URL
    } else if (language === "en" && !window.location.pathname.startsWith("/en")) {
        window.location.href = "https://sarayosman.com/en";  // For English, load the English subdirectory
    }
}

// Check and load the language on page load
window.onload = function() {
    loadLanguage();
};

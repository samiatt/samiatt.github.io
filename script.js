// Set language based on selection and store in a cookie
function setLanguage(language) {
    document.cookie = "language=" + language + ";path=/;max-age=31536000"; // Set cookie for 1 year
    loadLanguage(language);  // Load the language and redirect to the correct URL
}

// Load language from cookie (or default to Arabic)
function loadLanguage(language) {
    if (!language) {
        const cookieLanguage = document.cookie.match(/language=([^;]+)/);
        language = cookieLanguage ? cookieLanguage[1] : 'ar';  // Default to Arabic if no cookie found
    }

    // Redirect based on the selected language
    if (language === 'ar') {
        window.location.href = "https://sarayosman.com";  // For Arabic, load the base URL
    } else {
        window.location.href = "https://sarayosman.com/en";  // For English, load the English subdirectory
    }
}

// Load language from cookie on page load
window.onload = function() {
    const cookieLanguage = document.cookie.match(/language=([^;]+)/);
    const language = cookieLanguage ? cookieLanguage[1] : 'ar';  // Default to Arabic if no cookie found
    loadLanguage(language);  // Redirect to the appropriate URL based on the stored language
};

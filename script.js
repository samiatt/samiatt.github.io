// Function to set the language based on the user's selection
function changeLanguage() {
    var lang = document.getElementById("language-select").value;
    setLanguage(lang);
}

// Function to set the language and update text content
function setLanguage(lang) {
    // Update the language selection in the cookie
    document.cookie = "language=" + lang + "; path=/; max-age=31536000"; // 1 year expiration
    
    // Update the page content based on selected language
    if (lang === "en") {
        document.getElementById("hero-title").textContent = "Welcome to the Turkish Bath";
        document.getElementById("hero-description").textContent = "Experience ultimate relaxation in our luxurious and traditional setting.";
        document.getElementById("services-title").textContent = "Our Services";
        document.getElementById("contact-title").textContent = "Contact Us";
        document.getElementById("footer-text").textContent = "© 2024 Turkish Bath. All Rights Reserved.";
    } else if (lang === "ar") {
        document.getElementById("hero-title").textContent = "حمام تركي";
        document.getElementById("hero-description").textContent = "اختبر الاسترخاء التام في أجوائنا الفاخرة والتقليدية.";
        document.getElementById("services-title").textContent = "خدماتنا";
        document.getElementById("contact-title").textContent = "اتصل بنا";
        document.getElementById("footer-text").textContent = "© 2024 الحمام التركي. جميع الحقوق محفوظة.";
    }
}

// Check if a language preference is stored in cookies
function checkLanguagePreference() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("language=")) {
            var lang = cookie.split('=')[1];
            setLanguage(lang);
            document.getElementById("language-select").value = lang; // Update the selector
            break;
        }
    }
}

// Run the language check on page load
window.onload = function() {
    checkLanguagePreference();
};

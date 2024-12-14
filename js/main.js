new Vue({
    el: '#app',
    data: {
        lang: 'en',
        formData: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        content: {
            en: {
                nav: {
                    home: 'Home',
                    contact: 'Contact'
                },
                hero: {
                    title: 'Welcome to Saray Osman',
                    subtitle: 'Experience Authentic Turkish Bath',
                    cta: 'Book Now'
                },
                services: {
                    title: 'Our Services',
                    items: [
                        {
                            id: 1,
                            title: 'Traditional Bath',
                            description: 'Experience the authentic Turkish bath ritual',
                            price: 'JOD 35',
                            image: 'img/traditional-bath.jpg'
                        },
                        // Add more services...
                    ]
                },
                contact: {
                    title: 'Contact Us',
                    description: 'Get in touch with us for bookings and inquiries',
                    address: 'Amman, Jordan'
                },
                form: {
                    name: 'Full Name',
                    email: 'Email Address',
                    phone: 'Phone Number',
                    message: 'Your Message',
                    submit: 'Send Message'
                },
                // Add Arabic translations...
            },
            ar: {
                // Arabic content...
            }
        }
    },
    methods: {
        changeLang(lang) {
            this.lang = lang;
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        },
        submitForm() {
            // Add form submission logic here
            console.log('Form submitted:', this.formData);
            // Reset form
            this.formData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
            alert('Thank you for your message. We will contact you soon!');
        }
    },
    computed: {
        isHome() {
            return window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
        },
        isContact() {
            return window.location.pathname.endsWith('contact.html');
        }
    },
    mounted() {
        // Set initial language based on browser preference
        const userLang = navigator.language || navigator.userLanguage;
        this.changeLang(userLang.startsWith('ar') ? 'ar' : 'en');
    }
});

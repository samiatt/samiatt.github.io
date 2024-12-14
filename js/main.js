new Vue({
    el: '#app',
    data: {
        lang: 'en',
        content: {
            en: {
                title: 'Welcome to Saray Osman',
                services: [
                    {id: 1, title: 'Traditional Bath', description: 'Experience the authentic Turkish bath ritual.'},
                    {id: 2, title: 'Massage Therapy', description: 'Relax with our expert massage treatments.'},
                    {id: 3, title: 'Skin Care', description: 'Rejuvenate your skin with our special treatments.'}
                ],
                rights: 'All rights reserved.'
            },
            ar: {
                title: 'مرحبًا بكم في سراي عثمان',
                services: [
                    {id: 1, title: 'الحمام التقليدي', description: 'استمتع بتجربة الحمام التركي الأصيلة.'},
                    {id: 2, title: 'العلاج بالتدليك', description: 'استرخِ مع علاجات التدليك من خبرائنا.'},
                    {id: 3, title: 'العناية بالبشرة', description: 'جدد بشرتك مع علاجاتنا الخاصة.'}
                ],
                rights: 'جميع الحقوق محفوظة.'
            }
        }
    },
    methods: {
        changeLang(lang) {
            this.lang = lang;
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        }
    },
    computed: {
        content() {
            return this.content[this.lang];
        }
    }
});

// --- Funcționalitate pentru Comutatorul de Temă (Light/Dark Mode) ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verifică tema salvată în localStorage sau preferința sistemului
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    // Obține tema curentă din atributul data-theme
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // Schimbă tema
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Salvează noua temă în localStorage
    localStorage.setItem('theme', newTheme);
});


// --- Funcționalitate pentru Animații la Scroll ---
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Dacă elementul este vizibil în viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Oprește observarea elementului după ce animația a rulat o dată
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Animația pornește când 10% din element este vizibil
});

// Pornește observarea pentru fiecare element animat
animatedElements.forEach(element => {
    observer.observe(element);
});
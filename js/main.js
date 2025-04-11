// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000, // Slower transition speed
    effect: "fade", // Fade effect for smoother transitions
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function() {
            // Reset and trigger content animations
            document.querySelectorAll('.hero-content').forEach(content => {
                content.style.opacity = '0';
                content.style.transform = 'translateX(-100px)';
            });
            
            setTimeout(() => {
                const activeSlide = this.slides[this.activeIndex];
                const content = activeSlide.querySelector('.hero-content');
                if (content) {
                    content.style.opacity = '1';
                    content.style.transform = 'translateX(0)';
                }
            }, 100);
        }
    }
});

// Initialize Testimonials Swiper
const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    speed: 800,
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${savedTheme}-theme`);
});

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
    loop: true,
    autoplay: {
        delay: 5000, // 5 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: "slide", // Changed from fade to slide for better transition
    speed: 1000, // Transition speed in milliseconds
    navigation: {
        nextEl: ".testimonials-slider .swiper-button-next",
        prevEl: ".testimonials-slider .swiper-button-prev",
    }
});

// Add functionality to "View All Reviews" button
document.querySelector(".view-all-reviews-btn").addEventListener("click", () => {
    window.location.href = "#contact"; // Redirect to the contact section or another page
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.querySelector('.company-logo');
const darkLogoPath = logo.getAttribute('data-logo-dark');
const lightLogoPath = logo.src;

function updateTheme(theme) {
    if (theme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        logo.src = darkLogoPath;
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        logo.src = lightLogoPath;
    }
}

themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
    updateTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateTheme(savedTheme);
});
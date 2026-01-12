// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 217, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 217, 255, 0.1)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .project-card, .skill-category, .feature-item').forEach(el => {
    observer.observe(el);
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
        }, index * 100);
    });
}

// Initialize skill bars animation when skills section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const originalText = counter.textContent.trim();
        
        // Skip animation for non-numeric values like "2nd Year"
        if (!/^\d/.test(originalText)) {
            return;
        }
        
        const target = parseInt(originalText.replace(/\D/g, ''));
        
        // Skip if target is NaN
        if (isNaN(target)) {
            return;
        }
        
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (originalText.includes('+')) {
                counter.textContent = Math.floor(current) + '+';
            } else if (originalText.includes('%')) {
                counter.textContent = Math.floor(current) + '%';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Initialize counter animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Legacy theme toggle (replaced by enhanced version)
// This function is kept for reference but not used

// Theme toggle is now handled by the enhanced version below

// Gate + lightning entry animation
function createPreloader() {
    const overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML = `
        <div class="gate gate-left"></div>
        <div class="gate gate-right"></div>
        <div class="gate-glow"></div>
        <div class="lightning lightning-1"></div>
        <div class="lightning lightning-2"></div>
        <div class="lightning lightning-3"></div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .gate-overlay {
            position: fixed;
            inset: 0;
            z-index: 9999;
            overflow: hidden;
            background: radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.05), rgba(10, 14, 39, 0.95));
            transition: opacity 0.5s ease;
        }
        .gate-overlay.hide { opacity: 0; }
        .gate {
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(135deg, #0f162f 0%, #1b2947 100%);
            box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
        }
        .gate-left { left: 0; animation: gate-left-open 1.6s ease forwards 0.4s; }
        .gate-right { right: 0; animation: gate-right-open 1.6s ease forwards 0.4s; }
        @keyframes gate-left-open { to { transform: translateX(-105%); } }
        @keyframes gate-right-open { to { transform: translateX(105%); } }
        .gate-glow {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.18), transparent 45%);
            filter: blur(28px);
            pointer-events: none;
            opacity: 0.9;
            animation: glow-fade 1.8s ease forwards;
        }
        @keyframes glow-fade { 0% { opacity: 0; } 40% { opacity: 1; } 100% { opacity: 0; } }
        .lightning {
            position: absolute;
            top: -10%;
            width: 2px;
            height: 120%;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0, 217, 255, 0.9), rgba(255,255,255,0));
            filter: blur(1px);
            opacity: 0;
            pointer-events: none;
        }
        .lightning-1 { left: 48%; animation: lightning 1.3s ease-in-out forwards 0.35s; }
        .lightning-2 { left: 52%; animation: lightning 1.3s ease-in-out forwards 0.5s; }
        .lightning-3 { left: 50%; animation: lightning 1.3s ease-in-out forwards 0.7s; }
        @keyframes lightning {
            0%, 100% { opacity: 0; transform: translateY(-10%) scaleY(1.2); filter: blur(6px); }
            12% { opacity: 1; filter: blur(1px); }
            20% { opacity: 0.4; }
            30% { opacity: 1; transform: translateY(0) scaleY(1); }
            45% { opacity: 0; }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(overlay);

    window.addEventListener('load', () => {
        const totalDuration = 2000;
        setTimeout(() => {
            overlay.classList.add('hide');
            setTimeout(() => overlay.remove(), 500);
        }, totalDuration);
    });
}

// Initialize gate animation
createPreloader();

// Space particle effect removed for cleaner background

// Profile image update functionality removed
// The profile image is now static and non-clickable

// Enhanced contact details with click-to-copy functionality
function initContactInteractions() {
    const emailElement = document.querySelector('.contact-details p');
    const phoneElement = document.querySelectorAll('.contact-details p')[1];
    
    if (emailElement && phoneElement) {
        // Email click to copy
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy email';
        emailElement.addEventListener('click', () => {
            navigator.clipboard.writeText('gajendrasingh989895@gmail.com').then(() => {
                showToast('Email copied to clipboard!');
            });
        });
        
        // Phone click to copy
        phoneElement.style.cursor = 'pointer';
        phoneElement.title = 'Click to copy phone number';
        phoneElement.addEventListener('click', () => {
            navigator.clipboard.writeText('+91 7999489113').then(() => {
                showToast('Phone number copied to clipboard!');
            });
        });
    }
}

// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #00d9ff 0%, #7b2cbf 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(0, 217, 255, 0.4);
        animation: slideUp 0.3s ease-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(toast);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// Initialize contact interactions
initContactInteractions();

// Back to top button
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00d9ff 0%, #7b2cbf 100%);
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(100px);
        box-shadow: 0 4px 15px rgba(0, 217, 255, 0.4);
    `;
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(0) scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0) scale(1)';
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(100px)';
        }
    });
    
    document.body.appendChild(backToTop);
}

// Initialize back to top button
createBackToTop();

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Testimonials Slider
function initTestimonialsSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
        
        navDots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }
    
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }, 5000);
}

// Initialize testimonials slider
initTestimonialsSlider();

// Enhanced Theme Toggle
function createEnhancedThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
            showToast('Dark mode enabled');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
            showToast('Light mode enabled');
        }
    });
    
    document.body.appendChild(themeToggle);
}

// Replace the old theme toggle with enhanced version
createEnhancedThemeToggle();

// Particle Background Effect
function createParticleBackground() {
    const hero = document.querySelector('.hero');
    const achievements = document.querySelector('.achievements');
    
    function createParticles(container) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
        
        container.appendChild(particlesContainer);
    }
    
    if (hero) createParticles(hero);
    if (achievements) createParticles(achievements);
}

// Initialize particle background
createParticleBackground();

// Enhanced Scroll Animations
function initEnhancedAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('achievement-card')) {
                    element.classList.add('zoom-in');
                } else if (element.classList.contains('testimonial-card')) {
                    element.classList.add('fade-in-up');
                } else {
                    element.classList.add('fade-in-up');
                }
                
                animationObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe new elements
    document.querySelectorAll('.achievement-card, .testimonial-card').forEach(el => {
        animationObserver.observe(el);
    });
}

// Initialize enhanced animations
initEnhancedAnimations();

// Achievement Cards Stagger Animation
function initAchievementAnimations() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                achievementCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                        card.classList.add('zoom-in');
                    }, index * 200);
                });
                achievementObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
        achievementObserver.observe(achievementsSection);
    }
}

// Initialize achievement animations
initAchievementAnimations();

// Enhanced Navigation with Active States
function enhanceNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
}

// Initialize enhanced navigation
enhanceNavigation();

// Smooth Page Transitions
function initPageTransitions() {
    // Add fade-in effect to page load
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// Initialize page transitions
initPageTransitions();

// Console message for developers
console.log('%c👋 Hello Developer!', 'color: #4f46e5; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out the enhanced portfolio! This features modern animations, dark mode, and interactive elements.', 'color: #666; font-size: 14px;');
console.log('%cBuilt with vanilla HTML, CSS, and JavaScript. Feel free to reach out if you have any questions!', 'color: #666; font-size: 14px;');

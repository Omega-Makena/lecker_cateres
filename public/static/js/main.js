document.addEventListener("DOMContentLoaded", () => {
    // Landing screen animation logic
    const landingScreen = document.getElementById('landing-screen');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('.glass-header');

    // Display landing screen for 3.5 seconds, then fade out and show main content
    if (landingScreen) {
        setTimeout(() => {
            landingScreen.style.opacity = '0';

            setTimeout(() => {
                landingScreen.style.visibility = 'hidden';
                if (mainContent) {
                    mainContent.classList.remove('hidden');

                    // Allow CSS transitions to take effect
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                        initScrollAnimations();
                    }, 50);
                }
            }, 1000);
        }, 3500);
    } else {
        if (mainContent) {
            initScrollAnimations();
        }
    }

    // Header scroll shrinking effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            header.style.padding = '1.2rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.75)';
        }
    });

    // Intersection Observer for scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target); // Stop observing once it has appeared
                }
            });
        }, observerOptions);

        // Select all elements with fade-in classes
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Hamburger menu logic
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-menu .btn-primary');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            // Prevent scrolling on body when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});

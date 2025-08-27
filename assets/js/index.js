// MOBILE RESPONSIVE: Mobile navigation toggle function
function toggleMobileMenu() {
    console.log('Toggle mobile menu called'); // Debug log
    try {
        const leftNav = document.getElementById('leftNav');
        const rightNav = document.getElementById('rightNav');
        
        console.log('Found elements:', { leftNav: !!leftNav, rightNav: !!rightNav }); // Debug log
        
        if (leftNav && rightNav) {
            const wasActive = leftNav.classList.contains('active');
            leftNav.classList.toggle('active');
            rightNav.classList.toggle('active');
            
            console.log('Menu toggled from', wasActive, 'to', leftNav.classList.contains('active')); // Debug log
            
            // Force a repaint to ensure CSS changes are applied
            leftNav.offsetHeight;
            rightNav.offsetHeight;
        } else {
            console.error('Navigation elements not found:', { leftNav, rightNav }); // Debug log
        }
    } catch (error) {
        console.error('Error in toggleMobileMenu:', error);
    }
}

// MOBILE RESPONSIVE: Initialize mobile menu functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu'); // Debug log
    
    try {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        console.log('Mobile toggle button found:', !!mobileToggle); // Debug log
        
        if (mobileToggle) {
            // Remove any existing onclick to avoid conflicts
            mobileToggle.removeAttribute('onclick');
            
            // Add click event listener
            mobileToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Mobile toggle clicked'); // Debug log
                toggleMobileMenu();
            });
            
            console.log('Mobile toggle event listener added'); // Debug log
        } else {
            console.error('Mobile toggle button not found!');
        }
        
        // MOBILE RESPONSIVE: Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const leftNav = document.getElementById('leftNav');
            const rightNav = document.getElementById('rightNav');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            
            if (leftNav && rightNav && mobileToggle) {
                // Close menu if clicking outside header and menu is open
                if (!event.target.closest('header') && 
                    (leftNav.classList.contains('active') || rightNav.classList.contains('active'))) {
                    leftNav.classList.remove('active');
                    rightNav.classList.remove('active');
                    console.log('Mobile menu closed by outside click'); // Debug log
                }
            }
        });
        
        // MOBILE RESPONSIVE: Handle window resize
        window.addEventListener('resize', function() {
            const leftNav = document.getElementById('leftNav');
            const rightNav = document.getElementById('rightNav');
            
            if (window.innerWidth > 768 && leftNav && rightNav) {
                leftNav.classList.remove('active');
                rightNav.classList.remove('active');
                console.log('Mobile menu closed due to resize'); // Debug log
            }
        });
        
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
});

const mobileMenu = document.querySelector(".hidden>img");
const mobileNav = document.querySelector(".hidden>dropdown__nav");

function initCarousel(id) {
    const carousel = document.getElementById(id);
    if (!carousel) return; // MOBILE RESPONSIVE: Safety check for carousel existence
    
    const track = carousel.querySelector(".carousel-track");
    const items = track.querySelectorAll("img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let index = 0;

    function updateSlide() {
        const width = items[0].clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % items.length;
            updateSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            updateSlide();
        });
    }

    // MOBILE RESPONSIVE: Pause autoplay on mobile to save battery
    if (window.innerWidth > 768) {
        setInterval(() => {
            index = (index + 1) % items.length;
            updateSlide();
        }, 3000);
    }
}

// Init all 3 carousels with safety checks
if (document.getElementById("carousel-festivals")) {
    initCarousel("carousel-festivals");
}
if (document.getElementById("carousel-corporates")) {
    initCarousel("carousel-corporates");
}
if (document.getElementById("carousel-radio")) {
    initCarousel("carousel-radio");
}

// Legacy mobile menu functionality (if exists)
if (mobileMenu && mobileNav) {
    mobileMenu.addEventListener("click", () => {
        mobileNav.style.display = "flex";
    });
}
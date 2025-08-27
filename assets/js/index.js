// MOBILE RESPONSIVE: Mobile navigation toggle function
function toggleMobileMenu() {
    const leftNav = document.getElementById('leftNav');
    const rightNav = document.getElementById('rightNav');
    
    if (leftNav && rightNav) {
        leftNav.classList.toggle('active');
        rightNav.classList.toggle('active');
    }
}

// MOBILE RESPONSIVE: Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const leftNav = document.getElementById('leftNav');
    const rightNav = document.getElementById('rightNav');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (leftNav && rightNav && mobileToggle) {
        if (!event.target.closest('header')) {
            leftNav.classList.remove('active');
            rightNav.classList.remove('active');
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
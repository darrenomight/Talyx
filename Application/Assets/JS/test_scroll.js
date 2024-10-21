// Navbar hide on scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const duration = 1000;
        let start = null;

        function ease(t, b, c, d) {
            t /= d;
            t--;
            return -c * (t * t * t * t - 1) + b;
        }

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollPosition = ease(progress, startPosition, targetPosition, duration);
            window.scrollTo(0, scrollPosition);
            if (progress < duration) window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
    });
});

document.getElementById('returnTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


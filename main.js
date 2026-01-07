// Smooth page load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => { document.body.style.transition = "0.6s";
        document.body.style.opacity = "1" }, 50);
});

// Mobile menu toggle
function toggleMenu() {
    document.querySelector("nav").classList.toggle("open");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Card animation
const cards = document.querySelectorAll(".glass,.card,.price-card,.service-card");
window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.transform = "translateY(0)";
            card.style.opacity = "1";
        }
    });
});
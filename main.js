// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    document.querySelector(".webnexa-header") ?
        .classList.toggle("scrolled", window.scrollY > 30);
});

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.onclick = e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    };
});

// Reveal animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
});
document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// Floating WhatsApp pulse
setInterval(() => {
    document.querySelector(".wa-float") ? .classList.toggle("pulse");
}, 1500);
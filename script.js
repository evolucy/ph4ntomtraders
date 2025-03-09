document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.headline', { delay: 200, origin: 'top', distance: '50px' });
    ScrollReveal().reveal('.subtext', { delay: 400, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.join-btn', { delay: 600, origin: 'bottom', distance: '50px' });

    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
});

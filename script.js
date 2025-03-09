// GSAP Animation for hero section
gsap.from(".headline", { opacity: 0, y: -50, duration: 1 });
gsap.from(".subtext", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from(".join-btn", { opacity: 0, scale: 0.5, duration: 0.5, delay: 0.6 });

// ScrollReveal Animation
ScrollReveal().reveal(".hero", { delay: 200, origin: "bottom", distance: "50px", duration: 800 });

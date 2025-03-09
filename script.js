// GSAP Animations
gsap.from(".navbar", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// ScrollReveal Animations
ScrollReveal().reveal(".hero .headline", { delay: 300, origin: "top", distance: "50px" });
ScrollReveal().reveal(".hero .subtext", { delay: 500, origin: "bottom", distance: "50px" });
ScrollReveal().reveal(".join-btn", { delay: 700, scale: 0.9 });

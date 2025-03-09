document.addEventListener("DOMContentLoaded", function () {
    // Scroll to Pricing Section
    window.scrollToPricing = function () {
        document.getElementById("pricing").classList.remove("hidden");
        document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    };

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Fade-in Effect for Sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Navbar Toggle for Mobile
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.createElement("div");

    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").appendChild(menuToggle);

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

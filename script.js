document.addEventListener("DOMContentLoaded", function () {
    function togglePricing() {
        const pricingSection = document.getElementById("pricing");
        pricingSection.classList.toggle("hidden");
        if (!pricingSection.classList.contains("hidden")) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Ensure the function is available globally
    window.togglePricing = togglePricing;
});

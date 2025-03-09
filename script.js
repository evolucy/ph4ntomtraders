document.addEventListener("DOMContentLoaded", function () {
    // Toggle Pricing Section
    function togglePricing() {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
            pricingSection.classList.toggle("hidden");
            if (!pricingSection.classList.contains("hidden")) {
                pricingSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    // Ensure Function Works Globally
    window.togglePricing = togglePricing;
});

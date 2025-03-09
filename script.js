function togglePricing() {
    const pricingSection = document.getElementById("pricing");
    pricingSection.classList.toggle("hidden");
    pricingSection.scrollIntoView({ behavior: "smooth" });
}

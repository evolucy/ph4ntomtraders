document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.getElementById("get-started");
    const pricingSection = document.getElementById("pricing-section");
    const pricingButtons = document.querySelectorAll(".pricing-btn");

    // Hide pricing section initially
    pricingSection.style.display = "none";

    getStartedBtn.addEventListener("click", function () {
        pricingSection.style.display = "block";
    });

    pricingButtons.forEach(button => {
        button.addEventListener("click", function () {
            const price = this.getAttribute("data-price");
            window.location.href = `payment.html?amount=${price}`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.getElementById("get-started");
    const pricingSection = document.getElementById("pricing-section");
    const pricingButtons = document.querySelectorAll(".pricing-btn");

    // अगर कोई element null है तो error को रोकने के लिए return कर दो
    if (!getStartedBtn || !pricingSection) {
        console.error("Error: Required elements not found!");
        return;
    }

    // Hide pricing section initially
    pricingSection.style.display = "none";

    getStartedBtn.addEventListener("click", function () {
        pricingSection.style.display = "block";
    });

    pricingButtons.forEach(button => {
        button.addEventListener("click", function () {
            const price = this.getAttribute("data-price");
            if (price) {
                window.location.href = `payment.html?amount=${price}`;
            } else {
                console.error("Error: No price found for this button!");
            }
        });
    });
});

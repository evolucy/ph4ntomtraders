document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.querySelector(".get-started");
    const priceContainer = document.querySelector(".price-container");
    const priceCards = document.querySelectorAll(".price-card");

    // Initially hide pricing plans
    priceContainer.style.display = "none";

    // Show pricing plans when 'Get Started' is clicked
    getStartedBtn.addEventListener("click", () => {
        priceContainer.style.display = "flex";
    });

    // Redirect to payment when any price plan is clicked
    priceCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            let paymentLinks = [
                "https://payment.com/2days",  // 2 Days Free Trial
                "https://payment.com/1month", // 1 Month Plan
                "https://payment.com/3months", // 3 Months Plan
                "https://payment.com/6months", // 6 Months Plan
                "https://payment.com/lifetime" // Lifetime Plan
            ];
            window.open(paymentLinks[index], "_blank");
        });
    });
});

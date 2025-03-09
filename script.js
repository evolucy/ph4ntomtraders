function togglePricing() {
    var pricingSection = document.getElementById("pricing");
    if (pricingSection.classList.contains("hidden")) {
        pricingSection.classList.remove("hidden");
    } else {
        pricingSection.classList.add("hidden");
    }
}

function redirectToPayment(plan) {
    let url = "";
    switch(plan) {
        case "1month":
            url = "https://yourpaymentgateway.com/pay?amount=3999";
            break;
        case "3month":
            url = "https://yourpaymentgateway.com/pay?amount=5999";
            break;
        case "6month":
            url = "https://yourpaymentgateway.com/pay?amount=9999";
            break;
        case "lifetime":
            url = "https://yourpaymentgateway.com/pay?amount=14999";
            break;
        default:
            url = "https://yourpaymentgateway.com/trial";
    }
    window.location.href = url;
}

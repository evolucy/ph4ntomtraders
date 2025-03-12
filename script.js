// Function to Join Telegram Channel
function joinTelegram() {
    window.open("https://t.me/ph4ntomtraders", "_blank");
}

// Show Pricing Section
function showPricing() {
    document.getElementById("pricing-section").style.display = "block";
}

// Redirect to Payment
function redirectToPayment(plan) {
    let paymentLink = "";
    
    switch(plan) {
        case '1month':
            paymentLink = "https://yourpaymentlink.com/1month";
            break;
        case '3months':
            paymentLink = "https://yourpaymentlink.com/3months";
            break;
        case '6months':
            paymentLink = "https://yourpaymentlink.com/6months";
            break;
        case 'lifetime':
            paymentLink = "https://yourpaymentlink.com/lifetime";
            break;
        default:
            paymentLink = "https://yourpaymentlink.com";
    }
    
    window.open(paymentLink, "_blank");
}

// Auto Trading Quotes System
document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Risk comes from not knowing what you're doing!",
        "The market is a device for transferring money from the impatient to the patient!",
        "Opportunities come infrequently. When it rains gold, put out the bucket!",
        "The goal of a successful trader is to make the best trades. Money is secondary!",
        "An investment in knowledge pays the best interest!"
    ];
    
    function updateQuote() {
        const quoteElement = document.getElementById("trading-quote");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    setInterval(updateQuote, 5000);
});

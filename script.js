document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Trade smart, not hard! 📈",
        "Patience is the key to profits! 💰",
        "Risk management is your best strategy! 🔥",
        "Charts don’t lie, traders do! 📊",
        "Every loss is a lesson, every win is a reward! 🏆"
    ];

    const quoteElement = document.getElementById("quote");
    let index = 0;

    function updateQuote() {
        quoteElement.style.opacity = 0;
        setTimeout(() => {
            quoteElement.textContent = quotes[index];
            quoteElement.style.opacity = 1;
            index = (index + 1) % quotes.length;
        }, 500);
    }

    setInterval(updateQuote, 5000);

    // Get Started Button Animation
    document.querySelector(".get-started").addEventListener("click", function () {
        this.style.transform = "scale(1.2)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    });
});

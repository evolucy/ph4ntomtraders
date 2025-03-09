// Array of trading motivational quotes
const quotes = [
    "Trade what you see, not what you think.",
    "The market is a device for transferring money from the impatient to the patient.",
    "Risk comes from not knowing what you're doing.",
    "The goal of a successful trader is to make the best trades. Money is secondary.",
    "Amateurs think about how much money they can make. Professionals think about how much they could lose.",
    "Trade with a plan, or plan to fail.",
    "Be fearful when others are greedy and greedy when others are fearful.",
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Display a random quote on page load
window.onload = displayRandomQuote;

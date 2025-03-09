// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and ready!");

    // Initialize particles.js for animated background
    particlesJS.load('particles-js', 'particles-config.json', function() {
        console.log('Particles.js loaded successfully.');
    });

    // Display a random quote when the page loads
    displayRandomQuote();
});

// Function to display random trading quotes
function displayRandomQuote() {
    const quotes = [
        "The market is a battlefield, trade wisely.",
        "Risk comes from not knowing what you're doing.",
        "Patience is the key to trading success.",
        "Trade with discipline, not emotion.",
        "Opportunities come to those who wait."
    ];

    // Get the quote element
    let quoteElement = document.getElementById("quote");

    // Check if element exists before modifying it
    if (quoteElement) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[randomIndex];
        console.log("New Quote Displayed:", quotes[randomIndex]);
    } else {
        console.error("Element with ID 'quote' not found! Make sure the ID is correct in your HTML.");
    }
}

// Event listener for button click to generate a new quote
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("join-btn")) {
        displayRandomQuote();
    }
});

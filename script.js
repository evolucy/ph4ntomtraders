document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and ready!");

    // Initialize Particles.js with Direct Configuration
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100 },
            "size": { "value": 3 },
            "color": { "value": "#00ff99" },
            "line_linked": { "enable": true, "color": "#00ff99" },
            "move": { "speed": 3 }
        }
    });

    // Display random quote on load
    displayRandomQuote();
});

// Function to display a random trading quote
function displayRandomQuote() {
    const quotes = [
        "The market is a battlefield, trade wisely.",
        "Risk comes from not knowing what you're doing.",
        "Patience is the key to trading success.",
        "Trade with discipline, not emotion.",
        "Opportunities come to those who wait."
    ];

    let quoteElement = document.getElementById("quote");

    if (quoteElement) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[randomIndex];
        console.log("New Quote Displayed:", quotes[randomIndex]);
    } else {
        console.error("Element with ID 'quote' not found!");
    }
}

// Event listener for button click
document.querySelector(".join-btn").addEventListener("click", displayRandomQuote);

// Add any dynamic functionality here
// Example: Slider for quotes
const quotes = [
  "Trade smart, not hard. Let Ph4ntom guide your way to success!",
  "Maximize your profits with Ph4ntom's high-accuracy indicators.",
  "Join the elite traders who trust Ph4ntom."
];

let currentQuote = 0;
const quoteSlider = document.querySelector('.quote-slider p');

function changeQuote() {
  quoteSlider.textContent = quotes[currentQuote];
  currentQuote = (currentQuote + 1) % quotes.length;
}

setInterval(changeQuote, 5000);

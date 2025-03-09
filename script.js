const quotes = [
    '"The market rewards patience, not impulse."',
    '"Trade with a plan, not with emotions."',
    '"Risk management is the key to longevity."',
    '"Success in trading is a marathon, not a sprint."',
    '"Focus on the process, profits will follow."'
];

function changeQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

setInterval(changeQuote, 5000);

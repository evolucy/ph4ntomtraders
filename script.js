// Changing Quotes
const quotes = [
    '"Trade smart, trade fearless!"',
    '"Patience + Discipline = Profits!"',
    '"Risk comes from not knowing what you\'re doing!"',
    '"A trader who controls emotions, controls the market!"'
];

let quoteIndex = 0;
function changeQuote() {
    document.getElementById("quote").innerText = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(changeQuote, 3000); // Change every 3 sec

// Candlestick Animation
const canvas = document.getElementById('candlestickCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Candle {
    constructor(x, open, close, high, low, color) {
        this.x = x;
        this.open = open;
        this.close = close;
        this.high = high;
        this.low = low;
        this.color = color;
    }

    draw() {
        // Wick
        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.high);
        ctx.lineTo(this.x + 5, this.low);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Body
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, Math.min(this.open, this.close), 10, Math.abs(this.open - this.close));
    }
}

let candles = [];

function generateCandles() {
    candles = [];
    let x = 50;
    for (let i = 0; i < 50; i++) {
        let open = Math.random() * canvas.height * 0.5 + canvas.height * 0.3;
        let close = Math.random() * canvas.height * 0.5 + canvas.height * 0.3;
        let high = Math.max(open, close) + Math.random() * 40;
        let low = Math.min(open, close) - Math.random() * 40;
        let color = close > open ? "#00ff99" : "#ff4444";
        candles.push(new Candle(x, open, close, high, low, color));
        x += 15;
    }
}

function animateCandles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    candles.forEach(candle => candle.draw());
    requestAnimationFrame(animateCandles);
}

// Start animation
generateCandles();
animateCandles();

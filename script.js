// Changing Quotes
const quotes = [
    '"Trade smart, trade fearless!"',
    '"Patience + Discipline = Profits!"',
    '"Risk comes from not knowing what you're doing!"',
    '"A trader who controls emotions, controls the market!"'
];

let quoteIndex = 0;
function changeQuote() {
    document.getElementById("quote").innerText = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(changeQuote, 3000); // Change every 3 sec

// 3D Candlestick Background Animation
const canvas = document.getElementById("candlestickCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let candles = [];

class Candle {
    constructor(x, open, close, high, low, width) {
        this.x = x;
        this.open = open;
        this.close = close;
        this.high = high;
        this.low = low;
        this.width = width;
        this.color = close > open ? "#00ff99" : "#ff4444";
    }

    draw() {
        // Wick
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.high);
        ctx.lineTo(this.x + this.width / 2, this.low);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Body
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, Math.min(this.open, this.close), this.width, Math.abs(this.close - this.open));
    }

    update() {
        this.x -= 2;
    }
}

function createCandles() {
    candles = [];
    for (let i = 0; i < canvas.width; i += 40) {
        let open = Math.random() * (canvas.height / 2) + 100;
        let close = Math.random() * (canvas.height / 2) + 100;
        let high = Math.max(open, close) + Math.random() * 50;
        let low = Math.min(open, close) - Math.random() * 50;
        candles.push(new Candle(i, open, close, high, low, 20));
    }
}

function animateCandles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    candles.forEach(candle => {
        candle.update();
        candle.draw();
    });

    // Remove off-screen candles
    if (candles[0].x < -40) {
        candles.shift();
        let open = Math.random() * (canvas.height / 2) + 100;
        let close = Math.random() * (canvas.height / 2) + 100;
        let high = Math.max(open, close) + Math.random() * 50;
        let low = Math.min(open, close) - Math.random() * 50;
        candles.push(new Candle(canvas.width, open, close, high, low, 20));
    }

    requestAnimationFrame(animateCandles);
}

createCandles();
animateCandles();

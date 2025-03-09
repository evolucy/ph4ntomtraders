const canvas = document.getElementById('candlestickCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let candles = [];

class Candle {
    constructor(x, y, height, bullish) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = height;
        this.bullish = bullish;
        this.wickHeight = Math.random() * 20 + 10;
    }

    draw() {
        ctx.fillStyle = this.bullish ? "#00ff99" : "#ff4444"; 
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Wick
        ctx.fillStyle = "white";
        ctx.fillRect(this.x + this.width / 2 - 1, this.y - this.wickHeight, 2, this.wickHeight + this.height);
    }

    update() {
        this.y -= 1; // Move candles upwards (uptrend effect)
        
        // Reset candles when they move out of view
        if (this.y + this.height < 0) {
            this.y = canvas.height;
            this.height = Math.random() * 40 + 20;
            this.bullish = Math.random() > 0.3; // 70% bullish, 30% bearish
        }

        this.draw();
    }
}

function initCandles() {
    candles = [];
    for (let i = 0; i < canvas.width / 15; i++) {
        let height = Math.random() * 40 + 20;
        let y = canvas.height - height;
        candles.push(new Candle(i * 15, y, height, true));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    candles.forEach(candle => candle.update());
    requestAnimationFrame(animate);
}

// Initialize the candles and start animation
initCandles();
animate();

// Resize event to adjust canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initCandles();
});

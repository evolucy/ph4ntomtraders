document.addEventListener("DOMContentLoaded", function () {
    // Canvas Animation
    const canvas = document.getElementById("tradingCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const colors = ["#00ff99", "#00cc77", "#008855"];

        class Particle {
            constructor(x, y, radius, color, velocity) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.velocity = velocity;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
                if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
                this.draw();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < 50; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let radius = Math.random() * 3 + 1;
                let color = colors[Math.floor(Math.random() * colors.length)];
                let velocity = {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2
                };
                particles.push(new Particle(x, y, radius, color, velocity));
            }
        }

        function animateParticles() {
            requestAnimationFrame(animateParticles);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => particle.update());
        }

        initParticles();
        animateParticles();
    }

    // Quotes Change Effect
    const quotes = [
        "Trade with confidence, profit with patience.",
        "The market rewards discipline, not emotion.",
        "A great trader sees what others miss.",
        "Consistency is the key to trading success."
    ];
    let quoteIndex = 0;
    setInterval(() => {
        document.getElementById("quote").innerText = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 5000);
});

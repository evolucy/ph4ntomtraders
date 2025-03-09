document.addEventListener("DOMContentLoaded", function () {
    // Changing Quotes
    const quotes = [
        '"Trade smart, trade fearless!"',
        '"Patience + Discipline = Profits!"',
        '"Risk comes from not knowing what you\'re doing!"',
        '"A trader who controls emotions, controls the market!"'
    ];

    let quoteIndex = 0;
    function changeQuote() {
        const quoteElement = document.getElementById("quote");
        if (quoteElement) {
            quoteElement.innerText = quotes[quoteIndex];
            quoteIndex = (quoteIndex + 1) % quotes.length;
        }
    }
    setInterval(changeQuote, 3000);

    // Particle Background (Only for PC)
    const canvas = document.getElementById('background');
    if (canvas && window.innerWidth >= 1024) {
        const ctx = canvas.getContext('2d');

        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        let particlesArray = [];
        let totalParticles = 20; // PC के लिए 20 particles

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() * 0.5) - 0.25;
                this.speedY = (Math.random() * 0.5) - 0.25;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = 'rgba(0, 255, 153, 0.3)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            for (let i = 0; i < totalParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.update();
                particle.draw();
            });
            setTimeout(() => requestAnimationFrame(animateParticles), 50);
        }

        initParticles();
        animateParticles();
    }
});

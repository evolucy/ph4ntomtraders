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
    setInterval(changeQuote, 3000); // Change every 3 sec

    // Particle Background Optimization
    const canvas = document.getElementById('background');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // Set Canvas Size
        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        let particlesArray = [];
        let totalParticles = window.innerWidth < 768 ? 5 : 30; // Mobile = 5, PC = 30
        let fps = 30; // Low FPS for Performance Boost
        let now, then = Date.now(), interval = 1000 / fps, delta;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // Smaller Particles for less lag
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
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
            now = Date.now();
            delta = now - then;
            if (delta > interval) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particlesArray.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                then = now - (delta % interval);
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }
});

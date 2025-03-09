document.addEventListener("DOMContentLoaded", function () {
    // Changing Quotes with Fade Effect
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
            quoteElement.style.opacity = 0; // Fade out
            setTimeout(() => {
                quoteElement.innerText = quotes[quoteIndex];
                quoteElement.style.opacity = 1; // Fade in
                quoteIndex = (quoteIndex + 1) % quotes.length;
            }, 500); // Delay for fade effect
        }
    }
    setInterval(changeQuote, 3000); // Change every 3 sec

    // Particles Background Animation
    const canvas = document.getElementById('background');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];
        const mouse = { x: null, y: null };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce from edges
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Mouse attraction effect
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    this.x -= dx * 0.02;
                    this.y -= dy * 0.02;
                }
            }
            draw() {
                ctx.fillStyle = 'rgba(0, 255, 153, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            for (let i = 0; i < 100; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        // Resize Event
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });

        // Mouse Move Event
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        initParticles();
        animateParticles();
    }
});

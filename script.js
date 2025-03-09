document.addEventListener("DOMContentLoaded", () => {
    const joinNowBtn = document.querySelector(".join-now");
    const getStartedBtn = document.querySelector(".get-started");
    const pricingSection = document.querySelector(".pricing");
    const priceCards = document.querySelectorAll(".price-card");

    // Initially hide the pricing section with smooth transition
    pricingSection.style.display = "none";
    pricingSection.style.opacity = "0";
    pricingSection.style.transition = "opacity 0.5s ease-in-out";

    getStartedBtn.addEventListener("click", () => {
        pricingSection.style.display = "block";
        setTimeout(() => {
            pricingSection.style.opacity = "1";
        }, 10);
    });

    priceCards.forEach(card => {
        card.style.transition = "transform 0.3s, background-color 0.3s";
        
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.1) rotateY(10deg)";
            card.style.backgroundColor = "lime";
            card.style.color = "black";
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1) rotateY(0deg)";
            card.style.backgroundColor = "#111";
            card.style.color = "white";
        });
        
        card.addEventListener("click", () => {
            card.style.animation = "explode 0.5s ease-out";
            setTimeout(() => {
                window.open("https://payment-gateway.com", "_blank");
            }, 300);
        });
    });

    // Add explosion effect keyframes dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes explode {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.5; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

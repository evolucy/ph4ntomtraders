const form = document.getElementById('tradingview-form');
const submitBtn = document.getElementById('submit-btn');

// Function to generate a unique key per user per price plan
function getUserKey() {
    const email = document.getElementById('tradingview-email').value;
    const username = document.getElementById('tradingview-username').value;
    const pricePlan = document.getElementById('price-plan').value;
    return `submitted_${email || username}_${pricePlan}`;
}

// Check if user already submitted for the selected price plan
function checkSubmission() {
    const userKey = getUserKey();
    if (sessionStorage.getItem(userKey) || localStorage.getItem(userKey)) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Already Submitted";
    } else {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit";
    }
}

// Check on page load
form.addEventListener('input', checkSubmission);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('tradingview-email').value;
    const username = document.getElementById('tradingview-username').value;
    const phone = document.getElementById('phone-number').value;
    const pricePlan = document.getElementById('price-plan').value;

    const userKey = getUserKey();

    if (sessionStorage.getItem(userKey)) {
        alert("You have already submitted your details for this price plan in this session.");
        return;
    }

    const chatID = "7976547544";  // Telegram Chat ID
    const botToken = "7764818710:AAEVf-mPvtL0dMw_8rYi1iemEpkZ_PQ4GfA";  // Bot Token

    const message = `📌 *New TradingView Details Submitted*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n👤 *Username:* ${username}\n📞 *Phone:* ${phone}\n💰 *Price Plan:* ${pricePlan}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatID, text: message, parse_mode: "Markdown" })
    }).then(response => response.json()).then(data => {
        alert('Details submitted successfully! Indicator will be added to your TradingView account shortly.');

        // Store submission status
        localStorage.setItem(userKey, true);
        sessionStorage.setItem(userKey, true);

        submitBtn.disabled = true;
        submitBtn.innerText = "Already Submitted";

        window.location.href = 'congratulations.html';
    }).catch(error => {
        alert('Failed to send details. Please try again!');
    });
});

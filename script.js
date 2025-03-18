// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyArLG9yX9gStfa5nYVUHp7op2Cx_m7eviw",
  authDomain: "ph4ntomtraders.firebaseapp.com",
  projectId: "ph4ntomtraders",
  storageBucket: "ph4ntomtraders.firebasestorage.app",
  messagingSenderId: "1032102942239",
  appId: "1:1032102942239:web:5c86ea9ca59af752b2e72a",
  measurementId: "G-H9QQF0B9VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ensure Razorpay script is included in HTML
if (!window.Razorpay) {
  const script = document.createElement('script');
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.head.appendChild(script);
}

// Globally define buyIndicator function
window.buyIndicator = function (indicatorName, price, duration) {
  const options = {
    key: 'rzp_test_VuME3PDnWmW4Pq', // Replace with actual Razorpay Key ID
    amount: price * 100, // Amount in paise (e.g., ₹1999 = 199900)
    currency: 'INR',
    name: 'Ph4ntom Traders',
    description: `${indicatorName} - ${duration} Access`, // Fixed string interpolation
    image: 'https://your-website-logo-url.png', // Replace with your logo URL
    handler: function (response) {
      alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      window.location.href = 'tradingview-details.html';
    },
    prefill: {
      name: 'User Name', // Replace with user's name
      email: 'user@example.com', // Replace with user's email
      contact: '9999999999', // Replace with user's contact
    },
    theme: {
      color: '#00b894',
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
};

// DOMContentLoaded Event Listener
document.addEventListener('DOMContentLoaded', () => {
  // Slider for quotes
  const quotes = [
    "Trade smart, not hard. Let Ph4ntom guide your way to success!",
    "Maximize your profits with Ph4ntom's high-accuracy indicators.",
    "Join the elite traders who trust Ph4ntom."
  ];

  let currentQuote = 0;
  const quoteSlider = document.querySelector('.quote-slider p');

  function changeQuote() {
    if (quoteSlider) {
      quoteSlider.textContent = quotes[currentQuote];
      currentQuote = (currentQuote + 1) % quotes.length;
    }
  }

  if (quoteSlider) {
    setInterval(changeQuote, 5000);
  }

  // Tabs functionality
  const tabLinks = document.querySelectorAll('.tab-link');
  const authForms = document.querySelectorAll('.auth-form');

  tabLinks.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabLinks.forEach((t) => t.classList.remove('active'));
      authForms.forEach((form) => form.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.getAttribute('data-tab');
      document.getElementById(tabName).classList.add('active');
    });
  });

  // Reset Password Link
  const resetPasswordLink = document.querySelector('.reset-password-link a');
  const resetPasswordForm = document.getElementById('reset-password');
  const loginForm = document.getElementById('login');

  if (resetPasswordLink && resetPasswordForm && loginForm) {
    resetPasswordLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.remove('active');
      resetPasswordForm.classList.add('active');
    });

    const backToLoginLink = document.querySelector('.back-to-login a');
    backToLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      resetPasswordForm.classList.remove('active');
      loginForm.classList.add('active');
    });
  }

  // Signup Form Submission
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert('Signup successful! Welcome, ' + userCredential.user.email);
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          alert('Error: ' + error.message);
        });
    });
  }

  // Login Form Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert('Login successful! Welcome back, ' + userCredential.user.email);
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          alert('Error: ' + error.message);
        });
    });
  }

  // Logout Functionality
  const logoutButton = document.getElementById('logout-btn');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          alert('Logged out successfully!');
          window.location.href = 'index.html';
        })
        .catch((error) => {
          alert('Error: ' + error.message);
        });
    });
  }

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

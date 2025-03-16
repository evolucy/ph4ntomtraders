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

// Globally declare buyIndicator function
window.buyIndicator = function (indicatorName, price, duration) {
  const options = {
    key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
    amount: price * 100, // Amount in paise (e.g., ₹1999 = 199900)
    currency: 'INR',
    name: 'Ph4ntom Traders',
    description: `${indicatorName} - ${duration} Access`,
    image: 'https://your-website-logo-url.png', // Add your logo URL
    handler: function (response) {
      alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      // Redirect to TradingView details page
      window.location.href = 'tradingview-details.html';
    },
    prefill: {
      name: 'User Name', // Replace with user's name (if available)
      email: 'user@example.com', // Replace with user's email (if available)
      contact: '9999999999', // Replace with user's contact (if available)
    },
    theme: {
      color: '#00b894', // Customize the theme color
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
};

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

    // Back to Login Link
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
          let errorMessage = error.message;
          if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'Email already in use. Please use a different email.';
          } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Invalid email address.';
          } else if (error.code === 'auth/weak-password') {
            errorMessage = 'Password must be at least 6 characters long.';
          }
          alert('Error: ' + errorMessage);
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
          let errorMessage = error.message;
          if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
            errorMessage = 'Invalid email or password.';
          } else if (error.code === 'auth/user-not-found') {
            errorMessage = 'User not found. Please sign up first.';
          }
          alert('Error: ' + errorMessage);
        });
    });
  }

  // Reset Password Form Submission
  const resetPasswordFormSubmit = document.getElementById('reset-password-form');
  if (resetPasswordFormSubmit) {
    resetPasswordFormSubmit.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('reset-email').value;

      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password reset email sent! Check your inbox.');
        })
        .catch((error) => {
          let errorMessage = error.message;
          if (error.code === 'auth/user-not-found') {
            errorMessage = 'User not found. Please check your email address.';
          } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Invalid email address.';
          }
          alert('Error: ' + errorMessage);
        });
    });
  }

  // Logout Functionality
  const logoutButton = document.getElementById('logout-btn'); // Updated ID
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
});

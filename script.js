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

// Slider for quotes
const quotes = [
  "Trade smart, not hard. Let Ph4ntom guide your way to success!",
  "Maximize your profits with Ph4ntom's high-accuracy indicators.",
  "Join the elite traders who trust Ph4ntom."
];

let currentQuote = 0;
const quoteSlider = document.querySelector('.quote-slider p');

function changeQuote() {
  if (quoteSlider) { // Check if quoteSlider exists
    quoteSlider.textContent = quotes[currentQuote];
    currentQuote = (currentQuote + 1) % quotes.length;
  }
}

// Start the quote slider
if (quoteSlider) { // Check if quoteSlider exists
  setInterval(changeQuote, 5000);
}

// Tabs functionality
const tabLinks = document.querySelectorAll('.tab-link');
const authForms = document.querySelectorAll('.auth-form');

tabLinks.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and forms
    tabLinks.forEach((t) => t.classList.remove('active'));
    authForms.forEach((form) => form.classList.remove('active'));

    // Add active class to clicked tab and corresponding form
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

    // Create User with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert('Signup successful! Welcome, ' + user.email);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      })
      .catch((error) => {
        // Handle errors
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  });
}

// Login Form Submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Sign in with Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        alert('Login successful! Welcome back, ' + user.email);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      })
      .catch((error) => {
        // Handle errors
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  });
}

// Reset Password Form Submission
const resetPasswordForm = document.getElementById('reset-password-form');
if (resetPasswordForm) {
  resetPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('reset-email').value;

    // Send Password Reset Email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent! Check your inbox.');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  });
}

// Logout Functionality
if (window.location.pathname.includes('logout.html')) {
  signOut(auth)
    .then(() => {
      alert('Logged out successfully!');
      window.location.href = 'index.html'; // Redirect to home page
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
}

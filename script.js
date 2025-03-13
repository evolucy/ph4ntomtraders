// Firebase Import
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

// Firebase Config
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

// Auth Form Handler
document.getElementById("auth-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let submitBtn = document.getElementById("submit-btn");

  if (submitBtn.innerText === "Sign Up") {
    // Signup Process
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signup Successful!");
        window.location.href = "index.html"; // Redirect to Home Page
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    // Login Process
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to Home Page
      })
      .catch((error) => {
        alert(error.message);
      });
  }
});

// Forget Password Form Handler
document.getElementById("forget-password-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent. Check your inbox!");
      window.location.href = "login.html"; // Redirect to Login Page
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Logout Function
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully!");
        window.location.href = "signup.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

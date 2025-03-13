// script.js (Firebase Authentication Setup)

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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

// Signup Function
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful!");
            window.location.href = "index.html"; // Redirect to Home
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login Function
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Logout Function
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "signup.html";
    }).catch((error) => {
        alert(error.message);
    });
});

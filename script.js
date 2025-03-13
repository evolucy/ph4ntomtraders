// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

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

// Debug: Console me Firebase Load Check
console.log("Firebase Loaded:", auth);

// Signup Function
document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup Success:", userCredential);
        alert("Signup Successful!");
        window.location.href = "dashboard.html"; // Redirect to Dashboard
    } catch (error) {
        console.error("Signup Error:", error);
        alert(error.message);
    }
});

// Login Function
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Success:", userCredential);
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to Dashboard
    } catch (error) {
        console.error("Login Error:", error);
        alert(error.message);
    }
});

// Logout Function
document.getElementById("logout-btn")?.addEventListener("click", async () => {
    try {
        await signOut(auth);
        alert("Logged out successfully!");
        window.location.href = "signup.html";
    } catch (error) {
        console.error("Logout Error:", error);
        alert(error.message);
    }
});

// Auth State Change Listener
onAuthStateChanged(auth, (user) => {
    console.log("Auth State Changed:", user);
    if (!user && window.location.pathname.includes("dashboard.html")) {
        window.location.href = "signup.html"; // Redirect if not logged in
    }
});

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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup Function
document.getElementById("signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup Successful!");
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login Function
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Logout Function
document.getElementById("logout-btn")?.addEventListener("click", () => {
    auth.signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "signup.html";
    }).catch((error) => {
        alert(error.message);
    });
});

// Check if user is logged in (Auth State Change)
auth.onAuthStateChanged((user) => {
    if (!user && window.location.pathname.includes("dashboard.html")) {
        window.location.href = "signup.html"; // If not logged in, redirect to signup
    }
});

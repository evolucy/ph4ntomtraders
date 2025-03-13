// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyArLG9yX9gStfa5nYVUHp7op2Cx_m7eviw",
    authDomain: "ph4ntomtraders.firebaseapp.com",
    projectId: "ph4ntomtraders",
    storageBucket: "ph4ntomtraders.appspot.com",
    messagingSenderId: "1032102942239",
    appId: "1:1032102942239:web:5c86ea9ca59af752b2e72a",
    measurementId: "G-H9QQF0B9VW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup Function
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then(() => {
                    alert("Signup Successful!");
                    window.location.href = "dashboard.html"; // Redirect to Dashboard
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    // Login Function
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    alert("Login Successful!");
                    window.location.href = "dashboard.html"; // Redirect to Dashboard
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    // Logout Function
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            auth.signOut().then(() => {
                alert("Logged out successfully!");
                window.location.href = "signup.html";
            }).catch((error) => {
                alert(error.message);
            });
        });
    }

    // Check Auth State
    auth.onAuthStateChanged((user) => {
        if (!user && window.location.pathname.includes("dashboard.html")) {
            window.location.href = "signup.html"; // Redirect if not logged in
        }
    });
});

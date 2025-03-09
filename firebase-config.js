// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyArLG09X9gStfaSnVYUHvp7op2Cx-m7eviw",
    authDomain: "ph4ntomtraders.firebaseapp.com",
    projectId: "ph4ntomtraders",
    storageBucket: "ph4ntomtraders.appspot.com",
    messagingSenderId: "1032102942239",
    appId: "1:1032102942239:web:7ee5612c9038838b2e72a",
    measurementId: "G-N0H79WRQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("🔥 Firebase Initialized Successfully!");

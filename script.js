// Get Started Button Handler
document.getElementById("getStartedBtn")?.addEventListener("click", () => {
  window.location.href = "signup.html"; // Redirect to Signup Page
});

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

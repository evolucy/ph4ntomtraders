// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Signup successful! Redirecting to login page...');
  window.location.href = 'login.html';
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Login successful! Redirecting to dashboard...');
  window.location.href = 'dashboard.html'; // Redirect to dashboard page
});

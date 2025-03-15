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
});

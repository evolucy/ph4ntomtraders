const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); // Session management ke liye
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(
  session({
    secret: 'your-secret-key', // Session encrypt karne ke liye secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // HTTPS use nahi kar rahe to false rakhein
  })
);

// Check if user already submitted in this session
app.post('/check-submission', (req, res) => {
  if (req.session.submitted) {
    res.json({ submitted: true });
  } else {
    res.json({ submitted: false });
  }
});

// Save user submission in this session
app.post('/save-submission', (req, res) => {
  req.session.submitted = true; // Session mein flag set karo
  res.json({ success: true });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

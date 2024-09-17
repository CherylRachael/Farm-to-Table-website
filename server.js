const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Sample route
app.get('/api', (req, res) => {
  res.send('Hello, this is your backend server!');
});

// POST route to handle newsletter subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  console.log(`New subscription: ${email}`);
  // Here, you would typically save the email to your database
  res.send('Subscription successful!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from the "public" directory
app.use(express.static('public'));

// Your routes go here
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body; // Destructure from req.body
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.status(200).json({ message: 'Message received successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
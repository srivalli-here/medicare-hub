const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 3000;

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Srivalli@1234',  // Replace with your password
  database: 'medicare'         // Your database name
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

// Middleware to parse JSON body (important for fetch API requests)
app.use(express.json());

// Serve static files from your project root folder (adjust if needed)
app.use(express.static(path.join(__dirname)));

// Serve index.html (or your main page) at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST route to handle patient registration
app.post('/patient-registration', (req, res) => {
  const { name, age, gender, contact, problem } = req.body;

  if (!name || !age || !gender || !problem) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  // SQL Insert query - add contact only if provided
  const query = `INSERT INTO patients (name, age, gender, contact, problem) VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [name, age, gender, contact || null, problem], (err, results) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ message: 'Database error. Could not register patient.' });
    }
    return res.json({ message: 'Patient registered successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';
import path from 'path';
import sqlite3 from 'sqlite3';


const app = express();


const __dirname = path.resolve();
const dbPath = path.resolve(__dirname, 'gamesphere.db');

// Handle CORS w/ client
// For more information about CORS (Cross-Origin Resource Sharing):
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
  // Allow access from multiple origins
  const allowedOrigins = [
      "https://localhost:2223",
      "https://127.0.0.1:2223",
      "http://127.0.0.1:2223",
      "http://localhost:5173",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // Allow specific requests
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Pass to next layer of middleware
  next();
});


const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database: ', err.message);
  } else {
    console.log('Connected to the gamesphere database.');
  }
});

app.get('/game/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM embedlinks WHERE ID = ?`;

  db.all(query, [id], (err, rows) => {
    if (err) {
      console.error('Error running query: ', err.message);
      res.status(500).json({ error: 'An error occurred while retrieving embed links' });
    } else {
      res.json(rows);
    }
  });
});

app.get('/embedlinks', (req, res) => {
  const query = `SELECT * FROM embedlinks`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error running query: ', err.message);
      res.status(500).json({ error: 'An error occurred while retrieving embed links' });
    } else {
      res.json(rows);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database: ', err.message);
    } else {
      console.log('Closed the database connection.');
    }
    process.exit();
  });
});

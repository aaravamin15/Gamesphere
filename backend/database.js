import express from 'express';
import path from 'path';
import sqlite3 from 'sqlite3';


const app = express();


const __dirname = path.resolve();
const dbPath = path.resolve(__dirname, 'gamesphere.db');


const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database: ', err.message);
  } else {
    console.log('Connected to the gamesphere database.');
  }
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

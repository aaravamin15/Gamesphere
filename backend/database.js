// Import required libraries
import path from 'path';
import sqlite3 from 'sqlite3';

// Path to the database file
const __dirname = path.resolve();
const dbPath = path.resolve(__dirname, 'gamesphere.db');
console.log(dbPath);

// Connect to the database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database: ', err.message);
  } else {
    console.log('Connected to the gamesphere database.');
  }
});

// Example query
const query = `SELECT * FROM embedlinks`;

// Execute the query
db.all(query, [], (err, rows) => {
  if (err) {
    console.error('Error running query: ', err.message);
  } else {
    // Process the results
    rows.forEach((row) => {
      console.log(row);
    });
  }
});

// Close the database connection when done
db.close((err) => {
  if (err) {
    console.error('Error closing database: ', err.message);
  } else {
    console.log('Closed the database connection.');
  }
});

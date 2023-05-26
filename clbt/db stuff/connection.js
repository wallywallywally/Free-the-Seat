const mysql = require('mysql2');
require('dotenv').config();

// Creating a connection
const connection = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: process.env.USER_ID,
    password: process.env.PASSWORD,
  database: 'free-the-seat',
  ssl: { rejectUnauthorized: true },
  multipleStatements: true,
});

// Connecting to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database!');

  // Perform database operations
  const createTablesQuery = `
    -- Create User table
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE,
      username TEXT,
      password_hash TEXT
    );

    -- Create Seat table
    CREATE TABLE IF NOT EXISTS seats (
      id INT AUTO_INCREMENT PRIMARY KEY,
      occupancy ENUM ('Free', 'Occupied') NOT NULL
    );
    
    -- Create Reservation table 
    CREATE TABLE IF NOT EXISTS reservations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        start_time INT,
        end_time INT,
        date_created DATE,
        user_id INT, 
        KEY users_id_idx (user_id),
        seat_id INT,
        KEY seats_id_idx(seat_id)
    );
  `;

  connection.query(createTablesQuery, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }

    console.log('Query executed successfully:', createTablesQuery);
  });

  // Closing the connection
  connection.end();
});

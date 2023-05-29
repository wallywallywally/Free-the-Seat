const mysql = require('mysql2');
require('dotenv').config();

// Creating a connection
const connection = mysql.createConnection({
    host: 'aws.connect.psdb.cloud',
    user: 'ar16f2d710lc0r3s881z',
    password: 'pscale_pw_rhJQ2ytLEmQP6Xeq7moZzpETJGEFWDlib0HBXgSVswq',
    database: 'free-the-seat',
    ssl: { rejectUnauthorized: true },
    // multipleStatements: true,
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
    ALTER TABLE users
    DROP COLUMN username
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

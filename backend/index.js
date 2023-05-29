import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

// connecting to db
const db = mysql.createConnection({
    host: "aws.connect.psdb.cloud",
    user: "ar16f2d710lc0r3s881z",
    password: "pscale_pw_rhJQ2ytLEmQP6Xeq7moZzpETJGEFWDlib0HBXgSVswq",
    database: "free-the-seat",
    ssl: { rejectUnauthorized: true }
})

app.use(express.json())
app.use(cors())

// check connection
// db.connect((error) => {
//     if(error){
//       console.log('Error connecting to the MySQL Database');
//       return;
//     }
//     console.log('Connection established sucessfully');
//   });
//   db.end((error) => {
// });



// tables:
// users, seats, reservations

// Read
app.get("/getuser", (req, res) => {
    const query = "SELECT * FROM User"
    db.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// Create
// app.post("/tablename", (req, res) => {
//     // const query = "INSERT INTO ..."
//     const values = []
//     db.query(query, [values], (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })

//login (tentative)
// app.get("/login", (req, res) => {
//     const email = req.body.email
//     const password = req.body.password
//     const query = "SELECT * FROM users WHERE email = '${email}' AND password_hash = '${password}'"
//     db.query(query, email, password, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()
const app = express()

// connecting to db
const db = mysql.createConnection({
    host: "aws.connect.psdb.cloud",
    user: process.env.REACT_APP_DB_USER,
    password: process.env.REACT_APP_DB_PW,
    database: "free-the-seat",
    ssl: { rejectUnauthorized: true }
})

app.use(express.json())
app.use(cors())

//check connection
db.connect((error) => {
    if(error){
      console.log('Error connecting to the MySQL Database');
      return;
    }
    console.log('Connection established sucessfully');
   });
  db.end((error) => {
 });



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

//register
app.post("/register", async (req, res) => {
    
    const query = "INSERT INTO users ('email', 'password') VALUES (?)";
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    const newUser = [
        req.body.email,
        hashedPass
        ];
        db.query(query, [newUser], (err, data) => {
            if (err) res.status(500).json(err)
             res.status(200).json(data);
        })
//login (tentative)
app.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const query = "SELECT * FROM users WHERE email = '${email}' AND password_hash = '${password}'"
    db.query(query, email, password, async (err, data) => {
        if (err) return res.status(500).json(err)   
        !data && res.status(400).json("Wrong credentials!");
        const validated = await bcrypt.compare(req.body.password, data[0].password);
        !validated && res.status(400).json("Wrong credentials!");
        res.status(200).json(data[0].email)
    })
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

app.listen(8800, () => {
    console.log("Connected to backend.");
  });
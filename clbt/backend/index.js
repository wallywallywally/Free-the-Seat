import express from 'express'

const app = express()

// connecting to db
const db = mysql.createConnection({
    host: "localhost",
    user: "ar16f2d710lc0r3s881z",
    password: "pscale_pw_rhJQ2ytLEmQP6Xeq7moZzpETJGEFWDlib0HBXgSVswq",
    database: "free-the-seat"
})

// tables:
// users, seats, reservations

// Read
app.get("/tablename", (req, res) => {
    // const query = "SELECT ..."
    db.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// Create
app.post("/tablename", (req, res) => {
    // const query = "INSERT INTO ..."
    const values = []
    db.query(query, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})





app.listen(8800, () => {
    console.log("cock ball")
})
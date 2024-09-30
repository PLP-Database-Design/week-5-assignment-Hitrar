const express = require('express')
const app = express()
// const mysql = require('mysql2')
const db = require('./db')


// const db = mysql.createConnection({
//     host: env.DB_HOST,
//     port:env.DB_PORT,
//     user: env.DB_USERNAME,
//     password: env.DB_PASSWORD,
//     database: env.DB_PASSWORD
    
// })
// db.connect((err) =>{
//     if(err){
//         console.log("cannot connect to the database: ", err)

//     }
//     console.log("connected to database successfully")
// })
// nodemon server.js
// Question 1 goes here
app.get('/getpatients', (req, res) =>{
    const sql = `SELECT patient_id, first_name, last_name, date_of_birth FROM patients`

    db.query(sql, (err, records) =>{
        if(err){
            console.log("Error retrieving from patients table: ", err)
            return res.status(500).send("Error retreiving records")
        }
        res.json(records)
    })
})


// Question 2 goes here
app.get('/getproviders', (req, res) =>{
    const sql = `SELECT first_name, last_name, provider_specialty FROM providers`

    db.query(sql, (err, records) =>{
        if(err){
            console.log("Error retrieving from providers table: ", err)
            return res.status(500).send("Error retreiving records")
        }
        res.json(records)
    })

})

// Question 3 goes here
app.get('/getpatientsbyfirstname', (req, res) =>{
    const sql = `SELECT patient_id, first_name, last_name, date_of_birth 
                FROM patients
                WHERE first_name = "John"
                `

    db.query(sql, (err, records) =>{
        if(err){
            console.log("Error retrieving from patients table: ", err)
            return res.status(500).send("Error retreiving records")
        }
        res.json(records)
    })
})

// Question 4 goes here
app.get('/getprovidersbyspecialty', (req, res) =>{
    const sql = `SELECT first_name, last_name, provider_specialty 
                FROM providers
                WHERE provider_specialty = "Dentistry"
                `

    db.query(sql, (err, records) =>{
        if(err){
            console.log("Error retrieving from providers table: ", err)
            return res.status(500).send("Error retreiving records")
        }
        res.json(records)
    })

})


// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})
require('dotenv').config()
const express = require('express')
// import express from 'express'     // Common or Module JS         
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send("himanshuoli18")
})

app.get("/linkedin",(req,res) => {
    res.send("<h1>Himanshu Oli</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})


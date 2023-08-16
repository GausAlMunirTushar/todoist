const express = require("express")
const connectDB = require("./config/database")
const app = express()

// Database Connection
connectDB()

app.get("/", (req, res) => {
    res.send("Hello World")
})


module.exports = app ;
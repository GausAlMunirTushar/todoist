const express = require("express")
const connectDB = require("./config/database")
const app = express()
const authRoute = require('./routes/authRoutes')

// middlewares 
app.use(express.json())

// Database Connection
connectDB()

app.get("/", (req, res) => {
    res.send("Hello World")
})

// api versioning
app.use("/api/v1", authRoute)

module.exports = app ;
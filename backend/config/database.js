const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/todoist'
const connectDB = async (req, res) => {
    try {
        await mongoose.connect(DB_URI)
        .then(()=> {
            console.log("Database Connected")
        })
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        })
    }
}

module.exports = connectDB;
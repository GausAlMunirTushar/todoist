const {Router, } = require("express")
const { register, login,  } = require("../controllers/userControllers");
const authRoute = Router()

// SIGN UP
authRoute.post("/register", register )

// SIGN IN 
authRoute.post("/login", login)

module.exports = authRoute;
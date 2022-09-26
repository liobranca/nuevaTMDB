const express = require("express")
const router = express.Router()
const { register, login, userDetails, logOut, getAll, perfil } = require("../controllers/userController")
const { validateAuth } = require("../middlewar/auth")



router.get("/userDetails/:id", userDetails)
router.get("/perfil", validateAuth, perfil)
router.get("/getAll", getAll)
router.post("/logOut", logOut)
router.post("/register", register)
router.post("/login", login) 

module.exports = router
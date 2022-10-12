const express = require("express")
const { agregarFavoritos, getFavoritos, deleteFavoritos } = require("../controllers/favoritosController")
const { validateAuth } = require("../middlewar/auth")
const router = express.Router()

router.post("/agregarFavoritos/:id", agregarFavoritos)
router.get("/getFavoritos/:id", getFavoritos)
router.delete("/deleteFavorito/:id", deleteFavoritos)

module.exports = router
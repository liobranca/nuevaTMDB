const express = require("express")
const { agregarFavoritos, getFavoritos, deleteFavoritos } = require("../controllers/favoritosController")
const { validateAuth } = require("../middlewar/auth")
const router = express.Router()

router.post("/agregarFavoritos", validateAuth, agregarFavoritos)
router.get("/getFavoritos", validateAuth, getFavoritos)
router.delete("/deleteFavorito/:id", deleteFavoritos)

module.exports = router
const express = require("express")
const MovieOrTv = require("../controllers/movieOrSerieController")
const router = express.Router()

router.get("/:prop",MovieOrTv.movieOrSerie )
router.get("/details/:prop/:id",MovieOrTv.details)
router.get("/search/:prop/:search", MovieOrTv.search )
module.exports = router
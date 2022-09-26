const express = require("express")
const router = express.Router()
const user = require ("./user")
const favoritos= require("./favoritos")
const movieOrSerie = require("./movieOrSerie")



router.use("/users", user)

router.use("/favoritos", favoritos)

router.use("/movieOrSerie", movieOrSerie)


router.get("/movies/:prop", (req, res, next) => {

    axios.get(`https://api.themoviedb.org/3/discover/${req.params.prop}?api_key=${api}&language=es-US&sort_by=popularity.desc`)
        .then(result => res.send(result.data))
})


module.exports = router
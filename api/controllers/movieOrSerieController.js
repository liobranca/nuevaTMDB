const { default: axios } = require("axios")

const api = "baa253862f185af96cac7a8c37803c83"
class MovieOrTv{
static async movieOrSerie(req, res, next) {
    try{

        const movieOrSerie= await axios.get(`https://api.themoviedb.org/3/discover/${req.params.prop}?api_key=${api}&language=es-US&sort_by=popularity.desc`)
        res.send(movieOrSerie.data.results)
    }
    catch{
        
    }
}
static async details(req, res, next) {
    console.log("ejecutando");
    try{
        const details = await axios.get(`https://api.themoviedb.org/3/${req.params.movieOrTvDetails}/${req.params.id}?api_key=${api}&language=es-US`)
        res.send(details.data)
    }
    catch{

    }
    
        
}
static async search(req, res, next) {
    console.log("lsaldaks");
    axios.get(`https://api.themoviedb.org/3/search/${req.params.prop}?query=${req.params.search}&api_key=${api}&language=es-US&sort_by=popularity.desc`)
        .then(result => res.send(result.data))
}
}
module.exports = MovieOrTv
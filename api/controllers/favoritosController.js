const { Favoritos } = require("../models")


exports.agregarFavoritos =(req, res) =>{
    const idMovie= req.body.movie.id
    const description = req.body.movie.overview
    const poster= req.body.movie.poster_path
    const tipo= req.body.movie.title? req.body.movie.title: req.body.movie.name
    Favoritos.findOrCreate({
        where:{
            idMovie,
            userId: req.params.id
    },
     defaults:{
        idMovie,
        poster,
        tipo,
        description,
        userId: req.params.id
    }
    })    
}
exports.getFavoritos= (req,res)=>{
    console.log(req.params.id);
    Favoritos.findAll({
        where:{
            userId:req.params.id
        }
    })
    .then(result => res.send(result))
}
exports.deleteFavoritos =(req, res, next) =>{
    Favoritos.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(()=> res.sendStatus(201))
}
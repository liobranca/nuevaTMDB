const { Favoritos } = require("../models")


exports.agregarFavoritos =(req, res) =>{
    const idMovie= req.body.dataMovie.id
    const description = req.body.dataMovie.overview
    const poster= req.body.dataMovie.poster_path
    const tipo= req.body.dataMovie.title? req.body.dataMovie.title: req.body.dataMovie.name
    Favoritos.findOrCreate({
        where:{
            idMovie,
            userId: req.user.id

    },
     defaults:{
        idMovie,
        poster,
        tipo,
        description,
        userId: req.user.id
    }
    })    
}
exports.getFavoritos= (req,res)=>{
    Favoritos.findAll({
        where:{
            userId:req.user.id
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
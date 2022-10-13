const { Favoritos } = require("../models")


exports.agregarFavoritos =(req, res) =>{
    console.log(req.body);
    const idMovie= req.body.movieOrTv.id
    const description = req.body.movieOrTv.overview
    const poster= req.body.movieOrTv.poster_path
    const tipo= req.body.movieOrTv.title? req.body.movieOrTv.title: req.body.movieOrTv.name
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
    console.log("laskjdaslkdj");
    Favoritos.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(()=> res.sendStatus(201))
}
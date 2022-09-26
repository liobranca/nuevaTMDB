const S= require("sequelize")
const db = require("../db")

class Favoritos extends S.Model{}

Favoritos.init({

    idMovie:{
        type:S.INTEGER
    },
    poster:{
        type: S.STRING
    },
    description:{
        type:S.TEXT,
    },
    tipo:{
        type:S.STRING
    }

},{ sequelize:db, modelName:"favorito"})

module.exports= Favoritos
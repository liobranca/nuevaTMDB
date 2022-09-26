const S= require("sequelize")
const Favoritos = require("./Favoritos")
const User= require("./Users")

User.hasMany(Favoritos)


module.exports= { User, Favoritos}
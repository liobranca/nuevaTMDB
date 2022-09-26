const S= require("sequelize")
const db = require("../db")
const bcrypt = require( "bcrypt")

class User extends S.Model{

    hash(password,salt){
        return bcrypt.hash(password, salt)
    }

    validatePass(password){
       return this.hash(password, this.salt)
        .then(hash => hash === this.password) 
    }
}

User.init({
    salt:{
        type:S.STRING
    },
    name:{
        type:S.STRING
    },
    email:{
        type:S.STRING
    },
    password:{
        type: S.STRING
    }

},{ sequelize:db, modelName:"user"})
User.beforeCreate((user) =>{
    const salt = bcrypt.genSaltSync()
    user.salt= salt
    return user.hash(user.password, salt).then(hash =>{
        user.password=hash
    })
})
module.exports= User
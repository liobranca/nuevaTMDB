const { generateToken } = require("../config/token");
const { Favoritos } = require("../models");
const User = require("../models/Users");

exports.register = (req, res, next) => {
  User.findOrCreate({
    where: {
      email: req.body.email,
    },
    defaults: {
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
    },
  });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    
    if (!user) return res.sendStatus(401);
  

    user.validatePass(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        email: user.email,
        name: user.name,
        id: user.id,
      };
      const token = generateToken(payload);
      res.send(payload);
    });
  });
};

exports.userDetails = (req, res, next) => {
  console.log("ACA ESTA EL REQ PARAMS" + req.params.id);
  Favoritos.findAll({
    where: {
      userId: req.params.id,
    },
  }).then((favoritos) => res.send(favoritos));
};

exports.perfil = (req, res)=>{
    res.send(req.user)

}

exports.logOut= (req, res) => {
    res.clearCookie("token");
    console.log("lalalalalal");
  
    res.sendStatus(204);
  }
exports.getAll= (req, res, next) =>{
    User.findAll()
    .then(users => res.send(users))
}
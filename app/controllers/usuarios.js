const db = require("../../models");
const Usuarios = db.Usuarios;

exports.create = (req, res) => {
  const usuarioInput = {
    email: req.body.email,
    senha: req.body.senha
  };

  Usuarios.create(usuarioInput)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar usuario."
      });
    });
};

exports.find = (req, res) => {
  email = req.query.email;
  senha = req.query.senha;

  Usuarios.findAll({ where: { email: email, senha: senha } })
    .then(data => {
      if (data.length >= 1) {
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    })
};

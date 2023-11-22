const db = require("../../models");
const Materias = db.Materias;

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const materia = {
    nome: req.body.nome,
    descricao: req.body.descricao
  };

  Materias.create(materia)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Erro ao criar materia."
      });
    });
};

exports.findAll = (req, res) => {
  Materias.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao buscar materias."
      });
    });
};

exports.findOne = (req, res) => {
  id = req.params.id;

  Materias.findByPk(id)
    .then(data => {
      res.send(data);
    })
};

exports.update = (req, res) => {

};

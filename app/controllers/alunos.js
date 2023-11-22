const db = require("../../models");
const Alunos = db.Alunos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const aluno = {
    nome: req.body.nome,
    matricula: req.body.matricula
  };

  Alunos.create(aluno)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {
  const turmaId = req.query.turmaId;
  var condition = turmaId ? { turmaId: turmaId } : null;

  Alunos.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  id = req.params.id;

  Alunos.findByPk(id)
    .then(data => {
      res.send(data);
    })
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

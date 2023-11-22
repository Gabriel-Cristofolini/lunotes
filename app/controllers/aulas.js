const db = require("../../models");
const Aulas = db.Aulas;

exports.create = (req, res) => {
  if (!req.body.data) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const aula = {
    data: req.body.data,
    turmaId: req.body.turmaId
  };

  Aulas.create(aula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar materia."
      });
    });
};

exports.findAll = (req, res) => {
  const turmaId = req.query.turmaId;
  var condition = turmaId ? { turmaId: turmaId } : null;

  Aulas.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao buscar aulas."
      });
    });
};

exports.findOne = (req, res) => {
  id = req.params.id;

  Aulas.findByPk(id)
    .then(data => {
      res.send(data);
    })
};

exports.createConteudo = (req, res) => {
  id = req.params.id;

  Aulas.update({ conteudo: res.body.conteudo }, { where: { id: id } })
    .then(data => {
      res.send(data);
    })
}

exports.createAnotacao = (req, res) => {
  id = req.params.id;

  Aulas.update({ anotacao: res.body.anotacao }, { where: { id: id } })
    .then(data => {
      res.send(data);
    })
}

exports.delete = (req, res) => {
  id = req.params.id;

  Aulas.destroy({ where: { id: id } })
    .then(() => {
      res.sendStatus(200);
    })
}

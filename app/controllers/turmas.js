const db = require("../../models");
const Turmas = db.Turmas;
const Alunos = db.Alunos;

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const turmaInput = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    semestre: req.body.semestre,
    ano: req.body.ano,
    materiaId: req.body.materiaId
  };

  Turmas.create(turmaInput)
    .then(turma => {
      const alunos = req.body.alunos.map((aluno) => { return { ...aluno, turmaId: turma.id } });

      Alunos.bulkCreate(alunos)
        .then(alunos => {
          res.send({turma, alunos: alunos});
        })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar materia."
      });
    });
};

exports.findAll = (req, res) => {
  const materiaId = req.query.materiaId;
  var condition = materiaId ? { materiaId: materiaId } : null;

  Turmas.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao buscar turmas."
      });
    });
};

exports.findOne = (req, res) => {
  id = req.params.id;

  Turmas.findByPk(id)
    .then(data => {
      res.send(data);
    })
};

exports.update = (req, res) => {

};

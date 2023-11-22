const db = require("../../models");
const Avaliacoes = db.Avaliacoes;
const AvaliacaoAlunos = db.AvaliacaoAlunos;

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const avaliacaoInput = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    peso: req.body.peso,
    aulaId: req.body.aulaId
  };

  Avaliacoes.create(avaliacaoInput)
    .then(avaliacao => {
      const avaliacaoAlunos = req.body.avaliacaoAlunos.map((avaliacaoAluno) => {
        return { ...avaliacaoAluno, avaliacaoId: avaliacao.id }
      });

      AvaliacaoAlunos.bulkCreate(avaliacaoAlunos)
        .then(avaliacaoAlunos => {
          res.send({avaliacao, avaliacaoAlunos: avaliacaoAlunos});
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
  const aulaId = req.query.aulaId;
  var condition = aulaId ? { aulaId: aulaId } : null;

  Avaliacoes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao buscar avaliacoes."
      });
    });
};

exports.findOne = (req, res) => {
  id = req.params.id;

  Avaliacoes.findByPk(id)
    .then(avaliacao => {
      const avaliacaoAlunos = AvaliacaoAlunos.findAll({ where: { avaliacaoId: id } })

      res.send({avaliacao, avaliacaoAlunos: avaliacaoAlunos});
    })
};

exports.update = (req, res) => {

};

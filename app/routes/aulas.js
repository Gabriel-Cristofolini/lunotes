module.exports = app => {
  const aulas = require("../controllers/aulas.js");

  var router = require("express").Router();

  router.post("/", aulas.create);

  router.get("/", aulas.findAll);

  router.get("/:id", aulas.findOne);

  router.post("/:id/conteudo", aulas.createConteudo);

  router.post("/:id/anotacao", aulas.createAnotacao);

  router.delete("/:id", aulas.delete);

  app.use('/api/aulas', router);
};

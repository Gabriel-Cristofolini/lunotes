module.exports = app => {
  const alunos = require("../controllers/alunos.js");

  var router = require("express").Router();

  router.post("/", alunos.create);

  router.get("/", alunos.findAll);

  router.get("/:id", alunos.findOne);

  router.put("/:id", alunos.update);

  app.use('/api/alunos', router);
};

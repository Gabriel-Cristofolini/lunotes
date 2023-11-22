module.exports = app => {
  const avaliacoes = require("../controllers/avaliacoes.js");

  var router = require("express").Router();

  router.post("/", avaliacoes.create);

  router.get("/", avaliacoes.findAll);

  router.get("/:id", avaliacoes.findOne);

  router.put("/:id", avaliacoes.update);

  app.use('/api/avaliacoes', router);
};

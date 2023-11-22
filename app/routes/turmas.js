module.exports = app => {
  const turmas = require("../controllers/turmas.js");

  var router = require("express").Router();

  router.post("/", turmas.create);

  router.get("/", turmas.findAll);

  router.get("/:id", turmas.findOne);

  router.put("/:id", turmas.update);

  app.use('/api/turmas', router);
};

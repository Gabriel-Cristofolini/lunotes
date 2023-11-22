module.exports = app => {
  const materias = require("../controllers/materias.js");

  var router = require("express").Router();

  router.post("/", materias.create);

  router.get("/", materias.findAll);

  router.get("/:id", materias.findOne);

  router.put("/:id", materias.update);

  app.use('/api/materias', router);
};

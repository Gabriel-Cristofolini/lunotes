module.exports = app => {
  const usuarios = require("../controllers/usuarios.js");

  var router = require("express").Router();

  router.post("/", usuarios.create);

  router.get("/", usuarios.find);

  app.use('/api/usuarios', router);
};

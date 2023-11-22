'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    static associate(models) {
      const Materias = sequelize.define('Materias');
      const Turmas = sequelize.define('Turmas');

      Materias.hasMany(Turmas);
    }
  }
  Materias.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materias',
  });
  return Materias;
};

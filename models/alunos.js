'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alunos.init({
    nome: DataTypes.STRING,
    matricula: DataTypes.STRING,
    turmaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};

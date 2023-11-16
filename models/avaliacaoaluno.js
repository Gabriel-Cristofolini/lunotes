'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvaliacaoAluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AvaliacaoAluno.init({
    nota: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'AvaliacaoAluno',
  });
  return AvaliacaoAluno;
};
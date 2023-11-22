'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Avaliacoes = sequelize.define('Avaliacoes');
      const Aulas = sequelize.define('Aulas');

      Avaliacoes.belongsTo(Aulas);
    }
  }
  Avaliacoes.init({
    nome: DataTypes.STRING,
    peso: DataTypes.FLOAT,
    descricao: DataTypes.STRING,
    aulaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Avaliacoes',
  });
  return Avaliacoes;
};

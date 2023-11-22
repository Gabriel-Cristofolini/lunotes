'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvaliacaoAlunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const AvaliacaoAlunos = sequelize.define('AvaliacaoAlunos');
      const Avaliacoes = sequelize.define('Avaliacoes');
      const Alunos = sequelize.define('Alunos');

      AvaliacaoAlunos.belongsTo(Avaliacoes);
      AvaliacaoAlunos.belongsTo(Alunos);
    }
  }
  AvaliacaoAlunos.init({
    nota: DataTypes.FLOAT,
    avaliacaoId: DataTypes.INTEGER,
    alunoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AvaliacaoAlunos',
  });
  return AvaliacaoAlunos;
};

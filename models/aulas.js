'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aulas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Aulas = sequelize.define('Aulas');
      const Turmas = sequelize.define('Turmas');

      Aulas.belongsTo(Turmas);
    }
  }
  Aulas.init({
    data: DataTypes.DATE,
    turmaId: DataTypes.INTEGER,
    conteudo: DataTypes.STRING,
    anotacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aulas',
  });
  return Aulas;
};

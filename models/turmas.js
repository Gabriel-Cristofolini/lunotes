'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const Turmas = sequelize.define('Turmas');
      const Materia = sequelize.define('Materia');

      Turmas.belongsTo(Materia);
    }
  }
  Turmas.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    semestre: DataTypes.INTEGER,
    ano: DataTypes.INTEGER,
    materiaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};

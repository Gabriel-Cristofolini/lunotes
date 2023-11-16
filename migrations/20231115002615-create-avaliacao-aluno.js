'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AvaliacaoAlunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nota: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      avaliacaoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 'Avaliacoes',
        referencesKey: 'id'
      },
      alunoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 'Alunos',
        referencesKey: 'id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AvaliacaoAlunos');
  }
};

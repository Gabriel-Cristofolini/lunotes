'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.FLOAT
      },
      descricao: {
        type: Sequelize.STRING
      },
      aulaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Aulas',
          },
          key: 'id'
        },
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
    await queryInterface.dropTable('Avaliacoes');
  }
};

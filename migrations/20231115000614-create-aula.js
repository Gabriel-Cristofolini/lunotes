'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      conteudo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      anotacao: {
        allowNull: true,
        type: Sequelize.STRING
      },
      turmaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Turmas',
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
    await queryInterface.dropTable('Aulas');
  }
};

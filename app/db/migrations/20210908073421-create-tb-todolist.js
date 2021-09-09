'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_todolists', {
      id_todolist: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_todo: {
        foreignKey:true,
        reference: {model: 'tb_todos', key: 'id_todo'},
        type: Sequelize.INTEGER
      },
      task: {
        type: Sequelize.STRING
      },
      id_status: {
        foreignKey:true,
        reference: {model: 'tb_statuses', key: 'id_status'},
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_todolists');
  }
};
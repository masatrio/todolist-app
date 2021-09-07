'use strict';
module.exports = {
  up: async (queryInterface, Datatypes) => {
    await queryInterface.createTable('tb_statuses', {
      id_role: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Datatypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: Datatypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Datatypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_statuses');
  }
};

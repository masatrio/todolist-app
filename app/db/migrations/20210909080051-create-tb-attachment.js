'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('tb_attachments', {
      id_attachment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_todolist: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: { model: 'tb_todolists', key: 'id_todolist' },
      },
      url: {
        type: DataTypes.STRING
      },
      caption: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_attachments');
  }
};

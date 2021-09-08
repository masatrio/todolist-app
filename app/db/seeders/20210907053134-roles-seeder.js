'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tb_roles', [{
      name: 'admin',
      description: 'Admin maintain and manage user',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'user',
      description: 'Users can perform all available CRUD actions in all todo items',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('tb_roles', null, {});
  }
};

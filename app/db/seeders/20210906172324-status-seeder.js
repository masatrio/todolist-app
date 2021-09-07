'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tb_statuses', [{
      name: 'Not Completed',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Completed',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('tb_statuses', null, {});
  }
};

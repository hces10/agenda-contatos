'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Henrique Cesar',
        email: "hces10@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stephany Fernandes',
        email: "tete@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laylla Fernandes',
        email: "lala@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('phones', [
      {
        userId: '1',
        phone: '16974568425',
        type: 'home',      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '2',
        phone: '16954872394',
        type: 'work',      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '3',
        phone: '16993485812',
        type: 'cellphone',    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '1',
        phone: '16988246587',
        type: 'cellphone',      
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('phones', null, {});
  }
};

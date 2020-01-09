'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = new Date();
    const sqllite_date = date.toISOString();   
    return queryInterface.bulkInsert('Employees',
      [   
          {
            firstName: 'A',
            lastName: 'B',
            department: 'test',
            email: 'test@test.com',
            hireDate: '2019-11-09 01:02:43.115 +00:00',
            position: 'Pro',
            location: 'Buc',
            managerId: null,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00',
          }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};

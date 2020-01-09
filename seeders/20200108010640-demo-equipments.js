'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Equipment',
    [   
          {
            name: 'A',
            serial: 'A',
            type: 'test',
            model: 'alfa',
            employeeId: 1,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00',
          },
          {
            name: 'B',
            serial: 'B',
            type: 'test',
            model: 'alfa',
            employeeId: 1,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00',
          },
          {
            name: 'C',
            serial: 'C',
            type: 'test',
            model: 'alfa',
            employeeId: 1,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00',
          },
          {
            name: 'D',
            serial: 'D',
            type: 'test',
            model: 'alfa',
            employeeId: 1,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00',
          },
          {
            name: 'E',
            serial: 'E',
            type: 'test',
            model: 'alfa',
            employeeId: 1,
            createdAt: '2019-11-09 01:02:43.115 +00:00',
            updatedAt: '2019-11-09 01:02:43.115 +00:00',
          },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Equipment', null, {});
  }
};

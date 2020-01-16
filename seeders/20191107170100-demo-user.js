'use strict';
const generation = require('../utils/randomGeneration');
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = generation.generateData(20,5);
    console.log(data);
    return queryInterface.bulkInsert('Employees', data.employees, {}).then((results) => {
        return queryInterface.bulkInsert('Users', data.users, {}).then(() => {
          return queryInterface.bulkInsert('Equipment', data.equipments, {});
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Equipment',  null, {'truncate': true}).then(() => {
      return queryInterface.bulkDelete('Users', null, {'truncate': true}).then(() => {
        return queryInterface.bulkDelete('Employees',   null, {'truncate': true});
      });
    });
  }
};

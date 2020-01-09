'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const crypto = require('crypto');
    return queryInterface.bulkInsert('Users',
    [   
    {
      userName: 'test',
      password: crypto.createHash('sha1').update('A').digest('base64'),
      email: 'test@test.com',
      createdAt: '2019-11-09 01:02:43.115 +00:00',
      updatedAt: '2019-11-09 01:02:43.115 +00:00',
    }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

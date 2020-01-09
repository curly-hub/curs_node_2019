'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      serial: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Employees'
          },
          key: 'id',
        },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipment');
  }
};
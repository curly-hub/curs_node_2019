'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      hireDate: {
        type: Sequelize.DATE
      },
      position: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      managerId: {
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
    return queryInterface.dropTable('Employees');
  }
};
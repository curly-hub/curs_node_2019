'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectEmployees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Projects'
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
    return queryInterface.dropTable('ProjectEmployees');
  }
};
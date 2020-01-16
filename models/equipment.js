'use strict';

module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('Equipment', {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    serial: DataTypes.STRING,
    type: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {sequelize});
  Equipment.associate = function(models) {
    Equipment.belongsTo(models.Employee, {as: "Employee", foreignKey: "employeeId"});
  };
  return Equipment;
};
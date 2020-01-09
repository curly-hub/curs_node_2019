'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    department: DataTypes.STRING,
    email: DataTypes.STRING,
    hireDate: DataTypes.DATE,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    managerId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Employee.associate = function(models) {
    Employee.hasOne(Employee, {as: "manager", sourceKey: "managerId", foreignKey: "id"});
    Employee.hasMany(models.Equipment, {as: "equipment", sourceKey: "id", foreignKey: "employeeId"})
  };
  return Employee;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    department: DataTypes.STRING,
    hireDate: DataTypes.DATE,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    managerId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Employee.associate = function(models) {
    Employee.hasOne(Employee, {as: "manager", sourceKey: "managerId", foreignKey: "id"});
    Employee.hasMany(models.Equipment, {as: "equipments", sourceKey: "id", foreignKey: "employeeId"});
    Employee.belongsToMany(models.Project, {
      through: 'ProjectEmployees',
      as: 'projects',
      foreignKey: 'employeeId'
    });
  };
  return Employee;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Employee, {as: "employee", sourceKey: "id", foreignKey: "id"});
  };
  return User;
};
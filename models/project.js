'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(models.Employee, {
      through: 'ProjectEmployees',
      as: 'employees',
      foreignKey: 'projectId'
    });
  };
  return Project;
};
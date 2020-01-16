'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectEmployee = sequelize.define('ProjectEmployee', {
    employeeId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  ProjectEmployee.associate = function(models) {
    ProjectEmployee.hasOne(models.Employee, {as: "employees", sourceKey: "employeeId", foreignKey: "id"});
    ProjectEmployee.hasOne(models.Project, {as: "projects", sourceKey: "projectId", foreignKey: "id"});
  };
  return ProjectEmployee;
};
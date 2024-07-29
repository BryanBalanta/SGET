const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const MaintenanceType = sequelize.define('MaintenanceType', {
  id_maintenance_type: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  maintenance_type_name: { type: DataTypes.STRING(65), allowNull: false },
  state: { type: DataTypes.STRING(65), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'maintenance_type',
  timestamps: false
});

module.exports = MaintenanceType;
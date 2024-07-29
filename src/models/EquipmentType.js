const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const EquipmentType = sequelize.define('EquipmentType', {
  id_equipment_type: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  equipment_type_name: { type: DataTypes.STRING(65), allowNull: true },
  state: { type: DataTypes.STRING(65), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'equipment_type',
  timestamps: false
});

module.exports = EquipmentType;
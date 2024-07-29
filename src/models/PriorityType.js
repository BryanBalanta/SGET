const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const PriorityType = sequelize.define('PriorityType', {
  id_priority_type: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  priority_type_name: { type: DataTypes.STRING(65), allowNull: false },
  state: { type: DataTypes.STRING(65), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'priority_type',
  timestamps: false
});

module.exports = PriorityType;
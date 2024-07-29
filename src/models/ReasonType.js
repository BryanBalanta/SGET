const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ReasonType = sequelize.define('ReasonType', {
  id_reason_type: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  reason_type_name: { type: DataTypes.STRING(65), allowNull: false },
  state: { type: DataTypes.STRING(65), allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'reason_type',
  timestamps: false
});

module.exports = ReasonType;
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Users = sequelize.define('Users', {
  id_users: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  dni: { type: DataTypes.STRING(65), allowNull: false, unique: true },
  name: { type: DataTypes.STRING(65), allowNull: false },
  email: { type: DataTypes.STRING(65), allowNull: true, unique: true },
  occupation: { type: DataTypes.STRING(65), allowNull: true },
  area: { type: DataTypes.STRING(65), allowNull: true },
  location: { type: DataTypes.STRING(65), allowNull: true },
  password: { type: DataTypes.STRING(65), allowNull: true },
  state: { type: DataTypes.STRING(65), allowNull: false },
  admission_date: { type: DataTypes.DATE, allowNull: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = Users;
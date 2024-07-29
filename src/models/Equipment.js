const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const EquipmentType = require('./EquipmentType');
const Admin = require('./Admin');
const Users = require('./Users');

const Equipment = sequelize.define('Equipment', {
  id_equipment: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(65), allowNull: false },
  assigned_to: { type: DataTypes.STRING(65), allowNull: false },
  serial: { type: DataTypes.STRING(65), allowNull: true  },
  model: { type: DataTypes.STRING(65), allowNull: true },
  brand: { type: DataTypes.STRING(65), allowNull: true },
  ram: { type: DataTypes.STRING(65), allowNull: true },
  ram_type: { type: DataTypes.STRING(65), allowNull: true },
  hard_drive: { type: DataTypes.STRING(65), allowNull: true },
  hard_drive_type: { type: DataTypes.STRING(65), allowNull: true },
  processor: { type: DataTypes.STRING(65), allowNull: true },
  operating_system: { type: DataTypes.STRING(65), allowNull: true },
  location: { type: DataTypes.STRING(65), allowNull: true },
  description: { type: DataTypes.STRING(65), allowNull: true },
  state: { type: DataTypes.STRING(65), allowNull: true },
  id_equipment_type: { type: DataTypes.INTEGER, 
    references: { 
      model: EquipmentType, 
      key: 'id_equipment_type' }
  },
  id_admin: { type: DataTypes.INTEGER,
    references: { 
      model: Admin, 
      key: 'id_admin' }
  },
  id_users: { type: DataTypes.INTEGER, 
    references: { 
      model: Users,
      key: 'id_users'
    }
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'equipment',
  timestamps: false
});

module.exports = Equipment;
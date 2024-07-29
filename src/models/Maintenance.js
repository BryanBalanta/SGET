const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const PriorityType = require('./PriorityType');
const MaintenanceType = require('./MaintenanceType');
const Equipment = require('./Equipment');

const Maintenance = sequelize.define('Maintenance', {
  id_maintenance: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(65), allowNull: false },
  description: { type: DataTypes.STRING(65), allowNull: false },
  id_priority_type: { type: DataTypes.INTEGER, 
    references: {
      model: PriorityType,
      key: 'id_priority_type'
    }
  },
  id_maintenance_type: { type: DataTypes.INTEGER,
    references: {
      model: MaintenanceType,
      key: 'id_maintenance_type'
    }
  },
  id_equipment: { type: DataTypes.INTEGER,
    references: {
      model: Equipment,
      key: 'id_equipment'
    }
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'maintenance',
  timestamps: false
});

module.exports = Maintenance;
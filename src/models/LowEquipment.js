const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Equipment = require('./Equipment');
const Maintenance = require('./Maintenance');
const PriorityType = require('./PriorityType');
const ReasonType = require('./ReasonType');

const LowEquipment = sequelize.define('LowEquipment', {
  id_low_equipment: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(65), allowNull: false },
  description: { type: DataTypes.STRING(65), allowNull: false },
  date_realization: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  state: { type: DataTypes.STRING(65), allowNull: false },
  id_equipment: { type: DataTypes.INTEGER, 
    references: {
      model: Equipment,
      key: 'id_equipment'
    }
  },
  id_maintenance: { type: DataTypes.INTEGER, 
    references: {
      model: Maintenance,
      key: 'id_maintenance'
    }
  },
  id_priority_type: { type: DataTypes.INTEGER,
    references: {
      model: PriorityType,
      key: 'id_priority_type'
    }
  },
  id_reason_type: {type: DataTypes.INTEGER,
    references: {
      model: ReasonType,
      key: 'id_reason_type'
    }
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'low_equipment',
  timestamps: false
});

module.exports = LowEquipment;
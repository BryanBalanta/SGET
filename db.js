const { Sequelize } = require('sequelize');

const Admin = require('./src/models/Admin');
const Users = require('./src/models/Users');
const EquipmentType = require('./src/models/EquipmentType'); 
const Equipment = require('./src/models/Equipment');
const PriorityType = require('./src/models/PriorityType');
const MaintenanceType = require('./src/models/MaintenanceType');
const Maintenance = require('./src/models/Maintenance');
const ReasonType = require('./src/models/ReasonType');
const LowEquipment = require('./src/models/LowEquipment');

const sequelize = new Sequelize('equipodb','root','',{
    host: 'localhost',
    dialect:  'mysql'
});

Admin.hasMany(Equipment, { foreignKey: 'id_admin' });
Equipment.belongsTo(Admin, { foreignKey: 'id_admin' });

Users.hasMany(Equipment, { foreignKey: 'id_users' });
Equipment.belongsTo(Users, { foreignKey: 'id_users' });

EquipmentType.hasMany(Equipment, { foreignKey: 'id_equipment_type' });
Equipment.belongsTo(EquipmentType, { foreignKey: 'id_equipment_type' });

PriorityType.hasMany(Maintenance, { foreignKey: 'id_priority_type' });
Maintenance.belongsTo(PriorityType, { foreignKey: 'id_priority_type' });

MaintenanceType.hasMany(Maintenance, { foreignKey: 'id_maintenance_type'});
Maintenance.belongsTo(MaintenanceType, {foreignKey: 'id_maintenance_type'});

Equipment.hasMany(Maintenance, { foreignKey: 'id_equipment' });
Maintenance.belongsTo(Equipment, { foreignKey: 'id_equipment' });

ReasonType.hasMany(LowEquipment, { foreignKey: 'id_reason_type' });
LowEquipment.belongsTo(ReasonType, { foreignKey: 'id_reason_type' });

PriorityType.hasMany(LowEquipment, { foreignKey: 'id_priority_type' });
LowEquipment.belongsTo(PriorityType, { foreignKey: 'id_priority_type' });

Maintenance.hasMany(LowEquipment, { foreignKey: 'id_maintenance' });
LowEquipment.belongsTo(Maintenance, { foreignKey: 'id_maintenance' });

Equipment.hasMany(LowEquipment, { foreignKey: 'id_equipment' });
LowEquipment.belongsTo(Equipment, { foreignKey: 'idequipment' });

//Sincroniza la base datos y define los modelos

sequelize.sync({ alter: true }).then(() =>{
    console.log('Database synced');
})

module.exports = sequelize;
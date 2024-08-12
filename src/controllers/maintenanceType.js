const { MaintenanceType }= require('../models');

const createMaintenance = async (req, res) => {
    try {
        const maintenanceType = await MaintenanceType.create(req.body);
        res.status(201).json(maintenanceType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMaintenanceType = async (req, res) => {
    try {
        const maintenanceTypes = await MaintenanceType.findAll();
        res.status(200).json(maintenanceTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMaintenanceTypesById = async (req, res) => {
    try {
        const maintenanceType = await MaintenanceType.findByPk(req.params.id);
        if (maintenanceType){
            res.status(200).json(maintenanceType);
        } else {
            res.status(404).json({ message: 'MaintenanceType no se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateMaintenanceType = async (req, res) => {
    try {
        const [updated] = await MaintenanceType.update(req.body, {
            where: { id_maintenance_type: req.params.id }
        });
        if(updated) {
            const updatedMaintenanceType = await MaintenanceType.findByPk(req.params.id);
            res.status(200).json(updatedMaintenanceType);
        } else {
            res.status(404).json({ message: 'MaintenanceType no se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteMaintenanceType = async (req, res) => {
    try {
        const deleted = await MaintenanceType.destroy({
            where: { id_maintenance_type: req.params.id }
        });
        if(deleted) {
            res.status(204).json({ message: 'MaintenanceType se elimino' });
        } else {
            res.status(404).json({ message: 'MaintenanceType se elimino' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createMaintenance,
    getMaintenanceType,
    getMaintenanceTypesById,
    updateMaintenanceType,
    deleteMaintenanceType
};
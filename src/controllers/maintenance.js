const { Maintenance } = require('../models');

const createMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.create(req.body);
        res.status(201).json(maintenance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMaintenances = async (req, res) => {
    try {
        const maintenances = await Maintenance.findAll();
        res.status(200).json(maintenances);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMaintenanceById = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByPK(req.params.id);
        if(maintenance){
            res.status(200).json(maintenance);
        } else {
            res.status(404).json({ message:'Maintenance no se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateMaintenance = async (req, res) => {
    try {
        const [updated] = await Maintenance.update(req.body, {
            where: { id_maintenance: req.params.id }
        });
        if(updated){
            const updatedMaintenance = await Maintenance.findByPK(req.params.id);
            res.status(204).json(updatedMaintenance);
        } else {
            res.status(404).json({ message: 'Maintenance no se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteMaintenance = async (req, res) => {
    try {
        const deleted = await Maintenance.destroy(req.body, {
            where: { id_maintenance:req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Maintenance deleted' });
        } else {
            res.status(404).json({ message: 'Maintenance not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });   
    }
}

module.exports = {
    createMaintenance,
    getMaintenances,
    getMaintenanceById,
    updateMaintenance,
    deleteMaintenance
}
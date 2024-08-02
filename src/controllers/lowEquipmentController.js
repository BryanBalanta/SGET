const { LowEquipment } = require('../models');

const createLowEquipment = async (req, res) => {
    try {
        const lowEquipment = await LowEquipment.create(req.body);
        res.status(201).json(lowEquipment);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const getLowEquipments = async (req, res) => {
    try {
        const lowEquipments = await LowEquipment.findAll();
        res.status(200).json(lowEquipments);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const getLowEquipmentById = async (req, res) => {
    try {
        const lowEquipment = await LowEquipment.findByPk(req.params.id);
    if (lowEquipment) {
        res.status(200).json(lowEquipment);
    } else {
        res.status(404).json({ message: 'Low equipment not found' });
    }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateLowEquipment = async (req, res) => {
    try {
        const [updated] = await LowEquipment.update(req.body, {
        where: { id_low_equipment: req.params.id }
    });
    if (updated) {
        const updatedLowEquipment = await LowEquipment.findByPk(req.params.id);
        res.status(200).json(updatedLowEquipment);
    } else {
        res.status(404).json({ message: 'Low equipment not found' });
    }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLowEquipment = async (req, res) => {
    try {
        const deleted = await LowEquipment.destroy({
        where: { id_low_equipment: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Low equipment deleted' });
        } else {
            res.status(404).json({ message: 'Low equipment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createLowEquipment,
    getLowEquipments,
    getLowEquipmentById,
    updateLowEquipment,
    deleteLowEquipment
};

const { Equipment } = require('../models');

const createEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.create(req.body);
        res.status(201).json(equipment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.findAll();
        res.status(200).json(equipments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEquipmentById = async (req, res) => {
    try {
        const equipment = await Equipment.findByPk(req.params.id);
        if (equipment) {
            res.status(200).json(equipment);
        } else {
            res.status(404).json({ message: 'Equipment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEquipment = async (req, res) => {
    try {
        const [updated] = await Equipment.update(req.body, {
            where: { id_equipment: req.params.id }
        });
        if (updated) {
            const updatedEquipment = await Equipment.findByPk(req.params.id);
            res.status(200).json(updatedEquipment);
        } else {
            res.status(404).json({ message: 'Equipment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEquipment = async (req, res) => {
    try {
        const deleted = await Equipment.destroy({
            where: { id_equipment: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Equipment deleted' });
        } else {
            res.status(404).json({ message: 'Equipment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createEquipment,
    getEquipments,
    getEquipmentById,
    updateEquipment,
    deleteEquipment
};
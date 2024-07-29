const { EquipmentType } = require('../models');

const createEquipmentType = async (req, res) => {
    try {
        const equipmentType = await EquipmentType.create(req.body);
        res.status(201).json(equipmentType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEquipmentTypes = async (req, res) => {
    try {
        const equipmentTypes = await EquipmentType.findAll();
        res.status(200).json(equipmentTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEquipmentTypeById = async (req, res) => {
    try {
        const equipmentType = await EquipmentType.findByPk(req.params.id);
        if (equipmentType) {
            res.status(200).json(equipmentType);
        } else {
            res.status(404).json({ message: 'Equipment type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEquipmentType = async (req, res) => {
    try {
        const [updated] = await EquipmentType.update(req.body, {
            where: { id_equipment_type: req.params.id }
        });
        if (updated) {
            const updatedEquipmentType = await EquipmentType.findByPk(req.params.id);
            res.status(200).json(updatedEquipmentType);
        } else {
            res.status(404).json({ message: 'Equipment type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEquipmentType = async (req, res) => {
    try {
        const deleted = await EquipmentType.destroy({
            where: { id_equipment_type: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Equipment type deleted' });
        } else {
            res.status(404).json({ message: 'Equipment type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createEquipmentType,
    getEquipmentTypes,
    getEquipmentTypeById,
    updateEquipmentType,
    deleteEquipmentType
};

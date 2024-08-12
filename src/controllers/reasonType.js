const { ReasonType } = require('../models');

const createReasonType = async (req, res) => {
    try {
        const reasonType = await ReasonType.create(req.body);
        res.status(201).json(reasonType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getReasonTypes = async (req, res) => {
    try {
        const reasonTypes = await ReasonType.findAll();
        res.status(200).json(reasonTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getReasonTypeById = async (req, res) => {
    try {
        const reasonType = await ReasonType.findByPk(req.params.id);
        if (reasonType) {
        res.status(200).json(reasonType);
        } else {
        res.status(404).json({ message: 'Reason type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateReasonType = async (req, res) => {
    try {
        const [updated] = await ReasonType.update(req.body, {
        where: { id_reason_type: req.params.id }
        });
        if (updated) {
        const updatedReasonType = await ReasonType.findByPk(req.params.id);
        res.status(200).json(updatedReasonType);
        } else {
        res.status(404).json({ message: 'Reason type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteReasonType = async (req, res) => {
    try {
        const deleted = await ReasonType.destroy({
        where: { id_reason_type: req.params.id }
        });
        if (deleted) {
        res.status(204).json({ message: 'Reason type deleted' });
        } else {
        res.status(404).json({ message: 'Reason type not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReasonType,
    getReasonTypes,
    getReasonTypeById,
    updateReasonType,
    deleteReasonType
};
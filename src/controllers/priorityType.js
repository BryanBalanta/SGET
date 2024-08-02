const PriorityType = require('../models');

const createPriorityType = async (req, res) => {
    try {
        const priorityType = await PriorityType.create(req.body);
        res.status(201).json(priorityType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPriorityType = async (req, res) => {
    try {
        const priorityTypes = await PriorityType.findAll();
        res.status(200).json(priorityTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPriorityTypeById = async (req, res) => {
    try {
        const priorityType = await PriorityType.findByPk(req.params.id);
        if(priorityType){
            res.status(200).json(priorityType);
        } else {
            res.status(404).json(priorityType);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePriorityType = async (req, res) => {
    try {
        cosnt [updated] = await PriorityType.update(req.body, {
            where: { id_priority_type: req.params.id }
        });
        if(updated) {
            const updatedPriorityType = await PriorityType.findByPk( req.params.id);
            res.status(200).json(updatedPriorityType);
        } else {
            res.status(404).json({ message: 'PriorityType no se encontro' });
        }
    } catch (error) {
        res.status(500).json( {error: error.message} );
    }
}

const deletePriorityType = async (req, res) => {
    try {
        const deleted = await PriorityType.destroy({
            where: { id_priority_type: req.params.id }
        });
        if(deleted) {
            res.status(204).json({ message: 'PriorityType se elimino' });
        } else {
            res.status(404).json({ message: 'PriorityType no se elimino' });
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    createPriorityType,
    getPriorityType,
    getPriorityTypeById,
    updatePriorityType,
    deletePriorityType
};
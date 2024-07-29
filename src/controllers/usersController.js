const { Users } = require('../models');

const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id);
        if (user) {
        res.status(200).json(user);
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const [updated] = await Users.update(req.body, {
        where: { id_users: req.params.id }
        });
        if (updated) {
        const updatedUser = await Users.findByPk(req.params.id);
        res.status(200).json(updatedUser);
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deleted = await Users.destroy({
        where: { id_users: req.params.id }
        });
        if (deleted) {
        res.status(204).json({ message: 'User deleted' });
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports={
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};


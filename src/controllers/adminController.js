const axios = require('axios');
const { Admin } = require('../models');

const createAdmin = async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.mesage })
    }
}

const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json ({ error: error.message })
    }
}

const getAdminById = async (req, res) => {
    const admin = await Admin.findByPK(req.params.id);
    try {
        if(admin){
            res.status(200).json(admin);
        } else{
            res.status(404).json({ message: 'No se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateAdmin = async (req, res) => {
    try {
        const [updated] = await Admin.update(req.body, {
            where: { id_admimn: req.params.id }
        });
        if(updated){
            const updatedAdmin = await Admin.findByPK(req.params.id);
            res.status(200).json(updatedAdmin);
        } else{
            res.status(404).json({ message: 'Admin no se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteAdmin = async (req, res) => {
    try {
        const deleted = await Admin.destroy({
            where: { id_admin: req.params.id }
        });
        if(deleted){
            res.status(204).json({ message: 'Admin eliminado' });
        } else {
            res.status(404).json({ message: 'Admin no se encontro' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports={
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
};
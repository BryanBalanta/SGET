const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('equipodb','root','',{
    host: 'localhost',
    dialect:  'mysql'
});

module.exports = sequelize;
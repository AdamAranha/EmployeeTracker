const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../db/connection')

const Role = db.define('role', {
    id: { type: Sequelize.STRING, primaryKey: true },
    title: { type: Sequelize.STRING },
    salary: { type: Sequelize.STRING },
    department_id: { type: Sequelize.STRING }
})

module.exports = Role
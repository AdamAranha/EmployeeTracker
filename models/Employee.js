const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../db/connection')

const Employee = db.define('employee', {
    id: { type: Sequelize.STRING, primaryKey: true },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    role_id: { type: Sequelize.STRING },
    manager_id: { type: Sequelize.STRING }
})

module.exports = Employee
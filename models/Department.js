const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../db/connection')

const Department = db.define('department', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: { type: Sequelize.STRING }
})

module.exports = Department
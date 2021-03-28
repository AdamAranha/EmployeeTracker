const Sequelize = require('sequelize');
const db = new Sequelize('employee_tracker', 'root', '1Ardiadcm!', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: { timestamps: false },
    pool: { max: 5, min: 0, idle: 10000 },
})

module.exports = db
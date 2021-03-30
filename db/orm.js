const db = require('./connection')('employee_tracker', '1Ardiadcm!')

async function showCompany() {
    const response = db.query('SELECT employees.first_name, employees.last_name,roles.title, roles.salary, departments.name FROM employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id')
    return response
}

async function showEmployee() {
    const response = db.query('SELECT employees.first_name, employees.last_name,roles.title, roles.salary, departments.name FROM employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id')
    return response
}

async function showRole() {
    const response = db.query('SELECT employees.first_name, employees.last_name,roles.title, roles.salary, departments.name FROM employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id')
    return response
}

async function showDepartment() {
    const response = db.query('SELECT employees.first_name, employees.last_name,roles.title, roles.salary, departments.name FROM employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id')
    return response
}

module.exports = { showCompany, showEmployee, showRole, showDepartment }

// 'SELECT employees.first_name, employees.last_name,departments.title, departments.salary FROM employees INNER JOIN roles ON roles.id = employees.role_id'
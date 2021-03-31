const db = require('./connection')('employee_tracker', '1Ardiadcm!')

async function showCompany() {
    const response = db.query('SELECT employees.first_name, employees.last_name,roles.title, roles.salary, departments.name FROM employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN departments ON roles.department_id = departments.id')
    return response
}

async function showEmployee() {
    const response = db.query('SELECT * FROM employees')
    return response
}

async function showRole() {
    const response = db.query('SELECT * FROM roles')
    return response
}

async function showDepartment() {
    const response = db.query('SELECT * FROM departments')
    return response
}

async function addEmployee(first_name, last_name, role, manager_id) {
    const response = db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}','${role}', '${manager_id}' )`)
    return response
}

async function addRole() {
    const response = db.query('')
    return response
}

async function addDepartment() {
    const response = db.query('')
    return response
}

module.exports = { showCompany, showEmployee, showRole, showDepartment, addEmployee, addRole, addDepartment }

// 'SELECT employees.first_name, employees.last_name,departments.title, departments.salary FROM employees INNER JOIN roles ON roles.id = employees.role_id'
const inquirer = require('inquirer')
const orm = require('./db/orm')

let roleList = []
let empList = []
let depList = []
let roleObj
let depObj

async function askUser() {
    updateEmpRoster()
    updateRoleRoster()
    updateDepRoster()
    pullRole()
    pullDep()
    const response = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: [
                    'View Company',
                    'View Employees',
                    'View Roles',
                    'View Departments',
                    'Add an Employee',
                    'Add a Role',
                    'Add a Department',
                    'Update Employee Information',
                    'Leave']
            }
        ]
    )

    switch (response.options) {
        case 'View Company':
            console.log('You selected: View Company');
            // Displays table of employees in console
            viewCompany()
            break;

        case 'View Employees':
            console.log('You selected: View Employees');
            viewEmployee()
            break;

        case 'View Roles':
            console.log('You selected: View Roles');
            viewRole()
            break;

        case 'View Departments':
            console.log('You selected: View Departments');
            viewDepartment()
            break;

        case 'Add an Employee':
            console.log('You selected: Add an Employee');
            addEmployee()
            break;

        case 'Add a Role':
            console.log('You selected: Add a Role');
            addRole()
            break;

        case 'Add a Department':
            console.log('You selected: Add a Department');
            addDepartment()
            break;

        case 'Update Employee Information':
            console.log('You selected: Update Employee Information');
            updateEmployee()
            break;

        case 'Leave':
            console.log('You selected: Leave')
            break;
    }
}


async function viewCompany() {
    let response = await orm.showCompany()
    console.table(response)
    askUser()
}

async function viewEmployee() {
    let response = await orm.showEmployee()
    console.table(response)
    askUser()
}

async function viewRole() {
    let response = await orm.showRole()
    console.table(response)
    askUser()
}

async function viewDepartment() {
    let response = await orm.showDepartment()
    console.table(response)
    askUser()
}

async function addEmployee() {
    const response = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?"
            },

            {
                type: 'input',
                name: 'lastName',
                message: "What is their last name?"
            },

            {
                type: 'list',
                name: 'role',
                message: "What is their role?",
                choices: roleList
            },

            {
                type: 'input',
                name: 'manager_id',
                message: "Who is their Manager?"
            }

        ]
    )

    let { firstName, lastName, role, manager_id } = response
    role = returnRoleID(role)
    const query = await orm.addEmployee(firstName, lastName, role, manager_id)
    askUser()
}

async function addRole() {
    const response = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of the new Role?'
            },

            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary for this position?'
            },

            {
                type: 'list',
                name: 'department',
                message: 'What department is it in?',
                choices: depList
            }
        ]
    )
    let { title, salary, department } = response
    department = returnDepID(department)

    const query = await orm.addRole(title, salary, department)
    askUser()
}

async function addDepartment() {
    const response = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the new Department'
            }
        ]
    )

    const department = response.name

    const query = await orm.addDepartment(department)
    askUser()
}

async function updateEmployee() {


    const response = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'employee',
                message: 'Who do you want to change?',
                choices: empList
            },

            {
                type: 'list',
                name: 'role',
                message: 'What is their new role?',
                choices: roleList
            }
        ]
    )
    let { employee, role } = response
    console.log(`Role for [${employee}] has been changed to [${role}]`)
    role = returnRoleID(role)

    const query = await orm.updateEmployee(employee, role)
    askUser()
}

async function updateRoleRoster() {
    roleList = []
    let query = await orm.showRole()
    query.forEach(element => {
        roleList.push(element.title)
    });
}

// Creates easy to access arrays of Roles and Departments respectively
async function updateEmpRoster() {
    empList = []
    let query = await orm.showEmployee()
    query.forEach(element => {
        empList.push(element.first_name)
    });
}
async function updateDepRoster() {
    depList = []
    let query = await orm.showDepartment()
    query.forEach(element => {
        depList.push(element.name)
    });
}


// Keeps local versions of Role and Department databases to avoid pulling unfilled promises for the asynchronous functions
async function pullRole() {
    roleObj = await orm.showRole()
}
async function pullDep() {
    depObj = await orm.showDepartment()
}

// Changes the Role and Department words into their respective ID numbers
function returnRoleID(role) {
    let id
    roleObj.forEach(element => {
        if (element.title == role) id = element.id
    })
    return id
}
function returnDepID(department) {
    let id
    depObj.forEach(element => {
        if (element.name == department) id = element.id
    })
    return id
}



askUser()






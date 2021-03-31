
// const db = require('./db/connection');
const inquirer = require('inquirer')
const orm = require('./db/orm')

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1Ardiadcm!',
//     database: 'employee_tracker'
// })

// db.connect((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('MySql connected...');

// })

async function askUser() {
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
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant', 'Lawyer', 'Legal Team Lead']
            },

            {
                type: 'input',
                name: 'manager_id',
                message: "Who is their Manager?"
            }

        ]
    )

    const { firstName, lastName, manager_id } = response
    let role

    switch (response.role) {
        case 'Sales Lead':
            role = 1;
            break;

        case 'SalesPerson':
            role = 2;
            break;

        case 'Lead Engineer':
            role = 3;
            break;

        case 'Software Engineer':
            role = 4;
            break;

        case 'Accountant':
            role = 5;
            break;

        case 'Lawyer':
            role = 6;
            break;

        case 'Legal Team Lead':
            role = 7;
            break;
    }
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
                choices: ['Sales', 'Finance', 'Engineering', 'Legal']
            }
        ]
    )
    let department
    const { title, salary } = response

    switch (response.department) {
        case 'Sales':
            department = 1
            break

        case 'Finance':
            department = 2
            break

        case 'Engineering':
            department = 3
            break

        case 'Legal':
            department = 4
            break
    }

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

askUser()





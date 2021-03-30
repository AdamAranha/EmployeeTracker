
// const db = require('./db/connection');
const inquirer = require('inquirer')
const orm = require('./db/orm')




const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1Ardiadcm!',
    database: 'employee_tracker'
})

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('MySql connected...');
    askUser()
})

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
                    'Update Employee Information']
            }
        ]
    )

    switch (response.options) {
        case 'View Company':
            console.log('You selected: View Company');
            // Displays table of employees in console
            viewCompany()
            // encore()
            break;

        case 'View Employees':
            console.log('You selected: View Employees');
            viewEmployee()
            encore()
            break;

        case 'View Roles':
            console.log('You selected: View Roles');
            viewRole()
            encore()
            break;

        case 'View Departments':
            console.log('You selected: View Departments');
            viewDepartment()
            encore()
            break;

        case 'Add an Employee':
            console.log('You selected: Add an Employee');
            addEmployee()
            encore()
            break;

        case 'Add a Role':
            console.log('You selected: Add a Role');
            addRole()
            encore()
            break;

        case 'Add a Department':
            console.log('You selected: Add a Department');
            addDepartment()
            encore()
            break;

        case 'Update Employee Information':
            console.log('You selected: Update Employee Information');
            updateEmployee()
            encore()
            break;

        case 'Leave':
            console.log('You selected: Leave')
            break;
    }
}

const encore = () => askUser();

async function viewCompany() {
    let response = await orm.showCompany()
    console.table(response)
}

async function viewEmployee() {
    let response = await orm.showEmployee()
    console.table(response)
}

async function viewRole() {
    let response = await orm.showRole()
    console.table(response)
}

async function viewDepartment() {
    let response = await orm.showDepartment()
    console.table(response)
}





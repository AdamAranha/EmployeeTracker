const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db/connection');
const inquirer = require('inquirer')

const Department = require('./models/Department');
const Employee = require('./models/Employee')
const Role = require('./models/Role');
const { response } = require('express');



// db.authenticate()
//     .then(() => console.log('Database connected...'))
//     .catch(err => console.log('Error: ' + err));

// app.get('/', (req, res) => {
//     res.send('You are on the Landing Page!a');
// })

// app.get('/department', (req, res) => {
//     Department.findAll()
//         .then(gigs => {
//             console.log(gigs);
//             res.send(200)
//         })
//         .catch(err => res.send(err))
// })

// app.get('/role', (req, res) => {
//     Role.findAll()
//         .then(gigs => {
//             console.log(gigs);
//             res.send(200)
//         })
//         .catch(err => res.send(err))
// })

// app.get('/employee', (req, res) => {
//     Employee.findAll()
//         .then(gigs => {
//             console.log(gigs);
//             res.send(200)
//         })
//         .catch(err => res.send(err))
// })

// app.listen(PORT, console.log(`Listening on: http://localhost:${PORT}`));


async function askUser() {
    const response = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ['View Employees', 'Add and Employee', 'Update Employee Information']
            }
        ]
    )

    switch (response.options) {
        case 'View Employees':
            console.log('You selected: View Employees');
            // Displays table of employees in console
            displayEmployees()
            encore()
            break;

        case 'Add and Employee':
            console.log('You selected: Add and Employee');
            addEmployee()
            encore()
            break;

        case 'Update Employee Information':
            console.log('You selected: Update Employee Information');
            updateEmployee()
            encore()
            break;
    }
}

const encore = () => askUser();

function displayEmployees() {

}



askUser()
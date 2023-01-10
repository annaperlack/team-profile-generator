const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
let employees = []

function addManager() {
    inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your maanger',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of your manager',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of your manager',
            },
            {
                type: 'input',
                name: 'number',
                message: 'What is the office number of your maanger',
            },
       ])
       .then((answers) => {
        const manager = new Manager(answers.id, answers.name, answers.email, answers.number)
        employees.push(manager)
       
        //trigger function that asks my user if they want to add another employee or are they ready to build the team?
       })
}
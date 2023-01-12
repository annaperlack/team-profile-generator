const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
let employees = []

function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the manager?',
            },
            {
                type: 'input',
                name: 'number',
                message: 'What is the office number of the manager?',
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.id, answers.name, answers.email, answers.number)
            employees.push(manager)
            console.log(answers)
            promptNext()
        })

}
function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the engineer?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the engineer?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the github username of the engineer?',
            },

        ])
        .then((answers) => {
            const newEngineer = new Engineer(answers)
            employees.push(newEngineer)
            promptNext()
        })
}
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the intern?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the intern?',
            },
            {
                type: 'input',
                name: 'number',
                message: 'What school did the intern attend?',
            },
        ])
        .then((answers) => {
            const newIntern = new Intern(answers)
            employees.push(newIntern)
            promptNext()
        })
}

function promptNext() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'What do you want to do next?',
                choices: [
                    { name: 'add an engineer', value: 'engineer' },
                    { name: 'add an intern', value: 'intern' },
                    { name: 'complete team profile', value: 'done' },
                ],
            },

        ])
        .then((answers) => {
            if (answers.choices == 'engineer') {
                createEngineer()
            } else if (answers.choices == 'intern') {
                createIntern()
            } else {
                const htmlText = generateHTML(employees)
                fs.writeFile('index.html', htmlText, (err) =>
                    err ? console.log(err) : console.log('Successfully created team profile!'))
            }
        })
}


function generateHTML(employees) {
    let cardsHTML = ''
    console.log(employees)
    for (let i = 0; i < employees.length; i++) {
        if (employees[i] instanceof Intern) {
            cardsHTML += generateInternCard(employees[i])
        } else if (employees[i] instanceof Engineer) {
            cardsHTML += generateEngineerCard(employees[i])
        } else if (employees[i] instanceof Manager) {
            cardsHTML += generateManagerCard(employees[i])
        }
    }
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
  <header>
  <h1>Team Profile</h1>
  </header>
    ${cardsHTML}   
  </body>
  </html>`
};

function generateManagerCard(manager) {
    return `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3 class="card-title">Manager ${manager.name}</h3>
    </div>
    <div class="card-body">
    <h6 class="card-subtitle mb-2 text-muted">${manager.id}</h6>
    <h6 class="card-subtitle mb-2 text-muted"><a href=mailto:${manager.email}>Email</a></h6>
    <h6 class="card-subtitle mb-2 text-muted">${manager.officeNumber}</h6>
    </div>
    </div>`
}
function generateEngineerCard(engineer) {
    return `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">
   <h3 class="card-title">Engineer ${engineer.id.name}</h3>
    </div>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.id.id}</h6>
    <h6 class="card-subtitle mb-2 text-muted"><a href=mailto:${engineer.id.email}>Email</a></h6>
    <h6 class="card-subtitle mb-2 text-muted"><a href="https://www.github.com/${engineer.id.github}">GitHub</a></h6>
    </div>
    </div>`
}
function generateInternCard(intern) {
    return `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3 class="card-title">Intern ${intern.id.name}</h3>
    </div>
    <h6 class="card-subtitle mb-2 text-muted">${intern.id.id}</h6>
    <h6 class="card-subtitle mb-2 text-muted"><a href=mailto:${intern.id.email}>Email</a></h6>
    <h6 class="card-subtitle mb-2 text-muted">${intern.id.number}</h6>
    </div>
    </div>`
}

createManager()

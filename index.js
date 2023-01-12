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
                name: 'number',
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
    
    if (employees instanceof Intern) {

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
    ${employees.map(generateCard)}

  </body>
  </html>`
};

function generateCard(employees) {
    const { name, id, email } = employees
    let specificContent = ''
    if (employees instanceof Intern) {
        specificContent = `
        <h6 class="card-subtitle mb-2 text-muted">${employees.school}</h6>
        `
    }
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h1 class="card-title">'Intern'${name}</h1>
      <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
      ${specificContent}
    </div>
  </div>
  `
};

function generateInternCard(){
    return 'intern'
}

function generateEngineerCard(){
    return 'engineer'
}

function generateManagerCard(){
    return 'manager'
}

createManager()

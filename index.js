const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
let employees = []

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
                    { name: 'add another employee', value: 'employee'},
                    { name: 'complete team profile', value: 'done' },
                ],
            },

        ])
        .then((answers) => {
            if (answers.choices == 'engineer') {
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
                        console.log(answers)
                    })
                    
            } else if (answers.choices == 'intern') {
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
                    })
                    .then((answers) => {
                        const newIntern = new Intern(answers)
                        employees.push(newIntern)
                    })
            } 
            
            else {
                const htmlText = generateHTML(answers)
                 fs.writeFile('index.html', htmlText, (err) =>
                err ? console.log(err) : console.log('Successfully created team profile!')
        );
            }
        })
}

function generateHTML({name, id, email, number}) {
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
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1 class="card-title">${name}</h1>
          <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${number}</h6>
        </div>
      </div>
  </body>
  </html>`
};

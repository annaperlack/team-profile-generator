const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github;
    }
    getgithub() {
        return this.github
    }
    getrole() {
        return "Engineer"
    }
}   

module.exports = Engineer
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber
    }
    getrole() {
        return "Manager"
    }
}   

module.exports = Manager
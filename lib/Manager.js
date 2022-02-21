const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, empId, email, officeNum) {
        super(name, empId, email);
        this.officeNum = officeNum; 
    }

    getOfficeNumber() {
        return this.officeNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
const Employee = require('./Employee'); 

class Intern extends Employee { 
    constructor (name, empId, email, university) {
        super(name, empId, email);
        this.university = university; 
    }

    getUniversity() {
        return this.university;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern; 
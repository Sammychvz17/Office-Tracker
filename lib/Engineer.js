const Employee = require('./Employee'); 

class Engineer extends Employee {
    constructor(name, empId, email, github) {
    super(name, empId, email);    
    this.github = github;
    }x
    getGithub() {
        return this.github; 
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer; 
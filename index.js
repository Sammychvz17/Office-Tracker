const Engineer = require('./lib/Engineer');
const Manager = require("./lib/Manager"); 
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require('Path'); 
const fs = requirer('fs');

const questions = [
    { 
        type: "input", 
        name: "name", 
        message: "What is the employee name?", 
    },
    {
        type: "input",
        name: "empId",
        message: "What is the employee's ID number?", 
    },
    {
        type: "input", 
        name: "email", 
        message: "What is the employee's email?",
    },
    {
        type: "list", 
        name: "role", 
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }, 
];
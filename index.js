const Engineer = require('./lib/Engineer');
const Manager = require("./lib/Manager"); 
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require('path'); 
const fs = require('fs');


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

const team = []; 
const getTeam = () => {
    inquirer 
        .prompt(questions)
        .then((inputOne) => {
            inquirer 
            .prompt ([
                {
                when: () => inputOne.role === "Manager",
                type: "input", 
                name: "officeNum", 
                message: "What is the office number?",
                },
                {
                    when: () => inputOne.role === "Engineer", 
                    type: "input", 
                    name: "github",
                    message: "What is the Employees Github Username?",
                },   
                {
                    when: () => inputOne.role === "Intern",
                    type: "input", 
                    name: "university",
                    message: "What is the student university?", 
                }, 
                {
                    type: "confirm", 
                    name: "anotherEmp",
                    Message: "Would you like to add another employee?",

                },
            ])

            .then ((inputTwo) => {
                if (inputOne.role === "Manager") {
                    const manager = new Manager(inputOne.name, inputOne.empId, inputOne.email, inputOne.role, inputTwo.officeNum);
                    team.push(manager);
                }
                if (inputOne.role === "Intern") {
                    const intern = new Intern(inputOne.name, inputOne.empId, inputOne.email, inputOne.role, inputTwo.university);
                    team.push(intern);
                }
                if (inputOne.role === "Engineer") {
                    const engineer = new Engineer(inputOne.name, inputOne.empId, inputOne.email, inputOne.role, inputTwo.github);
                    team.push(engineer);
                }
                if (inputTwo.anotherEmp) {
                    getTeam();
                } else {
                    team.forEach((team) => {
                        console.log(team);
                    });
                }
            });
        });
};

getTeam();


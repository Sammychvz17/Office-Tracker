const path = require("path");
const fs = require("fs");

const htmlTemp = path.resolve(__dirname, "../dist");

const render = (employees) => {
    const html = [];

    html.push(
        ...employees.filter((employee) => employee.getRole() === "Manager").map((manager) => managerCard(manager))
    );
    html.push (
        ...employees.filter((employee) => employee.getRole() === "Engineer").map((engineer) =>  engineerCard(engineer))
    );
    html.push (
        ...employees.filter((employee) => employee.getRole() === "Intern").map((intern) =>  engineerCard(intern))
    );
};
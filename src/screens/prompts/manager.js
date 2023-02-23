const inquirer = require("inquirer")
const baseEmployeePrompts = require("./base.js");

module.exports = async () => {
    // manager-details
    return await inquirer.prompt([
        ...baseEmployeePrompts("Manager"),
        {
            type: "input",
            name: "officeNumber",
            message: `Manager's office number`,
        },
    ])
}
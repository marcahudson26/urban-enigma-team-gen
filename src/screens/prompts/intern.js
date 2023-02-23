const inquirer = require("inquirer")
const baseEmployeePrompts = require("./base.js");

module.exports = async () => {
    return await inquirer.prompt([
        ...baseEmployeePrompts("Intern"),
        {
            type: "input",
            name: "school",
            message: `Intern's school`,
        },

    ])
}


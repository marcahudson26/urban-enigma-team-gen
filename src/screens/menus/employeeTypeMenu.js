const inquirer = require("inquirer");

// employee-type
module.exports = async () => {
    return await inquirer.prompt([
        {
            type: "list",
            name: "employeeTypeMenu",
            choices: [
                "Engineer", // add-engineer
                "Intern", // add-intern
            ],
            message: "What is the role of the new team member?",
        },
    ])
}

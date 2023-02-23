const inquirer = require("inquirer")
const baseEmployeePrompts = require("./base.js");

module.exports = async () => {
    // manager-details
    return await inquirer.prompt([
        ...baseEmployeePrompts("Engineer"),
        {
            type: "input",
            name: "github",
            message: `Engineer's github : `,
        },

    ])
}


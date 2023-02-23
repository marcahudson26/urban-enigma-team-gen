
const inquirer = require("inquirer");

module.exports = async (hasManager, hasNonManagerEmployee) => {
    const choices = [];

    if (!hasManager) {
        // manager-details
        choices.push("Set Manager")
    }

    if (hasManager) {
        // manager-details
        choices.push("Change Manager", "Manage Team Members")

        if (hasNonManagerEmployee) {
            choices.push("View Team", new inquirer.Separator(), "Take a break?")
        }
    }
    choices.push(new inquirer.Separator(), "Exit")

    return await inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            choices,
            message: 'What would you like to do, today?',
        },
    ]);
}
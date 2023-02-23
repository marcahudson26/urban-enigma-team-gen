
const inquirer = require("inquirer");

module.exports = async function showMainMenu(hasManager, hasNonManagerEmployee) {
    const choices = [];

    if (!hasManager) {
        // manager-details
        choices.push("Set Manager")
    }

    if (hasManager) {
        // manager-details
        choices.push("Change Manager", "Manage Team Members")

        //if (hasNonManagerEmployee) {
        choices.push("View Team")
        //}
    }
    choices.push("Exit")

    return await inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            choices,
            message: 'What would you like to do, today?',
        },
    ]);
}
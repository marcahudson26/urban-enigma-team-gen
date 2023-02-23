const inquirer = require("inquirer");

module.exports = async (hasNonManagerEmployee) => {
    const choices = [];

    choices.push("Add Team Member")

    if (hasNonManagerEmployee) {
        choices.push("Remove Team Member")
    }

    choices.push(new inquirer.Separator(), "< Back")

    return await inquirer.prompt([
        {
            type: "list",
            name: "manageTeamMenu",
            choices,
            message: 'What would you like to do, today?',
        },
    ]);
}

const inquirer = require("inquirer");
const { setTimeout } = require("timers/promises");

module.exports = async (team) => {
    const teamCheckboxes = team.map((member, i) => {
        return `#${member.getId()} ${member.getName()} (${member.getRole()})`
    });

    const { employeeTypeMenu } = await inquirer.prompt([
        {
            type: "checkbox",
            name: "employeeTypeMenu",
            choices: teamCheckboxes,
            message: "What is the role of the new team member?",
        },
    ])

    employeeTypeMenu
        .map(checkedValue => teamCheckboxes.findIndex(n => n === checkedValue))
        .reverse()
        .forEach(i => {
            team.splice(i, 1)
        });

    return team;
}

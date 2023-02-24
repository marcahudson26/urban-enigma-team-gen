// var commandLinePong = require("command-line-pong")
const open = require('open');
const createTeamPage = require("./helpers/createTeamPage.js")
// classes
const Manager = require("./models/Manager.js");
const Engineer = require("./models/Engineer.js");
const Intern = require("./models/Intern.js");
const generateHtmlPage = require("./helpers/generateHtmlPage.js");
// menus
const showMainMenu = require("./screens/menus/mainMenu.js");
const showManageTeamMenu = require("./screens/menus/manageTeamMenu.js");
const showEmployeeTypeMenu = require("./screens/menus/employeeTypeMenu.js");
const showRemoveMemberMenu = require("./screens/menus/removeMemberMenu.js");
// prompts
const showManagerPrompt = require("./screens/prompts/manager.js");
const showInternPrompt = require("./screens/prompts/intern.js");
const showEngineerPrompt = require("./screens/prompts/engineer.js");
// messages
const showLogoMessage = require("./screens/messages/logo.js")
const showWelcomeMessage = require("./screens/messages/welcome.js")

async function app() {
    await showWelcomeMessage();

    let team = [];

    let action = "Main Menu";

    while (true) {
        console.clear()
        await showLogoMessage();

        const manager = team.find(employee => employee.getRole() === "Manager")
        const teamMembers = team.filter(employee => employee.getRole() !== "Manager")

        if (action === "Set Manager") {
            const { name, id, email, officeNumber } = await showManagerPrompt();

            // add manager to team
            team.push(
                new Manager(name, id, email, officeNumber)
            )

            // next action will be main menu
            action = "Main Menu";
            continue;
        }

        if (action === "Change Manager") {
            const { name, id, email, officeNumber } = await showManagerPrompt();

            // remove existing manager from team
            const managerIndex = team.findIndex(member => member.getRole() === "Manager");
            team.splice(managerIndex, 1);

            // add manager back into team
            team.push(
                new Manager(name, id, email, officeNumber)
            )

            // next action will be main menu
            action = "Main Menu";
            continue;
        }

        if (action === "Save / View Team") {
            const url = createTeamPage(team);

            await open(url);
            // next action will be main menu
            action = "Main Menu";
            continue;
        }

        if (action === "Main Menu") {
            const answer = await showMainMenu(!!manager, teamMembers.length > 0);
            action = answer.mainMenu;
            continue;
        }

        if (action === "Manage Team Members") {
            const answer = await showManageTeamMenu(teamMembers.length > 0);
            action = answer.manageTeamMenu;
            continue;
        }

        if (action === "Add Team Member") {
            const answer = await showEmployeeTypeMenu();
            action = answer.employeeTypeMenu;
            continue;
        }

        if (action === "Engineer") {
            const { name, id, email, github } = await showEngineerPrompt();
            team.push(
                new Engineer(name, id, email, github)
            )
            action = "Manage Team Members";
            continue;
        }

        if (action === "Intern") {
            const { name, id, email, school } = await showInternPrompt();
            team.push(
                new Intern(name, id, email, school)
            )
            action = "Manage Team Members";
            continue;
        }

        if (action === "Remove Team Member") {
            const newTeam = await showRemoveMemberMenu(teamMembers);

            team = [
                manager,
                ...newTeam
            ]

            action = "Manage Team Members";
            continue;
        }

        if (action === "< Back") {
            action = "Main Menu";
            continue;
        }

        if (action === "Take a break?") {
            process.exit(1);
            return;
        }

        if (action === "Exit") {
            return
        }

        action = "Main Menu";
    }
}

module.exports = app;




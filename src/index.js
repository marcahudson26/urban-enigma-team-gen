const open = require('open');
const createTeamPage = require("./helpers/createTeamPage.js")
// classes
const Manager = require("./models/Manager.js");
const Engineer = require("./models/Engineer.js");
const Intern = require("./models/Intern.js");
const generateHtmlPage = require("./helpers/generateHtmlPage.js");
// menus
const showMainMenu = require("./screens/menus/mainMenu.js");
// prompts
const showManagerPrompt = require("./screens/prompts/manager.js");
// messages
const showLogoMessage = require("./screens/messages/logo.js")
const showWelcomeMessage = require("./screens/messages/welcome.js")

async function app() {
    await showWelcomeMessage();

    const team = [];
    let action = "mainMenu";

    while (true) {
        console.clear()
        await showLogoMessage();

        const manager = team.find(employee => employee.getRole() === "Manager")
        const teamMembers = team.filter(employee => employee.getRole() !== "Manager")

        if (action === "mainMenu") {
            const answer = await showMainMenu(!!manager, teamMembers.length > 0);

            // next action will be the option selected
            action = answer.mainMenu;
            continue;
        }

        if (action === "Set Manager") {
            const { name, id, email, officeNumber } = await showManagerPrompt();

            // add manager to team
            team.push(
                new Manager(name, id, email, officeNumber)
            )

            // next action will be main menu
            action = "mainMenu";
            continue;
        }

        if (action === "View Team") {
            const url = createTeamPage(team);

            await open(url);
            // next action will be main menu
            action = "mainMenu";
            continue;
        }

        if (action === "Exit") {
            return
        }

        action = "mainMenu";
    }
}

module.exports = app;

// // TODO: Write Code to gather information about the development team members, and render the HTML file.
// inquirer.prompt([
//     {
//         type: "list",
//         name: "main-menu",
//         choices: [
//             // manager-details
//             "Set manager", // condition: no manager

//             // manager-details
//             "Change manager", // condition: has manager

//             // manage-team
//             "Manage team members", // condition: has manager

//             "View Team", // condition: has manager && has employee (intern/engineer)

//             "Exit",
//         ],
//         message: 'What would you like to do?',
//     },

// ]);

// const baseEmployeePrompts = role => ([
//     // name
//     {
//         type: "input",
//         name: "name",
//         message: `${role} name`,
//     },
//     //id,
//     {
//         type: "input",
//         name: "id",
//         message: `${role} employee id`,
//     },
//     //emails
//     {
//         type: "input",
//         name: "email",
//         message: `${role} email address`,
//     },
// ]);

// // manager-details
// inquirer.prompt([
//     ...baseEmployeePrompts("Manager"),
//     {
//         type: "input",
//         name: "office-number",
//         message: `${role} office number`,
//     },
// ])

// // manage-team
// inquirer.prompt([
//     {
//         type: "input",
//         name: "employee-type-menu",
//         choices: [
//             // add-member
//             "Add team member",
//             // remove-member
//             "Remove team member", // condition: has team members (intern/engineers)
//             "< Back"
//         ],
//         message: "What would you like to do?",
//     },
// ])

// // add-member
// inquirer.prompt([
//     {
//         type: "input",
//         name: "employee-type",
//         choices: [
//             "Engineer", // add-engineer
//             "Intern", // add-intern
//         ],
//         message: "What is the role of the new team member?",
//     },
// ])

// // remove-member
// inquirer.prompt([
//     {
//         type: "input",
//         name: "employee-type",
//         choices: [
//             // dynamic list of employees available (intern/engineer only)
//         ],
//         message: "Which employee should be removed",
//     },
// ])

// // add-engineer
// inquirer.prompt([
//     ...baseEmployeePrompts("Engineer"),
//     {
//         type: "input",
//         name: "gitHub",
//         message: "what is your GitHub",
//     },

// ])

// // add-intern
// inquirer.prompt([
//     ...baseEmployeePrompts("Intern"),
//     {
//         type: "input",
//         name: "School",
//         message: "what school are you from",
//     },
// ])
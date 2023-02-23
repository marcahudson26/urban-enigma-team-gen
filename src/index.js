const Manager = require("./models/Manager.js");
const Engineer = require("./models/Engineer.js");
const Intern = require("./models/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHtmlPage = require("../src/helpers/generateHtmlPage.js");

const OUTPUT_PATH = path.resolve(__dirname, "..", "output");
const HTML_FILE_PATH = path.join(OUTPUT_PATH, "team.html");

/// APP LOOP

/// GENERATE

function createTeamPage() {
    if (!fs.existsSync(OUTPUT_PATH)) {
        fs.mkdirSync(OUTPUT_PATH);
    }

    const team = [
        new Manager("Marc", 1, "marc@work.com", "0123456789"),
        new Engineer("Matt", 2, "matt@work.com", "Matt-Jones-Developer"),
        new Intern("Chloe", 3, "chloe@work.com", "Sheffield")
    ];
    const html = generateHtmlPage(team)
    fs.writeFileSync(HTML_FILE_PATH, html)
    // open html
}

createTeamPage()

// TODO: Write Code to gather information about the development team members, and render the HTML file.
inquirer.prompt([
    {
        type: "list",
        name: "main-menu",
        choices: [
            // manager-details 
            "Set manager", // condition: no manager

            // manager-details 
            "Change manager", // condition: has manager

            // manage-team
            "Manage team members", // condition: has manager

            "View Team", // condition: has manager && has employee (intern/engineer)

            "Exit",
        ],
        message: 'What would you like to do?',
    },

]);

const baseEmployeePrompts = role => ([
    // name
    {
        type: "input",
        name: "name",
        message: `${role} name`,
    },
    //id,
    {
        type: "input",
        name: "id",
        message: `${role} employee id`,
    },
    //emails
    {
        type: "input",
        name: "email",
        message: `${role} email address`,
    },
]);

// manager-details
inquirer.prompt([
    ...baseEmployeePrompts("Manager"),
    {
        type: "input",
        name: "office-number",
        message: `${role} office number`,
    },
])

// manage-team
inquirer.prompt([
    {
        type: "input",
        name: "employee-type-menu",
        choices: [
            // add-member
            "Add team member",
            // remove-member
            "Remove team member", // condition: has team members (intern/engineers)
            "< Back"
        ],
        message: "What would you like to do?",
    },
])

// add-member
inquirer.prompt([
    {
        type: "input",
        name: "employee-type",
        choices: [
            "Engineer", // add-engineer
            "Intern", // add-intern
        ],
        message: "What is the role of the new team member?",
    },
])

// remove-member
inquirer.prompt([
    {
        type: "input",
        name: "employee-type",
        choices: [
            // dynamic list of employees available (intern/engineer only)
        ],
        message: "Which employee should be removed",
    },
])

// add-engineer
inquirer.prompt([
    ...baseEmployeePrompts("Engineer"),
    {
        type: "input",
        name: "gitHub",
        message: "what is your GitHub",
    },

])

// add-intern
inquirer.prompt([
    ...baseEmployeePrompts("Intern"),
    {
        type: "input",
        name: "School",
        message: "what school are you from",
    },
])
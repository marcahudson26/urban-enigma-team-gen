const Manager = require("./models/Manager");
const Engineer = require("./models/Engineer");
const Intern = require("./models/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHtmlPage = require("./helpers/generateHtmlPage.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const path = require("path");
const fs = require("fs");

const generateHtmlPage = require("./generateHtmlPage.js")

const OUTPUT_PATH = path.resolve(__dirname, "../..", "docs");
const HTML_FILE_PATH = path.join(OUTPUT_PATH, "index.html");

module.exports = (team) => {
    if (!fs.existsSync(OUTPUT_PATH)) {
        fs.mkdirSync(OUTPUT_PATH);
    }

    const html = generateHtmlPage(team)
    fs.writeFileSync(HTML_FILE_PATH, html)

    return `file:///${HTML_FILE_PATH}`;
}


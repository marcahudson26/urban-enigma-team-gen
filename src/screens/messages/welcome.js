const { setTimeout } = require("timers/promises");

module.exports = async () => {
    console.clear()
    const welcomeMessage = "Welcome to Urban Enigma - the team management cli";
    for (const char of welcomeMessage.split("")) {
        await setTimeout(50);
        process.stdout.write(char);
    }
    process.stdout.write("\n");
    await setTimeout(1000);
}

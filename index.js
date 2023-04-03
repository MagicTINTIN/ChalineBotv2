const debugmsg = require("./config/admin/debugmsg.json")
console.log(debugmsg.init.startInitMsg);

// Import librairies

// Import configurations
const initcfg = require("./config/admin/init.json")

const { importer } = require("./internals");
importer("nothing");

const { Client, Partials } = require('discord.js');
// Client creation and export
const client = new Client({
    intents: initcfg.intents,
    partials: initcfg.partials
});
exports.client = client;

// when Chaline logged in Discord
client.once('ready', () => {
    console.log(debugmsg.init.endInitMsg);
});

// Prevents bot from crash
process.on('uncaughtException', function (err) {
    console.error(err);

    logger.all(debugmsg.errors.mainMsg);

    try {
        errorwide = err.stack
        messerror = errorwide.match(/(.{1,1800})/g);
        for (const msgparterror of messerror) {
            if (initialized)
                logger.channel("```diff\n-> " + msgparterror + "\n```");
        }
    } catch (error) {
        console.error(error);
    }
});

client.login(process.env.TOKEN);
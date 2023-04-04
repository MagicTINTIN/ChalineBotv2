const debugmsg = require("./config/admin/debugmsg.json");
console.log(debugmsg.init.startInitMsg);
let initialized = false;

// Import configurations
const initcfg = require("./config/admin/init.json")

const { Client, Partials } = require('discord.js');
// Client creation and export
const client = new Client({
    intents: initcfg.intents,
    partials: initcfg.partials
});
exports.client = client;

// Import librairies
const bot = require("./internals");
bot.importercount(bot);

// when Chaline logged in Discord
client.once('ready', () => {
    console.log(debugmsg.init.endInitMsg);
    initialized = true;
    //bot.msg.sendch("817527540154630144", "Hello world");
});

// Prevents bot from crash
process.on('uncaughtException', function (err) {
    console.error(err);

    console.log(debugmsg.errors.mainMsg);
    if (initialized && false)
        try {
            logger.channel(debugmsg.errors.mainMsg);
            errorwide = err.stack
            messerror = errorwide.match(/(.{1,1800})/g);
            for (const msgparterror of messerror) {
                logger.channel("```diff\n-> " + msgparterror + "\n```");
            }
        } catch (error) {
            console.error(error);
        }
});

client.login(process.env.TOKEN);
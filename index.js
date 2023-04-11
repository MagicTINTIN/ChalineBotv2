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
const { tests } = require("./internals");


// when Chaline logged in Discord
client.once('ready', () => {
    initialized = true;
    bot.log.all([debugmsg.init.startInitMsg, bot.importercount(bot), debugmsg.init.endInitMsg], true);
});

// Prevents bot from crash
process.on('uncaughtException', function (err) {
    console.error(err);
    console.log(debugmsg.errors.mainMsg);
    if (initialized)
        try {
            bot.log.ch(debugmsg.errors.mainMsg);
            errorwide = err.stack
            messerror = errorwide.match(/(.{1,1800})/g);
            for (const msgparterror of messerror) {
                bot.log.ch("```diff\n-> " + msgparterror + "\n```");
            }
        } catch (error) {
            console.error(error);
        }
});

client.on('messageCreate', message => {
    tests.str(message.author.tag + " just sent a message : " + message.content.match(/(.{1,10})/g)[0] + "...");
});

client.login(process.env.TOKEN);
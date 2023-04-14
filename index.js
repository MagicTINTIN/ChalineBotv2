const debugmsg = require("./config/admin/debugmsg.json");
console.log(debugmsg.init.startInitMsg);
let initialized = false;
// to enable all logs set to 0 to disable all set to 1
const debugmode = 0;

// Import configurations
const initcfg = require("./config/admin/init.json");
const cfg = require("./config/admin/config.json");

const { Client, Partials } = require('discord.js');
// Client creation and export
const client = new Client({
    intents: initcfg.intents,
    partials: initcfg.partials
});
exports.client = client;

// Import librairies
const errors = require("./internals/tools/alert")
const bot = require("./internals");
const { tests } = require("./internals");

// Prevents bot from crash
process.on('uncaughtException', function (err) {
    errors.err(err, initialized);
});



// --- BOT EVENTS SECTION --- \\

// when Chaline logged in Discord
client.once('ready', () => {
    initialized = true;
    bot.log.all([debugmsg.init.startInitMsg, bot.importercount(bot), debugmsg.init.endInitMsg], true);
});

client.on('debug', async info => {
    if (debugmode != 1)
        errors.debug(info, initialized);
});

client.on('error', async error => {
    errors.err(error, initialized);
});

client.on('warn', async warning => {
    errors.warn(warning, initialized);
});

// triggered when bot joins a new server
client.on('guildCreate', async guild => {
    if (guild.id in cfg.mutedservers) return;
    //not implemanted yet
});



// --- GUILD EVENTS SECTION --- \\

// triggered when bot joins a new server
client.on('guildUpdate', async (oldGuild, newGuild) => {
    if (newGuild.id in cfg.mutedservers) return;
    //not implemanted yet
});



// --- MESSAGE EVENTS SECTION --- \\

client.on('messageCreate', message => {
    if (message.guild.id in cfg.mutedservers) return;
    tests.msg(message);
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.guild.id in cfg.mutedservers) return;
    //not implemanted yet
});

client.on('messageDelete', message => {
    if (message.guild.id in cfg.mutedservers) return;
    //not implemanted yet
});

client.on('messageDelete', message => {
    if (message.guild.id in cfg.mutedservers) return;
    //not implemanted yet
});



// --- INTERACTION EVENTS SECTION --- \\

// triggered when a slash command is executed
client.on('interactionCreate', interaction => {
    if (interaction.guild.id in cfg.mutedservers) return;
    bot.dscrd.interaction.on(interaction);
});



// --- MEMBER EVENTS SECTION --- \\

// triggered when a member join the server
client.on('guildMemberAdd', async member => {
    if (member.guild.id in cfg.mutedservers) return;
    // not implemented yet
});

// triggered when a member left the server
client.on('guildMemberRemove', async member => {
    if (member.guild.id in cfg.mutedservers) return;
    //not implemanted yet
});

// triggered when there is a member update
client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (newMember.guild.id in cfg.mutedservers) return;
    // when a member boost a server not muted
    if (newMember.premiumSinceTimestamp > 0 && oldMember.premiumSince != newMember.premiumSince)
        return;
    //   imaGen.boost(newMember)
});


client.login(process.env.TOKEN);
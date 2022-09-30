console.log("Starting Chaline...\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");

// Import librairies
const { Client, Intents } = require('discord.js');
// Client creation and export
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        'CHANNEL', // Required to receive DMs
    ]
});
exports.client = client;

// when Chaline logged in Discord
client.once('ready', () => {
    console.log("___________________\nChaline is ready");
});

client.login(process.env.TOKEN);
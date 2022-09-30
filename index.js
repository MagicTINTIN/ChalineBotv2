console.log("Starting Chaline...\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");

// Import librairies
const { Client, GatewayIntentBits, Partials } = require('discord.js');
// Client creation and export
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents
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
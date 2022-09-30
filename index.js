console.log("Starting Chaline...\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");

// Import librairies
const { importer } = require("./internals");
importer("nothing");

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

// Prevents bot from crash
process.on('uncaughtException', function (err) {
    console.error(err);

    logger.all("📌 Un chat m'a coupé la route, mais je suis indemne");

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
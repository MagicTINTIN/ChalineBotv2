const { Message } = require("discord.js");

module.exports = {
    /**
        * Print txt in terminal
        *
        * @param {string} txt txt to print
        */
    str: function (txt) {
        console.log(txt);
    },
    /**
        * Print message in terminal
        *
        * @param {Message} message message to print
        */
    msg: function (message) {
        console.log(message.author.tag + " just sent a message : " + message.content.match(/(.{1,10})/g)[0] + "...");
    }
}
const { Message } = require("discord.js");
const {base} = require("../index");

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
    },
    /**
        * Execute brainfuck code
        *
        * @param {Message} message message to print
        */
    bf: function (message) {
        if (message.content.startsWith("%bf")) {
            let bfres = base.bf(message.content.slice(3));
            message.reply("Executed in " + b + " steps :\n```brainfuck\n"+  + bfres.str + "\n [" + bfres.mem.join("|") + "]");
        }
    }
}
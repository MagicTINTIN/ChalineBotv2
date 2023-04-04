const { Embed, Attachment } = require("discord.js");
const dscrdElem = require("./element");

module.exports = {
    /**
        * Send a message
        *
        * @param {string|Channel} channel channel destination (id or element)
        * @param {string} content message to send
        * @param {Embed[]} [embeds] embed to send
        * @param {Attachment[]} [attachments] attachment to send 
        */
    sendch: function (channel, content, embed=null, attachment=[]) {
        const { client } = require("../../index.js");
        let chdest = (typeof(channel) == "string") ? dscrdElem.getchid(channel) : channel;
        if (chdest == null) {
            console.log("Wrong channel ID");
            return 1;
        }
        if (content.length > 0 || embeds != null || attachments != null)
        chdest.send({content:content, files: attachments, embeds:embeds})
    }
};  
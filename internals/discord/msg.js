const { Embed, Attachment } = require("discord.js");
const { client } = require("../../index.js");
const { base } = require("../index");

module.exports = {
    /**
        * Send a message
        *
        * @param {string|Channel} channel channel destination (id or element)
        * @param {string} content message to send
        * @param {Embed[]} [embeds] embed to send
        * @param {Attachment[]} [attachments] attachment to send 
        */
    sendch: function (channel, content, embeds=null, attachments=null) {
        
        let chdest = (typeof(channel) == "string") ? base.element.getchid(channel) : channel;
        if (chdest == null) {
            console.log("Wrong channel ID");
            return 1;
        }
        if (content.length > 0 || embeds != null || attachments != null)
        chdest.send({content:content, files: attachments, embeds:embeds})
    }
};  
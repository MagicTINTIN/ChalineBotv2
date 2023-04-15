const { dscrd } = require("../index");
const debugmsg = require("../../config/admin/debugmsg.json");

module.exports = {
    /**
        * Create a log in terminal and in channel
        *
        * @param {string|string[]} tolog message to log
        * @param {boolean} blockcode to set message appears as a block code in discord (default: false)
        * @param {string} framechar Message will appear between these characters (default: "")
        */
    all: function (tolog, blockcode = false, framechar = "") {
        let strtolog = (typeof (tolog) == "string") ? tolog : tolog.join("\n");
        console.log(strtolog);
        if (blockcode)
            dscrd.msg.sendch(debugmsg.debugch, framechar + "```\n" + strtolog + "\n```" + framechar);
        else
            dscrd.msg.sendch(debugmsg.debugch, framechar + strtolog + framechar);
    },
    /**
        * Create a log in channel
        *
        * @param {string|string[]} tolog message to log
        * @param {boolean} blockcode to set message appears as a block code in discord (default: false)
        * @param {string} framechar Message will appear between these characters (default: "")
        */
    ch: function (tolog, blockcode = false, framechar = "") {
        let strtolog = (typeof (tolog) == "string") ? tolog : tolog.join("\n");
        if (blockcode)
            dscrd.msg.sendch(debugmsg.debugch, framechar + "```\n" + strtolog + "\n```" + framechar);
        else
            dscrd.msg.sendch(debugmsg.debugch, framechar + strtolog + framechar);
    }
}
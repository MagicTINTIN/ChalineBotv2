const { dscrd } = require("../index");
const debugmsg = require("../../config/admin/debugmsg.json");

module.exports = {
    /**
        * Create a log in terminal and in channel
        *
        * @param {string|string[]} tolog message to log
        * @param {boolean} blockcode to set message appears as a block code in discord (default: false)
        */
    all: function (tolog, blockcode = false) {
        let strtolog = (typeof (tolog) == "string") ? tolog : tolog.join("\n");
        console.log(strtolog);
        if (blockcode)
            dscrd.msg.sendch(debugmsg.debugch, "```" + strtolog + "```");
        else
            dscrd.msg.sendch(debugmsg.debugch, strtolog);
    },
    /**
        * Create a log in channel
        *
        * @param {string|string[]} tolog message to log
        * @param {boolean} blockcode to set message appears as a block code in discord (default: false)
        */
    ch: function (tolog, blockcode = false) {
        let strtolog = (typeof (tolog) == "string") ? tolog : tolog.join("\n");
        if (blockcode)
            dscrd.msg.sendch(debugmsg.debugch, "```" + strtolog + "```");
        else
            dscrd.msg.sendch(debugmsg.debugch, strtolog);
    }
}
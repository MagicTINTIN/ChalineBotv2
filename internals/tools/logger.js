const { client } = require("../../index.js");
const { base, dscrd } = require("../index");

module.exports = {
    /**
        * Create a log in terminal and in channel
        *
        * @param {string} tolog message to log
        */
    all: function (tolog) {
        dscrd.msg.sendch("817527540154630144", tolog);
    }
}
const { GuildMember } = require("discord.js");
const { client } = require("../../index.js");

module.exports = {
    /**
        * Get member element by id
        *
        * @param {string} guildrid guild id the member belongs
        * @param {string} memberid user id of the member
        */
    get: function (guildrid, memberid) {
        return client.guilds.cache.get(guildrid).members.cache.get(memberid);
    },
    /**
        * Get member nickname by id
        *
        * @param {string} guildrid guild id the member belongs
        * @param {string} memberid user id of the member
        */
    gnickname: function (guildrid, memberid) {
        return this.get(guildrid, memberid).displayName;
    },
    /**
        * Get member hexadecimal color by id
        *
        * @param {string} guildrid guild id the member belongs
        * @param {string} memberid user id of the member
        */
    gcolor: function (guildrid, memberid) {
        return this.get(guildrid, memberid).displayHexColor;
    },


    // classical way (with Member Object)


    /**
        * Get member nickname
        *
        * @param {GuildMember} member
        */
    nickname: function (member) {
        return member.displayName;
    },
    /**
        * Get member hexadecimal color
        *
        * @param {GuildMember} member
        */
    color: function (member) {
        return member.displayHexColor;
    },
};  
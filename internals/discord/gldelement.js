const { client } = require("../../index.js");

module.exports = {
    /**
        * Get guild element by id
        *
        * @param {string} guildid guild to get by id
        */
    get: function (guildid) {
        return client.guilds.cache.get(guildid);
    },
    /**
        * Get guild name by id
        *
        * @param {string} guildid
        */
    name: function (guildid) {
        return this.getgldid(guildid).name;
    },
    /**
        * Get guild member count by id
        *
        * @param {string} guildid
        */
    membercount: function (guildid) {
        return this.getgldid(guildid).memberCount;
    }
};  
const { client } = require("../../../index.js");

module.exports = {
    /**
            * Get channel element by id
            *
            * @param {string} channelid channel to get by id
            */
    lstsrv: function () {
        let srvlst = client.guilds.cache.map(g => `${g.name} (${g.id})`)
        return `Handling ${srvlst.length} server${(srvlst.length > 1) ? "s" : ""} :\n - ${srvlst.join('\n - ')}`;
    },
}
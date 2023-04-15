const base = {
    gld: require("./discord/gldelement"),
    ch: require("./discord/chelement")
}
exports.base = base;

const dscrd = {
    msg: require("./discord/msg"),
    interaction: require("./discord/interactions")
}
exports.dscrd = dscrd;

module.exports = {
    base: base,
    dscrd: dscrd,
    tests: require("./tests/print"),
    importercount: require("./tools/importercount"),
    log: require("./tools/logger"),
    str: require("./tools/string"),
    rdm: require("./tools/random"),
    alert: require("./tools/alert"),
    file: require("./tools/file"),
    init: require("./tools/init"),
}
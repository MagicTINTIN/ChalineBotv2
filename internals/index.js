const base = {
    ch: require("./discord/elements/ch"),
    gld: require("./discord/elements/gld"),
    itr: require("./discord/elements/itr"),
    mbr: require("./discord/elements/mbr"),
    msg: require("./discord/elements/msg"),
    rct: require("./discord/elements/rct"),
    usr: require("./discord/elements/usr"),
}
exports.base = base;

const dscrd = {
    message: require("./discord/message"),
    interaction: require("./discord/interaction"),

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
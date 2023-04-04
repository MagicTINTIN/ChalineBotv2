const importer = require("./tools/importer");

const base = {
    element: require("./discord/element")
}
exports.base = base;

module.exports = {
    base: base,
    
    importercount: require("./tools/importer"),
}
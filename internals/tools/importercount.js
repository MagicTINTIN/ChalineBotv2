/**
        * Returns what have been imported
        *
        * @return {string} 
        */
function importercount(arg) {
    return `Imported ${Object.keys(arg).length} elements from internals : \n- ` + Object.keys(arg).join("\n- ");
};

module.exports = importercount;
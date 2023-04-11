/**
        * Returns what have been imported
        *
        * @return {string} 
        */
const importercount = (arg) => {
    return `Imported ${Object.keys(arg).length} elements from importer : \n- ` + Object.keys(arg).join("\n- ");
};

module.exports = importercount;
/**
        * Returns what have been imported
        *
        * @return {string} 
        */
function importercount(arg) {
    let text = `Imported ${Object.keys(arg).length} elements from internals : \n`
    for (const key in arg) {
        if (typeof (arg[key]) == "object") text += `- ${key} : ${Object.keys(arg[key]).length} subfct` + ((Object.keys(arg[key]).length > 1) ? "s\n" : "\n");
        else text += `- ${key}\n`;
    }
    return text;
};

module.exports = importercount;
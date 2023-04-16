/**
        * Returns what have been imported
        *
        * @return {string} 
        */
function importercount(arg) {
    let text = ""
    let totalfcts = 0;
    for (const key in arg) {
        if (typeof (arg[key]) == "object") {
            text += `- ${key} : ${Object.keys(arg[key]).length} subfct` + ((Object.keys(arg[key]).length > 1) ? "s\n" : "\n");
            totalfcts += Object.keys(arg[key]).length;
        }
        else {
            text += `- ${key}\n`;
            totalfcts++;
        };
    }
    return `Imported ${Object.keys(arg).length} elements (total = ${totalfcts} fcts) from internals : \n${text}`;
};

module.exports = importercount;
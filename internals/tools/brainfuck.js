const stepLimit = 5000;
/**
 * @typedef {Object} bfreturn
 * @property {string} code cleaned code
 * @property {int} step step number
 * @property {string} str string output
 * @property {int[]} mem memory
 */

String.prototype.cleantobf = function() {
    return this.replace(/[^\+\-\[\]\<\>\,\.]+/g, "");
 }

/**
        * Returns what have been imported
        *
        * @param {string} rawcode to be executed
        * @return {bfreturn} brainfuck execution
        */
function brainfuck(rawcode) {
    let code = rawcode.cleantobf();
    let res = {
        code:code.cleantobf() +"```",
        step:0,
        str:"",
        mem:[0]
    }
    let posprog = 0;
    let posmem = 0;
    while (posprog < code.length && res.step < stepLimit) {
        
    }
    res.str+="";
    return res;
}
module.exports = brainfuck;
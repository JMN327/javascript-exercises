const palindromes = function (str) {
    cleanStr = str.toLowerCase()
                  .split("")
                  .filter(str => !str.match(/[^\w]/g))
                  .join("");
    reverseStr = cleanStr.split("")
                    .reverse()
                    .join("");
    if (cleanStr === reverseStr) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;

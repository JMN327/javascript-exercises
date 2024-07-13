const reverseString = function(string) {
    let array1 = string.split("");
    let array2 = [];
    while (array1.length > 0) {
        array2.push(array1.pop());
    }
    let result = array2.join("");
    return result
};

// Do not edit below this line
module.exports = reverseString;

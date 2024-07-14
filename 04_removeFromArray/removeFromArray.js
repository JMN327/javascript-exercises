const removeFromArray = function() {
    const array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let check = array.indexOf(arguments[i]);
        while (check !== -1) {
            array.splice(check,1);
            check = array.indexOf(arguments[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

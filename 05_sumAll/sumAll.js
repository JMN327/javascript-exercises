const sumAll = function(a,b) {
    if (a < 0 
        || b < 0 
        || typeof a !== "number" 
        || typeof b !== "number"
        || Array.isArray(a)
        || Array.isArray(b)) {
        return "ERROR"
    }
    return ((Math.max(a,b) - Math.min(a,b) + 1)/2) * (a + b);
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let text = "";
    for (let index = 0; index < num; index++) {
        
        text += string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;

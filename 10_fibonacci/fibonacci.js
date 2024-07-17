const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS"
    let fibs = [0,1];
    let i = 2;
    while (i <= n) {
        fibs[i] = fibs.slice(i-2).reduce((a, b) => a + b)
        i++
    }
    return fibs[n];
};

// Do not edit below this line
module.exports = fibonacci;

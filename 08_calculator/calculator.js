const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function(array) {
	const product = array.reduce((a, b) => a * b, 1);
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
if (a === 0) {
  return 1;
}
let product = a;
for (let i = a - 1; i > 1; i--) {
  product *= i ;
}
return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const _ = require("lodash");
const R = require("rambda");

const solution = (num) => {
  const length = num.toString().length - 1;

  const newNumb = length > 5 ? num : String(num).padStart(5, '0');
  return `Value is ${newNumb}`;
};

module.exports = solution;

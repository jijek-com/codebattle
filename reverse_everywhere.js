const _ = require("lodash");
const R = require("rambda");

const solution = (words) => {
  return words.map(word => word.split('').reverse().join('')).reverse();
};

module.exports = solution;

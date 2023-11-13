const _ = require("lodash");
const R = require("rambda");

const solution = (numbers) => {
  return numbers.map(val => val * (-1));
};

module.exports = solution;

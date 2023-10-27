const _ = require("lodash");
const R = require("rambda");

const solution = (number) => {
  return new Set(String(number).split('')).size === 1;
};

module.exports = solution;

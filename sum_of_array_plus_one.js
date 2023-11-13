const _ = require("lodash");
const R = require("rambda");

const solution = (arr) => {
  return arr.map(val => val + 1).reduce((prev, next) => prev + next, 0);
};

module.exports = solution;

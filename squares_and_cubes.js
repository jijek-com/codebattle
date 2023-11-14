const _ = require("lodash");
const R = require("rambda");

const solution = (first, second) => {
  return Math.sqrt(first) === Math.cbrt(second);
};

module.exports = solution;

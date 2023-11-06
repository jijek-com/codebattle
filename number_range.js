const _ = require("lodash");
const R = require("rambda");

const solution = (num, lower, upper) => {
  return (num >= lower) && (num <= upper);
};

module.exports = solution;

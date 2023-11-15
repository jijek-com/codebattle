const _ = require("lodash");
const R = require("rambda");

const solution = (n) => {
  if ( n === 1) return 1;

  return ((1 + n) / 2) * n
};

module.exports = solution;

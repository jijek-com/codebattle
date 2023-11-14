const _ = require("lodash");
const R = require("rambda");

const solution = (arr) => {
  return arr.filter(val => val % 2 === 0).map(val => val * val).reduce((p,n) => p+n, 0);
};

module.exports = solution;

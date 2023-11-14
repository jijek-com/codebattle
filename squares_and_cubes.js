const _ = require("lodash");
const R = require("rambda");

const solution = (first, second) => {
  return Math.sqrt(first) === Math.cbrt(second);
};

module.exports = solution;

const _ = require("lodash");
const R = require("rambda");

const solution = (first, second) => {
  if (first === 0 && second === 0) return true;

  const div = second / first;
  return div * div === first && div*div*div === second;
};

module.exports = solution;

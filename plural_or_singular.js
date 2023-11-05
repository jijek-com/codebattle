const _ = require("lodash");
const R = require("rambda");

const solution = (word) => {
  return word.at(-1) === 's';
};

module.exports = solution;

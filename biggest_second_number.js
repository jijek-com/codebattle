const _ = require("lodash");
const R = require("rambda");

const solution = (numbers) => {
  return numbers.sort((a,b) => b - a)[1];
};

module.exports = solution;

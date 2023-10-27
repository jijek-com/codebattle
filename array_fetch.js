const _ = require("lodash");
const R = require("rambda");

const solution = (numbers, index, num) => {
  if (index < 0) return numbers.at(index) ?? num;
  return numbers[index] ?? num;
};

module.exports = solution;

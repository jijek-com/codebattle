const _ = require("lodash");
const R = require("rambda");

const solution = (numbers) => {
  let size = new Set(numbers).size;
  return size === 3 ? 0 : size === 1 ? 3 : 2;
};

module.exports = solution;

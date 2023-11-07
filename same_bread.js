const _ = require("lodash");
const R = require("rambda");

const solution = (first, second) => {
  return first[0] === second[0] && first.at(-1) === second.at(-1);
};

module.exports = solution;

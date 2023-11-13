const _ = require("lodash");
const R = require("rambda");

const solution = (s) => {
  return s[0] + (s.length - 2) + s.at(-1);
};

module.exports = solution;

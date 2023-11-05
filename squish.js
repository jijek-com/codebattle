const _ = require("lodash");
const R = require("rambda");

const solution = (str) => {
  return str.trim().replaceAll(/\s+/g, ' ');
};

module.exports = solution;

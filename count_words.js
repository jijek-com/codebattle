const _ = require("lodash");
const R = require("rambda");

const solution = (str) => {
  return str === '' ? 0 : str.split(' ').length;
};

module.exports = solution;

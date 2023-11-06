const _ = require("lodash");
const R = require("rambda");

const solution = (str) => {
  return str.replaceAll(/\d+/g, '').length === 0;
};

module.exports = solution;

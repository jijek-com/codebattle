const _ = require("lodash");
const R = require("rambda");

const solution = (s) => {
  let hash = new Set(s.split(''));

  return Array.from(hash).sort().join('');
};

module.exports = solution;

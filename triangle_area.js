const _ = require("lodash");
const R = require("rambda");

const solution = (a, b, c) => {
  const p = (a+b+c) / 2;
  const s = Math.sqrt(p * (p - a) * (p - b) * (p-c));

  return Math.floor(s) || 0;
};

module.exports = solution;

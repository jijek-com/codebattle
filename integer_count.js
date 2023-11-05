const _ = require("lodash");
const R = require("rambda");

const solution = (num) => {
  if (num<0) num = num*(-1);
  return String(num).length;
};

module.exports = solution;

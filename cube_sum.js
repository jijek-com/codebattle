const _ = require("lodash");
const R = require("rambda");

const solution = (num) => {
  let arr = Array(num+1).fill(0).map((_,i) => i);

  return arr.reduce((a,b) => a+b**3, 0)
};

module.exports = solution;

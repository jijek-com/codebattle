const _ = require("lodash");
const R = require("rambda");

const solution = (vegetables) => {
  return vegetables.split('tomato').length-1;
};

module.exports = solution;

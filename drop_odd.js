const _ = require("lodash");
const R = require("rambda");

const solution = (sentence) => {

  return sentence.split(' ').filter(res => res.length % 2 === 0).join(' ')
};

module.exports = solution;

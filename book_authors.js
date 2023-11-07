const _ = require("lodash");
const R = require("rambda");

const solution = (books) => {
  return books.map(val => val['authors']);
};

module.exports = solution;

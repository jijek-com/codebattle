const _ = require("lodash");
const R = require("rambda");

const solution = (words, character) => {
  return words.map(values => values.replaceAll(character, ''))
};

module.exports = solution;

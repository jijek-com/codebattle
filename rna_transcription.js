const _ = require("lodash");
const R = require("rambda");

const solution = (dna) => {
  let hash = {'G': 'C', 'C':'G','T':'A','U':'A', 'A':'U'};
  let str = '';

  for (const el of dna) {
    if (el in hash) {
      str += hash[el]
    } else {
      str += el
    }
  }
  return str;
};

module.exports = solution;

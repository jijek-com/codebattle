const _ = require("lodash");
const R = require("rambda");

const checkLetters = (s) => {
  return s.toLowerCase() !== s.toUpperCase()
}

const solution = (str) => {
  let s = '';
  const n = str.length;

  for (let i=0; i<n; i++) {
    if (checkLetters(str[i])) {
      const el = str[i] === str[i].toLowerCase() ? str[i].toUpperCase() : str[i].toLowerCase();
      s += el
    } else {
      s += str[i]
    }
  }

  return s;
};

module.exports = solution;

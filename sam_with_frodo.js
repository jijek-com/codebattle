const _ = require("lodash");
const R = require("rambda");

const solution = (persons) => {
  const n = persons.length;

  for (let i=0; i<n; i++) {
    if (persons[i] === "Sam") {
      if (persons[i-1] === "Frodo" || persons[i+1] === "Frodo") continue;
      return false
    }
  }

  return true
};

module.exports = solution;

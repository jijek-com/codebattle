const _ = require("lodash");
const R = require("rambda");

const solution = (person) => {
  switch(person) {
    case "Darth Vader": return "Luke, I am your father.";break;
    case "Leia": return "Luke, I am your sister.";break;
    case "R2D2": return "Luke, I am your droid.";break;
    case "Han": return "Luke, I am your brother in law.";break;
  }
};

module.exports = solution;

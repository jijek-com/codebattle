const _ = require("lodash");
const R = require("rambda");

const solution = (number) => {

  return number === 1 ? `${number} computer` : `${number} computers`;
};

module.exports = solution;

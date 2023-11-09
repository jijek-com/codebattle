const _ = require("lodash");
const R = require("rambda");

const solution = (names) => {
  return names.map(val => {
    let el = val.split(' ');

    return {'first': el[0], 'last': el[1]}
  });
};

module.exports = solution;

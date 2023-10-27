const _ = require("lodash");
const R = require("rambda");

const solution = (numbers) => {
  let ans = [];
  const n = numbers.length;

  for (let i=0; i<n; i++) {
    if (i % 2 === 0 && numbers[i] % 2 === 0) {
      ans.push(numbers[i])
    } else if (i % 2 !== 0 && numbers[i] % 2 !== 0) {
      ans.push(numbers[i])
    }
  }
  return ans.length === 0 ? [0] : ans
};

module.exports = solution;

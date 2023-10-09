// Представьте, что вы берете все числа от 1 до n и соединяете их в одну большую строку. Как много цифр между 0 и n ? Создайте функцию, которая рассчитывает это.

const _ = require("lodash");
const R = require("rambda");

const solution = (n) => {
  return [...Array(n).keys()].join('').length-1;
};

module.exports = solution;
  

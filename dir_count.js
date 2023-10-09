// Создайте функцию, которая подсчитывает количество директорий в массиве (в пути содержится директория/директории или указан путь к директории).

const _ = require("lodash");
const R = require("rambda");

const solution = (filepaths) => {
  return filepaths.filter(res => res.includes('/')).length;
};

module.exports = solution;

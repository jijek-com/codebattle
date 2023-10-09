// Создайте функцию, которая принимает нынешнее настроение и возвращает отформатированную строку, как в тестах.

const _ = require("lodash");
const R = require("rambda");

const solution = (mood) => {
  switch(mood) {
    case '': return 'Today, I am feeling neutral.';break;
    case 'happy': return 'Today, I am feeling happy.';break;
    case 'sad': return 'Today, I am feeling sad.';break;
    case 'good': return 'Today, I am feeling good.';break;
    case 'excited': return 'Today, I am feeling excited.';break;
    case 'confused': return 'Today, I am feeling confused.';break;
  }
};

module.exports = solution;

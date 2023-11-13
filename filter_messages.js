const _ = require("lodash");
const R = require("rambda");

const solution = (messages, user) => {
  let mes = messages.filter(res => res.user === user).map(res => res.text);

  return mes.length === 0 ? ['no messages!'] : mes
};

module.exports = solution;

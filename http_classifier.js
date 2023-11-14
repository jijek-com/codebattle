const _ = require("lodash");
const R = require("rambda");

const solution = (code) => {
  switch(String(code)[0]) {
    case '1': return 'informational';break;
    case '2': return 'success';break;
    case '3': return 'redirection';break;
    case '4': return 'client error';break;
    case '5': return 'server error';break;
    default: return 'unrecognized';break
  }
};

module.exports = solution;

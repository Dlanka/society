const Error = require("./Error");

class BadRequestError extends Error {
  constructor(message, stack = null) {
    super();
    this.code = 400;
    this.message = message;
    this.stack = stack;
  }
}

module.exports = BadRequestError;

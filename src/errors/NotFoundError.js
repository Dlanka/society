const Error = require("./Error");

class NotFoundError extends Error {
  constructor(message, stack = null) {
    super();
    this.code = 404;
    this.message = message;
    this.stack = stack;
  }
}

module.exports = NotFoundError;

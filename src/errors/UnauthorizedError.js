
const Error = require("./Error");

class UnauthorizedError extends Error {
  constructor(message, stack = null) {
    super();
    this.code = 404;
    this.message = message || 'Unauthorized';
    this.stack = stack;
  }
}

module.exports = UnauthorizedError;

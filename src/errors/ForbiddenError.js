const Error = require("./Error");

class ForbiddenError extends Error {
  constructor(message, stack = null) {
    super();
    this.code = 403;
    this.message = message || "Forbidden";
    this.stack = stack;
  }
}

module.exports = ForbiddenError;

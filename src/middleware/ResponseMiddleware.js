const ResponseMiddleware = function (req, res, next) {
  // Success
  res.success = function (result = null, message = "Success", code = 200) {
    return res.status(code).json({
      code,
      message,
      result,
    });
  };

  res.error = function (
    errors = {},
    message = "Error",
    code = 400,
    result = null
  ) {
    return res.status(code).json({
      errors,
      message,
      code,
      result,
    });
  };

  res.badRequest = function (
    errors = {},
    message = "Bad Request",
    code = 400,
    result = null
  ) {
    return res.status(code).error({ errors, code, message, result });
  };

  res.forbidden = function (
    errors = {},
    message = "Forbidden",
    code = 403,
    result = {}
  ) {
    return res.status(403).error({ errors, code, message, result });
  };

  res.unauthorize = function (
    errors = {},
    message = "Unauthorize",
    code = 401,
    result = null
  ) {
    return res.status(code).error({ errors, code, message, result });
  };

  res.internal = function (
    errors = {},
    code = 500,
    message = "Internal server error",
    result = null
  ) {
    return res.status(code).error({ errors, code, message, result });
  };

  next();
};

module.exports = ResponseMiddleware;

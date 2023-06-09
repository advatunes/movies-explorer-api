class STATUS_NOT_FOUND extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

class STATUS_BAD_REQUEST extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

class STATUS_INVALID_CREDENTIALS extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

class STATUS_UNAUTHORIZED_ACTION extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

class STATUS_CONFLICT extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = {
  STATUS_NOT_FOUND,
  STATUS_BAD_REQUEST,
  STATUS_INVALID_CREDENTIALS,
  STATUS_UNAUTHORIZED_ACTION,
  STATUS_CONFLICT,
};

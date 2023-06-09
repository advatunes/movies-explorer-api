const jwt = require("jsonwebtoken");
require("dotenv").config();

const { NODE_ENV, JWT_SECRET } = process.env;

class STATUS_INVALID_CREDENTIALS extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }
  const token = authorization.replace("Bearer ", "");
  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === "production" ? JWT_SECRET : "dev-secret",
    );
  } catch (err) {
    return next(new STATUS_INVALID_CREDENTIALS("Необходима авторизация"));
  }
  req.user = payload;

  return next();
};

module.exports = auth;

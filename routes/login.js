const loginRouter = require("express").Router();
const { login } = require("../controllers/login");
const { loginValidation } = require("../validation/validation");

loginRouter.post("/signin", loginValidation, login);

module.exports = loginRouter;

const registerRouter = require("express").Router();
const { register } = require("../controllers/register");
const { registerValidation } = require("../validation/validation");

registerRouter.post("/signup", registerValidation, register);

module.exports = registerRouter;

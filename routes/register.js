const registerRouter = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { register } = require("../controllers/register");

registerRouter.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
      name: Joi.string().min(2).max(30),
    }),
  }),
  register
);

module.exports = { registerRouter };

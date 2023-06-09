const { celebrate, Joi } = require("celebrate");
const urlRegex = require("../utils/constants");

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string()
      .pattern(urlRegex)
      .required(),
    trailerLink: Joi.string()
      .pattern(urlRegex)
      .required(),
    thumbnail: Joi.string()
      .pattern(urlRegex)
      .required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
});

const getUserInfoValidation = celebrate({
  headers: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

const updateProfileValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().min(2).max(30).required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const registerValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports = {
  registerValidation,
  loginValidation,
  getUserInfoValidation,
  updateProfileValidation,
  createMovieValidation,
  deleteMovieValidation,
};

const User = require("../models/user");
const { STATUS_CONFLICT } = require("../utils/errors");

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((users) => res.send(users))
    .catch(next);
};

const updateProfile = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { email, name },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send(user))
    .catch((error) => {
      if (error.code === 11000) {
        next(new STATUS_CONFLICT("Такой пользователь уже существует"));
      } else {
        next(error);
      }
    });
};

module.exports = { getUserInfo, updateProfile };

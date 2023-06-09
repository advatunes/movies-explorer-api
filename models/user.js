const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

class STATUS_INVALID_CREDENTIALS extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

userSchema.statics.findUserByCredentials = function (email, password, next) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        throw new STATUS_INVALID_CREDENTIALS(
          "Неверный адрес электронной почты или пароль",
        );
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw new STATUS_INVALID_CREDENTIALS(
            "Неверный адрес электронной почты или пароль",
          );
        }

        return user;
      });
    })
    .catch(next);
};

module.exports = mongoose.model("user", userSchema);

const bcrypt = require("bcryptjs");
const User = require("../models/user");

const register = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      email,
      password: hash,
      name,
    })
      .then((user) => {
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;
        res.status(201).send({ user: userWithoutPassword });
      })

      .catch(next);
  });
};

module.exports = { register };

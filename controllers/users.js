const User = require("../models/user");

const getUserInfo = (req, res, next) => {
  console.log(req.user._id);
  User.findById(req.user._id)
    .then((users) => res.send(users))
    .catch(next);
};

module.exports = { getUserInfo };

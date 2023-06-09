const userRouter = require("express").Router();
const { getUserInfo, updateProfile } = require("../controllers/users");
const { getUserInfoValidation, updateProfileValidation } = require("../validation/validation");

userRouter.get("/me", getUserInfoValidation, getUserInfo);

userRouter.patch("/me", updateProfileValidation, updateProfile);

module.exports = userRouter;

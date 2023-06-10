const userRouter = require("express").Router();
const { getUserInfo, updateProfile } = require("../controllers/users");
const { updateProfileValidation } = require("../validation/validation");

userRouter.get("/me", getUserInfo);

userRouter.patch("/me", updateProfileValidation, updateProfile);

module.exports = userRouter;

const router = require("express").Router();
const auth = require("../middlewares/auth");
const userRouter = require("./users");
const registerRouter = require("./register");
const loginRouter = require("./login");
const movieRouter = require("./movies");

router.post("/signup", registerRouter);
router.post("/signin", loginRouter);
router.use(auth);
router.use("/users", userRouter);
router.use("/movies", movieRouter);

module.exports = router;

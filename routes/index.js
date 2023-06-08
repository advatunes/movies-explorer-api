const router = require("express").Router();
const auth = require("../middlewares/auth");

const userRouter = require("./users");
// const { updateUserRouter } = require("./updateUser");
// const { getSavedMoviesRouter } = require("./getSavedMovies");
// const { createMovieRouter } = require("./createMovie");
// const { deleteMovieRouter } = require("./deleteMovie");
const { registerRouter } = require("./register");
const { loginRouter } = require("./login");

router.post("/signup", registerRouter);
router.post("/signin", loginRouter);
router.use(auth);
router.use("/users", userRouter);
// router.patch("/users/me", updateUserRouter);
// router.get("/movies", getSavedMoviesRouter);
// router.post("/movies", createMovieRouter);
// router.delete("/movies/:id", deleteMovieRouter);

module.exports = router;

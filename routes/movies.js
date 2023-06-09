const movieRouter = require("express").Router();
const { createMovie, getMovies, deleteMovieById } = require("../controllers/movies");
const { createMovieValidation, deleteMovieValidation } = require("../validation/validation");

movieRouter.get("/", getMovies);

movieRouter.post("/", createMovieValidation, createMovie);

movieRouter.delete("/:_id", deleteMovieValidation, deleteMovieById);

module.exports = movieRouter;

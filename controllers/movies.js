const Movie = require("../models/movie");

const {
  STATUS_NOT_FOUND,
  STATUS_UNAUTHORIZED_ACTION,
} = require("../utils/errors");

const createMovie = (req, res, next) => {
  const owner = req.user._id;

  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.send(movie))
    .catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movie) => res.send(movie))
    .catch(next);
};

const deleteMovieById = (req, res, next) => {
  Movie.findOne({ _id: req.params._id, owner: req.user._id })
    .then((movie) => {
      if (!movie) {
        throw new STATUS_NOT_FOUND("Карточка не найдена");
      }
      return movie.deleteOne();
    })
    .then(() => {
      res.send({ message: "Карточка удалена" });
    })
    .catch(next);
};

module.exports = { createMovie, getMovies, deleteMovieById };

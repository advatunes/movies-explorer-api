const mongoose = require("mongoose");
const urlRegex = require("../utils/constants");

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    match: urlRegex,
    required: true,
  },
  trailerLink: {
    type: String,
    match: urlRegex,
    required: true,
  },
  thumbnail: {
    type: String,
    match: urlRegex,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", movieSchema);

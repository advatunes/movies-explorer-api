const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const { errors } = require("celebrate");
const limiter = require("./utils/limiter");
const routes = require("./routes");
const config = require("./config");
const cors = require("cors");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const { STATUS_NOT_FOUND } = require("./utils/errors");
const errorHandlers = require("./middlewares/errorHandlers");

const app = express();

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cors({
    origin: ["http://localhost:3000", "https://advatunes.movies.nomoreparties.sbs"],
    credentials: true,
  })
);
app.options("*", cors());

app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use((req, res, next) => {
  next(new STATUS_NOT_FOUND("Запрашиваемый ресурс не найден"));
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandlers);

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});

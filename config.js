const { MONGO_URI } = process.env;

const config = {
  port: 3000,
  mongoUri: MONGO_URI,
};

module.exports = config;

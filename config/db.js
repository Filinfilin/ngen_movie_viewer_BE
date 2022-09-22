const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_NAME = process.env.DB_NAME;

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;

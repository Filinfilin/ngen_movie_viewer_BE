const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cors = require("cors");
const movieRoutes = require("./routes/movies.routes");
// const db = require("./config/db");
// const Router = require("./routes");

connectDB();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", movieRoutes);

mongoose.connection.once("open", function () {
  console.log("Connected successfully");
  app.listen(3000, () => {
    console.log("Server is running at port 3000");
  });
});

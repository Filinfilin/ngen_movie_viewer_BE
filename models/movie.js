const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  Title: String,
  Year: Number,
  Director: String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model("Movie", movieSchema);

const Movie = require("../models/movie");
// const db = require("../config/db")

const updateMovie = async (req, res) => {
  try {
    const { Title, Year, Director, _id } = req.body;
    const result = await Movie.updateOne(
      { _id: _id },
      {
        Title: Title,
        Year: Year,
        Director: Director,
      }
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
const getAllMovies = async (req, res) => {
  try {
    const result = await Movie.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

const getOneMovie = async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await Movie.find({ _id: _id });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Movie.deleteOne({ _id: id });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

const addNewMovie = async (req, res) => {
  try {
    const { Title, Year, Director } = req.body;
    const result = await Movie.create({
      Title: Title,
      Year: Year,
      Director: Director,
    });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getOneMovie,
  updateMovie,
  getAllMovies,
  deleteMovie,
  addNewMovie,
};

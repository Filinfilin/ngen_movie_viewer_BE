const express = require("express");
const movieController = require("../controllers/movies.controller");
const router = express.Router();

router.put("/movie", movieController.updateMovie);

router.get("/movies", movieController.getAllMovies);

router.get("/movie", movieController.getOneMovie);

router.delete("/movie/:id", movieController.deleteMovie);

router.post("/movie", movieController.addNewMovie);

module.exports = router;

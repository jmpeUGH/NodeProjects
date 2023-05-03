const express = require('express');

const router = express.Router();

const {getAllMovies,
    getMoviesId,
    getMoviesTitle,
    getMoviesGenre,
    getMoviesYear} = require("../controllers/movie.controllers");

router.get("/", getAllMovies);

router.get("/id/:id", getMoviesId);

router.get("/title/:title", getMoviesTitle);

router.get("/genre/:genre", getMoviesGenre);

router.get("/year/:year", getMoviesYear);


module.exports = router;
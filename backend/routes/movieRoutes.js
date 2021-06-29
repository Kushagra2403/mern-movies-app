const express = require("express");
const router = express.Router();
const MoviesCtrl = require("../controller/movies.controller.js");

router.route("/").get(MoviesCtrl.apiGetMovies);
router.route("/favourites").get(MoviesCtrl.apiGetFavourites);

module.exports = router;

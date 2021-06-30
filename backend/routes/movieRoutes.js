const express = require("express");
const router = express.Router();
const MoviesCtrl = require("../controller/movies.controller.js");
//const UsersCtrl = require("../controller/users.controller.js");

router.route("/").get(MoviesCtrl.apiGetMovies);
router.route("/favourites").get(MoviesCtrl.apiGetFavourites);

//router.route("/login").post(UsersCtrl.apiLogin);
//router.route("/signup").post(UsersCtrl.apiSignup);

module.exports = router;

const Favourites = require("../models/movies.js");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const { POINT_CONVERSION_COMPRESSED } = require("constants");

dotenv.config();
const API_KEY = process.env.API_KEY;

class MoviesController {
  static async apiGetMovies(req, res, next) {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const movieList = jsonData.Search;
    console.log(movieList);
    return movieList;
  }

  static async apiGetFavourites(req, res, next) {
    try {
      const userInfo = {
        uname: req.body.username,
        _id: req.body.user_id,
      };
      const fetchMovies = await Favourites.find({ userID: userInfo._id })
        .favourites;
      return fetchMovies;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

module.exports = MoviesController;

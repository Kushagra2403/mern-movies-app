const Favourites = require("../models/movies.js");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();
const API_KEY = process.env.API_KEY;

class MoviesController {
  static async apiGetMovies(req, res, next) {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const movieList = jsonData.Search;
    console.log(movieList);
    res.json(movieList);
  }

  static async apiPostFavourites(req, res, next) {
    try {
      const movieId = req.body.mid;
      console.log(movieId);
      const record = new Favourites({
        favourites: movieId,
      });
      const response = await record.save();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  static async apiGetFavourites(req, res, next) {
    try {
      const userInfo = {
        uname: req.body.username,
        _id: req.body.user_id,
      };
      const fetchMovies = await Favourites.find().favourites;
      let response = fetchMovies;
      res.json(fetchMovies);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: e });
    }
  }
}

module.exports = MoviesController;

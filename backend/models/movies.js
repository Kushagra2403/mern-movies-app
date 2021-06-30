const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  favourites: {
    type: String,
  },
});

module.exports = mongoose.model("Favourites", movieSchema, "Favourites");

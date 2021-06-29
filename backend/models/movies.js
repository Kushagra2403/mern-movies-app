const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  favourites: [String],
});

module.exports = mongoose.model("Favourites", movieSchema);

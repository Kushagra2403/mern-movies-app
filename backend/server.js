const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", movieRoutes);
app.use("*", (req, res) => {
  res.status(400).json({ error: "not found" });
});

const port = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost:27017/movies-app", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .then(() => {
    app.listen(port);
    console.log("Listening on port ", port);
  });

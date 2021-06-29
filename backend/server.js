const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes.js");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/", movieRoutes);
app.use("*", (req, res) => {
  res.status(400).json({ error: "not found" });
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URI, {
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

const express = require("express");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/sobre", function (req, res) {
  res.render("about");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log(`Running on ${PORT}`);

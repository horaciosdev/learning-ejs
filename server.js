const express = require("express");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "A",
      message: "Agora vai.",
    },
    {
      title: "O",
      message: "Ou talvez não...",
    },
  ];
  res.render("pages/index", { lista: items });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log(`Running on ${PORT}`);

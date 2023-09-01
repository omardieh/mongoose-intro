const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

const greeting = "Hello from JS file";

app.get("/", (req, res) => {
  res.render("index", { greeting });
});

let cities = ["Miami", "Madrid", "Barcelona"];

app.get("/cities", (req, res) => {
  const newCity = req.query.newCity;
  console.log(newCity);
  if (newCity) {
    cities.push(newCity);
  }
  res.render("cities", { cities });
});

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
});

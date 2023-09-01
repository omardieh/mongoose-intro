const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

const greeting = "Hello from JS file";
app.get("/", (req, res) => {
  res.render("index", { greeting });
});

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
});

const express = require("express");
const mongoose = require("mongoose");
const Cat = require("./models/Cat");
const User = require("./models/User");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/examples")
  .then((resp) => console.log("connected to", resp.connections[0].name))
  .catch((err) => {
    throw new Error(err);
  });

app.get("/", (req, res) => {
  const data = { username: "testUser2", email: "emailexample" };
  User.create(data)
    .then((newUser) => console.log(newUser))
    .catch((err) => {
      throw new Error(err);
    });
});

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
});

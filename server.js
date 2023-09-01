const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/examples")
  .then((resp) => console.log("connected to", resp.connections[0].name))
  .catch((err) => {
    throw new Error(err);
  });

// mongoose.connection.on("connected", () => {
//   console.log("connected with mongoDB");
// });
// const Cat = mongoose.model("Cat", { name: String });
// const kitty = new Cat({ name: "cat1" });
// console.log(kitty);
// kitty
//   .save()
//   .then((resp) => console.log(resp))
//   .catch((err) => {
//     throw new Error(err);
//   });

// Cat.find()
//   .then((allCats) => console.log(allCats))
//   .catch((err) => {
//     throw new Error(err);
//   });

// app.get("/", (request, response) => {
//   Cat.find()
//     .then((allCats) => {
//       request.send(allCats);
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// });

// function addNewCat(catName) {
//   const kitty = new Cat({ name: catName });

//   kitty
//     .save()
//     .then((newCat) => console.log(`A new cat is created: ${newCat}!`))
//     .catch((err) => console.log(`Error while creating a new cat: ${err}`));
// }

// function showCats() {
//   console.log("All the CATS!");
//   Cat.find()
//     .then((catsFromDB) => {
//       // catsFromDB is an array of Cat instances
//       catsFromDB.forEach((oneCat) => console.log(` --> cat: ${oneCat.name}`));
//     })
//     .catch((err) =>
//       console.log(`Error occurred during getting cats from DB: ${err}`)
//     );
// }

// function addTenCats() {
//   for (let i = 0; i < 10; i++) {
//     addNewCat(`Ironhacker ${i}`);
//   }
// }
// // addTenCats();
// // console.log("Hi There");
// app.get("/", (req, res) => {
//   console.log("Hi There");
//   Cat.find().then((allCats) => res.send(allCats));
// });

const Student = mongoose.model("Student", { firstName: String });
const City = mongoose.model("City", { name: String });

const promise1 = Student.insertMany([
  { firstName: "Alice" },
  { firstName: "Bob" },
]);

const promise2 = City.insertMany([
  { name: "Madrid" },
  { name: "Barcelona" },
  { name: "Paris" },
]);

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
});

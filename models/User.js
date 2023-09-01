const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    set: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  },
  email: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    default: "imag/url/in/here",
  },
  linkedinProfile: {
    type: String,
    validate: {
      validator: (text) => {
        return text.indexOf("https://www.linkedin.com/") === 0;
      },
      message: "linkedinProfile must start with 'https://www.linkedin.com/'",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

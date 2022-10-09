const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, require: true },
  email: { type: String, require: true },
  mobile: { type: String, require: true },
  password: { type: String, require: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;

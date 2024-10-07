const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "user name is required!"],
    minlength: [4, "user name must to be at last 4 chars"],
    password: {
      type: String,
      required: [true, "password is required!"],
    },
    role: {
      type: String,
      enum: ["soldier", "commander"],
      required: [true, "please provid role!"],
    },
  },
});

const UserModel = mongoose.model("user", userSchema);

const mongoose = require("mongoose");

const connectToMongoo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/green_eye");
    console.log("connected to mongoo!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connectToMongoo,
};

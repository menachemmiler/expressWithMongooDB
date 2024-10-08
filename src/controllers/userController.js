const { createUser, getAllUsers } = require("../services/userService");

const register = async (req, res) => {
  try {
    await createUser(req.body);
    res.status(201).json({
      msg: "user created!",
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const profile = async (req, res) => {
  try {
    res.json({
      msg: req.user,
    });
  } catch (err) {
    console.log(err);
  }
};

const setingsUpdate = async (req, res) => {
  try {
    res.json({
      msg: "setingsUpdate",
    });
  } catch (err) {
    console.log(err);
  }
};

const getAll = async (req, res) => {
  try {
    const allUser = await getAllUsers();
    if (!allUser) throw new Error("no users!");
    res.json({
      allUser,
    });
  } catch (err) {
    console.log(err);
    res.json({
      msg: err.message,
    });
  }
};

module.exports = {
  register,
  profile,
  setingsUpdate,
  getAll,
};

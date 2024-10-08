const { hash } = require("bcrypt");
const { UserModel } = require("../models/userModdel");

const createUser = async (user) => {
  try {
    const { user_name, password, role, area, units } = user;
    if (!user_name || !password || !role || !area || !units) {
      throw new Error("missing info");
    }
    const hashPassword = await hash(password, 10);
    const dbUser = new UserModel({
      user_name,
      password: hashPassword,
      role,
      area,
      units,
    });
    await dbUser.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await UserModel.find({});
    console.log("allUsers= ", allUsers);
    return allUsers;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  createUser,
  getAllUsers,
};

const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userModdel");
const jsonwebtoken = require("jsonwebtoken");

const loginUser = async (user) => {
  try {
    const dbUser = await UserModel.findOne({ user_name: user.user_name });
    if (!dbUser) {
      throw new Error("User not found");
    }
    if (!await bcrypt.compare(user.password, dbUser.password)) {
      throw new Error("Wrong password!!!");
    }

    const token = await jsonwebtoken.sign(
      {
        user_name: dbUser.user_name,
        role: dbUser.role,
      },
      process.env.TOKEN_SECREAT, 
      {
        expiresIn: "3m",
      }
    );
    console.log("token= ", token);
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  loginUser,
};

const { loginUser } = require("../services/authService");

const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.cookie("token", token);
    res.json({
      msg: "welcome " + req.body.user_name + " " + req.body.password,
      token: token
    });
  } catch (err) {}
};

module.exports = {
  login,
};

const { loginUser } = require("../services/authService");

const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.cookie("token", token);
    res.json({
      msg: "welcome " + req.body.user_name + " token=" + token,
    });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("token", "");
    res.json({
      msg: "הטוקן נמחק בהצלחה",
    });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports = {
  login,
  logout,
};

const jwt = require("jsonwebtoken");

const onlyCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(403).send("Not allowed");
    }
    const userData = await jwt.verify(token, process.env.JWT_SECRET); //חילוץ פרטי החייל מ-הטוקן שלו
    if (userData.role !== "commander") {
      res.status(403).send("Not allowed");
    }
    req.user = userData;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message);
  }
};
const onlySoldiersAndCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(403).send("login before!");
    }

    const user = await jwt.verify(token, process.env.TOKEN_SECREAT); //חילוץ פרטי החייל מ-הטוקן שלו

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message);
  }
};

module.exports = { onlyCommanders, onlySoldiersAndCommanders };

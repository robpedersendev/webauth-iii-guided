const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, "hothothot", (err, decodedToken) => {
      if (err) {
        //Bad Token!
        res.status(401).json({ message: "What happened" });
      } else {
        //The token is a good token!
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No Token Bruh" });
  }
};

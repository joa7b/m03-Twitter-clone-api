const User = require("../users/User");
const jwt = require("jsonwebtoken");

const authLoginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = {
  authLoginService,
  generateToken,
};

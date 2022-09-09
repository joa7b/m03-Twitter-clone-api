require("dotenv").config();
const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const authLoginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.authLoginService(email);

  if (!user) {
    res.status(400).send({ message: "User not found." });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400).send({ message: "Invalid password." });
  }

  const token = authService.generateToken(user.id);

  res.send({token});
};

module.exports = {
  authLoginController,
};

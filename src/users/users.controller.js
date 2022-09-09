const userService = require("./users.service");
const authService = require("../auth/auth.service");

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    res.status(400).send({ message: "There are no registered users." });
  }

  res.send(users);
};

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    res.status(400).send({ message: "Complete all fields." });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    res.status(400).send({ message: "User already exists." });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    res.status(400).send({ message: "Error creating user." });
  }

  res.status(201).send(user);
};

module.exports = {
  findAllUserController,
  createUserController,
};

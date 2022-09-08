const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const authLoginController = async (req, res) => {
    const { email, password} = req.body;

    const user = await authService.authLoginService(email);

    if (!user) {
        res.status(400).send({ message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (isPasswordValid === false) {
        res.status(400).send({ message: "Invalid password."});
    }

    res.send(user)
}

module.exports = {
    authLoginController
}
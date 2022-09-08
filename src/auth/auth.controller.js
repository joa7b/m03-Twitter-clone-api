const authService = require("./auth.service");

const authLoginController = async (req, res) => {
    res.send({ message: "Login OK"})
}

module.exports = {
    authLoginController
}
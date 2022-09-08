const User = require("../users/User");

const authLoginService = (email) => User.findOne({email: email}).select("+password");

module.exports = {
    authLoginService
}
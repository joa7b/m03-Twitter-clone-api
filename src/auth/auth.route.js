const route = require("express").Router();
const authController = require("./auth.controller");

route.post("/login", authController.authLoginController);

module.exports = route;
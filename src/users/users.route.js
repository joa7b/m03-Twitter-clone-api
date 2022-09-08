const route = require("express").Router();
const userController = require("./users.controller");

route.get("/users", userController.findAllUserController);
route.post("/create", userController.createUserController);

module.exports = route;

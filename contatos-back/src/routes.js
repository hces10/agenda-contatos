const express = require("express");
const UserController = require("./controllers/UserController");
const PhoneController = require("./controllers/PhoneController");

const routes = express.Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.find);

routes.post("/phones/:userId", PhoneController.store);
routes.get("/phones/:userId", PhoneController.index);
routes.delete("/phones/:id", PhoneController.delete);


routes.get("/", (req, res) => {
  return res.json({ name: "phone app" });
});

module.exports = routes;

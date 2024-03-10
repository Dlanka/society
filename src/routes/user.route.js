const express = require("express");
const { UserController } = require("../controllers");

const router = express.Router();
const userController = new UserController();


router.get("/", userController.getAll);
router.post("/create", userController.create);

module.exports = router;

var express = require("express");
var router = express.Router();

const userController = require("../controllers/userControllers");

/* GET users listing. */
router.get("/", userController.getAllUsers);
router.post("/create", userController.create);

module.exports = router;

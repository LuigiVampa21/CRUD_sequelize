const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    userController.getAllUsers
  );

module.exports = router;

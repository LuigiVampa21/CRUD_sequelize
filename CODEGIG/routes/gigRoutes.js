const express = require("express");
const router = express.Router();
const gigController = require("../controllers/gigController");

router.route("/").get(gigController.getAllGigs);

module.exports = router;

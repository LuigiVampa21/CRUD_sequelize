const express = require("express");
const router = express.Router();
const gigController = require("../controllers/gigController");

router.route("/").get(gigController.getAllGigs).post(gigController.createGig);


router.route("/search").get(gigController.getSingleGig);

module.exports = router;

const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.route("/").get(reviewController.getAllReviews);

router.route("/:id").post(reviewController.createReview);

// .patch(reviewController.updateReview)
// .delete(reviewController.deleteReview);

module.exports = router;

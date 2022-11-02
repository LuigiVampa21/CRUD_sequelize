const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route("/published").get(productController.getAllPublishedProducts);
router.route("/:id/reviews").get(productController.getAllProductWithReviews);

router
  .route("/:id")
  .get(productController.getSingleProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;

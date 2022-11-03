const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multerMiddleware = require("../utils/multer");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(multerMiddleware.multerM, productController.createProduct);

router.route("/published").get(productController.getAllPublishedProducts);
router.route("/:id/reviews").get(productController.getAllProductWithReviews);

router
  .route("/:id")
  .get(productController.getSingleProduct)
  .patch(multerMiddleware.multerM, productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;

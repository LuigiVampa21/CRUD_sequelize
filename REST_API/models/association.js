const Product = require("./productModel");
const Review = require("./reviewModel");

Product.hasMany(Review, {
  foreignKey: "product_id",
  as: "Review",
});

Review.belongsTo(Product, {
  foreignKey: "product_id",
  as: "Product",
});

const Product = require("./productModel");
const Review = require("./reviewModel");

Product.hasMany(Review, {
  foreignKey: "product_id",
});

Review.belongsTo(Product);

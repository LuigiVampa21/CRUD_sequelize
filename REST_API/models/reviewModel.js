const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Product = require("./productModel");

const Review = sequelize.define("Review", {
  rating: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  // product_id: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Product,
  //     key: "Product",
  //   },
  // },
});

module.exports = Review;

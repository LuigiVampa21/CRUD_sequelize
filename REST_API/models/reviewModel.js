const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Review = sequelize.define("Review", {
  rating: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Review;

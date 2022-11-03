const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  image: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Product;

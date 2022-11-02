const { Sequelize } = require("sequelize");
const User = require("../models/UserModel");
const Op = Sequelize.Op;

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    results: users.length,
    users,
  });
};

const { Sequelize } = require("sequelize");
const User = require("../models/UserModel");
const Op = Sequelize.Op;

exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const alreadyExistsUser = await User.findOne({ where: { email } });
    if (alreadyExistsUser) {
      throw new Error("User with email already exists!");
    }
    const user = await User.create({
      fullName,
      email,
      password,
    });
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};
exports.login = async (req, res) => {
  try {
    res.status(200).json({
      data: "Ok",
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
};

const { Sequelize } = require("sequelize");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
// const Op = Sequelize.Op;

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
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("User does not exists");
    if (user.password !== password) throw new Error("Passwords does not match");

    const jwtToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      data: "Ok",
      token: jwtToken,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

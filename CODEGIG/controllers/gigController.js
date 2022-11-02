const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");
const Gig = require("../models/GigModel");

exports.getAllGigs = async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    console.log(gigs);
    res.status(200).json({
      data: gigs,
    });
  } catch (err) {
    res.status(500).json({
      data: err,
    });
  }
};

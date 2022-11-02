const { Sequelize } = require("sequelize");
// const sequelize = require("../config/db");
const Gig = require("../models/GigModel");
const Op = Sequelize.Op;

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

exports.createGig = async (req, res) => {
  try {
    const { title, technologies, budget, description, contact_email } =
      req.body;
    const newGig = await Gig.create({
      title,
      technologies,
      budget,
      description,
      contact_email,
    });
    res.status(200).json({
      data: newGig,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

exports.getSingleGig = async (req, res) => {
  try {
    let { term } = req.query;
    const gig = await Gig.findAll({
      where: {
        technologies: { [Op.like]: "%" + term + "%" },
      },
    });
    res.status(200).json({
      data: gig,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

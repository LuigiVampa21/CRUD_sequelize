const { Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Gig = sequelize.define("gig", {
  title: {
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;

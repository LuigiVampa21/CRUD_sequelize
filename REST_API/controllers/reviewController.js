const Review = require("../models/reviewModel");
const Product = require("../models/productModel");

exports.getAllReviews = async (req, res) => {
  const reviews = await Review.findAll({});
  res.status(200).send(reviews);
};

exports.createReview = async (req, res) => {
  const { id } = req.params;
  const { rating, description } = req.body;

  let data = {
    product_id: id,
    rating,
    description,
  };

  const review = await Review.create(data);
  res.status(201).json({
    review,
  });
};

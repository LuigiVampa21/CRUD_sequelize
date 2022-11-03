const Product = require("../models/productModel");
const Review = require("../models/reviewModel");

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  //   const products = await Product.findAll({
  //     attributes: ["title", "price"],
  //   });
  res.status(200).json({
    results: products.length,
    products,
  });
};

exports.createProduct = async (req, res) => {
  // const url = req.protocol + "://" + req.get("host");
  const { title, price, description, published } = req.body;
  const newProduct = await Product.create({
    title,
    price,
    description,
    published,
    image: "/images/" + req.file.filename,
  });
  res.status(200).json({
    newProduct,
  });
};

exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  res.status(200).json({
    product,
  });
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, description, published } = req.body;
  let image;
  if (req.file) {
    // const url = req.protocol + "://" + req.get("host");
    // image = url + "/images/" + req.file.filename;
    image = "/images/" + req.file.filename;
  }
  const product = await Product.findByPk(id);
  await product.update({
    title,
    price,
    description,
    published,
    image,
  });
  res.status(201).json({
    product,
  });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  await product.destroy();
  res.status(204).json({
    msg: "product deleted",
  });
};

exports.getAllPublishedProducts = async (req, res) => {
  const products = await Product.findAll({
    where: {
      published: true,
    },
  });
  res.status(200).json({
    results: products.length,
    products,
  });
};

exports.getAllProductWithReviews = async (req, res) => {
  const { id } = req.params;

  const data = await Product.findOne({
    include: [
      {
        model: Review,
        // as: "review",
      },
    ],
    where: { id: id },
  });

  res.status(200).json({
    data,
  });
};

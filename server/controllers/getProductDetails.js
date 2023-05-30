const products = require('../models/product_details.js');

const getProductDetails = (req, res) => {
  const productId = req.params.productId;
  products(productId)
    .then((details) => {
      res.send(details);
    })
    .catch((err) => res.send(err));
}

module.exports = getProductDetails;


const products = require('../models/product_details.js');

const getProductDetails = (req, res) => {
  const productId = req.params.productId;
  products(productId)
    .then((details) => {
      console.log(details);
      res.send(`Hello World, here are the details: ${details}!`);
    })
    .catch((err) => res.send(err));
}

module.exports = getProductDetails;


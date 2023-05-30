const related = require('../models/related_products.js');

const getRelatedProducts = (req, res) => {
  const productId = req.params.productId;
  related(productId)
    .then((related_products) => {
      res.send(related_products);
    })
    .catch((err) => res.send(err));
}

module.exports = getRelatedProducts;


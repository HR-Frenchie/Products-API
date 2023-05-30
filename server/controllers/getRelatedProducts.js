const related = require('../models/related_products.js');

const getRelatedProducts = (req, res) => {
  const productId = req.params.productId;
  related(productId)
    .then((details) => {
      console.log(details);
      res.send(`Hello World, here are the details: ${details}!`);
    })
    .catch((err) => res.send(err));
}

module.exports = getRelatedProducts;


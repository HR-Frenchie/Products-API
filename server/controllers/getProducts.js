const products = require('../models/products.js');

const getProducts = (req, res) => {
  const page = req.query.page;
  const count = req.query.count;
  console.log(req.params);
  products(page, count)
    .then((products) => {
      res.send(products);
    })
    .catch((err) => res.send(err));
}

module.exports = getProducts;


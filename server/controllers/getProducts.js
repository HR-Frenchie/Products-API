const products = require('../models/products.js');

const getProducts = (req, res) => {
  const page = req.params.page;
  const count = req.params.count;
  products(page, count)
    .then((products) => {
      console.log(products);
      res.send(`Hello World, here are the details: ${products}!`);
    })
    .catch((err) => res.send(err));
}

module.exports = getProducts;


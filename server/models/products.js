const db = require('../db.js');

const productDetails = (id) => {
  const text = 'SELECT * FROM products WHERE product_id = $1 LIMIT 1';
  const values = [id];
  db.query(text, values)
    .then(results => results.rows[0])
    .catch(e => console.log("there was an error getting product details: ", e));
}

module.exports = productDetails;
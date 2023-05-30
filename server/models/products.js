const db = require('../db.js');

const products = (page = 1, count = 5) => {
  const offset = (page - 1) * count;
  const text = `
    SELECT * FROM products LIMIT $1 OFFSET $2;
  `;
  const values = [count, offset];
  return db.query(text, values)
    .then(results => results.rows)
    .catch(e => console.log("there was an error getting products: ", e));
}

module.exports = relatedProducts;
const db = require('../db.js');

const relatedProducts = (id) => {
  const text = `
    SELECT array_agg(secondary_product_id) related_products from related_products where main_product_id = $1;
  `;
  const values = [id];
  return db.query(text, values)
    .then(results => results.rows[0]["related_products"])
    .catch(e => console.log("there was an error getting related products: ", e));
}

module.exports = relatedProducts;
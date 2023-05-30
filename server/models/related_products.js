const db = require('../db.js');

const relatedProducts = (id) => {
  const text = `
    SELECT secondary_product_id from related_products where main_product_id = $1;
  `;
  const values = [id];
  return db.query(text, values)
    .then(results => results.rows.map(r => r.secondary_product_id))
    .catch(e => console.log("there was an error getting related products: ", e));
}

module.exports = relatedProducts;
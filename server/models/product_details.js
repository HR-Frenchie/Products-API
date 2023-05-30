const db = require('../db.js');

const productDetails = (id) => {
  const text = `
    SELECT
      p.product_id as id,
      p.name, p.slogan, p.description, p.category, p.default_price,
      json_agg (json_object(ARRAY['feature', features.feature, 'value', features.value])) features
    FROM
      products as p
    LEFT JOIN features ON features.product_id = p.product_id
    WHERE p.product_id = $1
    GROUP BY p.product_id
    LIMIT 1
  `;
  const values = [id];
  return db.query(text, values)
    .then(results => results.rows[0])
    .catch(e => console.log("there was an error getting product details: ", e));
}

module.exports = productDetails;
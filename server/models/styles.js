const db = require('../db.js');

const styles = (id) => {
  const text = `
    SELECT
      s.style_id, s.name, s.original_price, s.sale_price, s.is_default as "default?", photos,
      json_object_agg (skus.sku, json_build_object('quantity', skus.quantity, 'size', skus.size)) skus
    FROM
        styles AS s
    INNER JOIN skus ON (skus.style_id = s.style_id)
    WHERE s.product_id = $1
    GROUP BY s.style_id
  `;
  const values = [id];
  return db.query(text, values)
    .then(results => {
      const stylesObj = {
        product_id: id,
        results: results.rows
      }
      return stylesObj;
    })
    .catch(e => console.log("there was an error getting product styles: ", e));
}

module.exports = styles;
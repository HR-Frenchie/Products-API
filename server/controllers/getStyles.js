const styles = require('../models/styles.js');

const getStyles = (req, res) => {
  const productId = req.params.productId;
  styles(productId)
    .then((styles) => {
      console.log(styles);
      res.send(`Hello World, here are the details: ${styles}!`);
    })
    .catch((err) => res.send(err));
}

module.exports = getStyles;
const styles = require('../models/styles.js');

const getStyles = (req, res) => {
  const productId = req.params.productId;
  styles(productId)
    .then(styles => res.send(styles))
    .catch((err) => res.send(err));
}

module.exports = getStyles;
const getProductDetails = (req, res) => {
  const productId = req.params.productId;
  res.send(`Hello World, this is product ${productId}!`)
}

module.exports = getProductDetails;


require('dotenv').config();
const express = require('express');
const app = express();
const getProductDetails = require('./controllers/getProductDetails');
const getRelatedProducts = require('./controllers/getRelatedProducts');
const getStyles = require('./controllers/getStyles');

app.get('/products/:productId', getProductDetails);
app.get('/products/:productId/related', getRelatedProducts);
app.get('/products/:productId/styles', getStyles);

app.listen(process.env.PORT, () => console.log("server listening on port: ", process.env.PORT));
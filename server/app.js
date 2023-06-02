require('dotenv').config();
const express = require('express');
const app = express();
const getProductDetails = require('./controllers/getProductDetails');
const getRelatedProducts = require('./controllers/getRelatedProducts');
const getStyles = require('./controllers/getStyles');
const getProducts = require('./controllers/getProducts');

app.get('/products/:productId', getProductDetails);
app.get('/products/:productId/related', getRelatedProducts);
app.get('/products/:productId/styles', getStyles);
app.get('/products', getProducts);
app.get('/loaderio-478e10a58a8ed510b28c5c5fe6382f31', (req, res) => res.send('loaderio-478e10a58a8ed510b28c5c5fe6382f31'));

app.listen(process.env.PORT, () => console.log("server listening on port: ", process.env.PORT));
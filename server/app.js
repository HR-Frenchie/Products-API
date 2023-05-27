const port = 3000;
const express = require('express');
const app = express();
const getProductDetails = require('./controllers/getProductDetails');

app.get('/products/:productId', getProductDetails);

app.listen(port, () => console.log("server listening on port: ", port));
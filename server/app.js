const express = require('express');
const port = 3000;

const app = express();

app.get('/products/:productId', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => console.log("server listening on port: ", port));
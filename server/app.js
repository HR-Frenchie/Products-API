const express = require('express');
const port = 3000;
// set up routes

const app = express();

app.listen(port, () => console.log("server listening on port: ", port));
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;
const router = require('./router.js');
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;

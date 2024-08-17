const express = require('express');
const app = express();
const path = require('path');
const port = 9000;

const bodyParser = require('body-parser');

const { RouteHandler } = require(path.resolve(__dirname, 'RouteHandler', 'RouteHandler'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json({ limit: '10kb' }));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

app.use('/profile', RouteHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


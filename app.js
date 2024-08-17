
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = +process.env.PORT;
const mongoDBURI = process.env.MONGODB_URI;
const mongoDBDatabaseName = process.env.MONGODB_DATABASE_NAME;

const bodyParser = require('body-parser');

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: mongoDBDatabaseName,
}).then(() => {
  console.log(`Connected : ${mongoDBURI}`);
}).catch((err) => {
  console.log(`Error connecting database: ${mongoDBURI}`);
  console.log(err);
});

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


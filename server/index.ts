import express from 'express';

require('dotenv').config();
require('./src/config/dbconnect').connect();

require('./src/model/wordSchema');
require('./src/model/deckSchema');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var router = require('./src/routes/index');

app.use('/', router);

const PORT = process.env.NODE_PORT;

app.listen(PORT, () => {
  console.log(`App running on Port: ${PORT}`);
});

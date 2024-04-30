import express from 'express';
import dotenv from 'dotenv'

import { connect } from './src/config/dbconnect'
import { router } from './src/routes'

dotenv.config();
connect();

// require('./src/model/wordSchema');
// require('./src/model/deckSchema');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = process.env.NODE_PORT;

app.listen(PORT, () => {
  console.log(`App running on Port: ${PORT}`);
});

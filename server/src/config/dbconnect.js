const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

exports.connect = () => {
  mongoose
    .connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(console.log('DB CONNECTION SUCCESSFUL'))
    .catch((err) => {
      console.error('FAILED TO CONNECT TO DB');
      console.error(err);
    });
};

import express = require("express");

const routeRouter = express.Router();

router.use('/api', require('./api'));

module.exports = routeRouter;
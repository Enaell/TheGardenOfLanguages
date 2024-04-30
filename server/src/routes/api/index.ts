const express = require('express');
export const apiRouter = express.Router();

router.use('/words', require('./wordRoutes'));
router.use('/decks', require('./deckRoutes'))

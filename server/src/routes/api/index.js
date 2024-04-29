const express = require('express');
const router = express.Router();

router.use('/words', require('./wordRoutes'));
router.use('/decks', require('./deckRoutes'))

module.exports = router;
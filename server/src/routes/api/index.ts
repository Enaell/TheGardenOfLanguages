import { Router } from 'express';

import { wordRouter } from './wordRoutes'
import { deckRouter } from './deckRoutes'

export const apiRouter = Router();

apiRouter.use('/words', wordRouter);
apiRouter.use('/decks', deckRouter)

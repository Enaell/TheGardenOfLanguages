import { Router } from 'express';
import { Word, Deck } from '../../model'
import { VISIBILITY, ROLES } from '../../model/utils'

export const deckRouter = Router();

deckRouter.get('/', /*auth.optional, */(req, res, _next) => {
  const payload = { id: 1, role: ROLES.Admin } // set, waiting for real roles and Auth

  if (payload && payload.id && payload.role !== ROLES.Customer) {
    Word.find({})
      .then(words => {
        console.log('API DECK get all words as ADMIN or MODERATOR')
        console.log(words);
        return res.json({ words })
      })
  }
  else if (payload && payload.id) {
    Word.find({ $or: [{ visibility: VISIBILITY.Visitor, validated: true }, { visibility: VISIBILITY.LoggedIn, validated: true }, { visibility: VISIBILITY.Owner, owner: payload.id }] })
      .then(word => {
        console.log('API DECK get all words as CUSTOMER')
        console.log(word);
        return res.json({ word: word })
      })
  }
  else {
    Word.find({ visibility: VISIBILITY.Visitor, validated: true })
      .then(word => {
        console.log('API DECK get all words as VISITOR')
        console.log(word);
        return res.json({ word: word })
      })
  }
});


deckRouter.post('/',/* auth.required,*/(req, res, _next) => {
  const payload = { id: 1, role: ROLES.Admin } // set, waiting for real roles and Auth
  const { body: { decks } } = req;

  const finalDeck = payload.role === ROLES.Admin || payload.role === ROLES.Moderator
    ? decks.map((decks: any) => { return new Deck({ ...decks, owner: payload.id }) })
    : decks.map((decks: any) => { return new Word({ ...decks, owner: payload.id, validated: false }) });

  Deck.collection.insertMany(finalDeck)
    .then(data => res.json({ deck: data }))
    .catch(error => {
      console.log("Couldn't save deck");
      console.log(error);
      return res.sendStatus(400);
    });
})

import { Router } from 'express';
import { Word } from '../../model'
import { VISIBILITY, ROLES } from '../../model/utils';

export const wordRouter = Router();


wordRouter.get('/', /*auth.optional,*/(req, res, _next) => {
  const payload = { id: 1, role: ROLES.Admin } // set, waiting for real roles and Auth

  const language = req.query && req.query['language'] ? { language: req.query['language'] } : {}

  console.log(payload);
  if (payload && payload.id && payload.role !== ROLES.Customer) {
    Word.find(language)
      .then(word => {
        console.log('API WORD get all word as ADMIN or MODERATOR')
        console.log(word);
        return res.json({ word: word })
      })
  }
  else if (payload && payload.id) {
    Word.find({ $or: [{ visibility: VISIBILITY.Visitor, validated: true, ...language }, { visibility: VISIBILITY.LoggedIn, validated: true, ...language }, { visibility: VISIBILITY.Owner, owner: payload.id, ...language }] })
      .then(word => {
        console.log('API WORD get all word as CUSTOMER')
        console.log(word);
        return res.json({ word: word })
      })
  }
  else {
    Word.find({ visibility: VISIBILITY.Visitor, validated: true, ...language })
      .then(word => {
        console.log('API WORD get all word as VISITOR')
        console.log(word);
        return res.json({ word: word })
      })
  }
});

wordRouter.post('/', /*auth.required,*/(req: any, res: any, _next: any) => {
  // const { payload: { id, role } } = req;
  const role = ROLES.Admin;
  const { body: { word } } = req;

  const finalWord = role === ROLES.Admin || role === ROLES.Moderator
    ? word.map((word: any) => new Word({ ...word, owner: 1 }))
    : word.map((word: any) => { return new Word({ ...word, owner: 1, validated: false }) });

  Word.collection.insertMany(finalWord)
    .then(data => res.json({ word: data }))
    .catch(error => {
      console.log("Couldn't save word");
      console.log(error);
      return res.sendStatus(400);
    });
})

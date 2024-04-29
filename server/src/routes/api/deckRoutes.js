const mongoose = require('mongoose');
// const auth = require('../auth');
const Deck = mongoose.model('Deck');
const Word = mongoose.model('Word');
const router = require('express').Router();
const { VISIBILITY, ROLES } = require('../../model/utils')


router.get('/', /*auth.optional, */(req, res, next) => {
    const {payload} = req;

    if (payload && payload.id && payload.role !== ROLES.Customer)
    {
        Word.find({})
        .then(words => {
            console.log('API DECK get all words as ADMIN or MODERATOR')
            console.log(words);
            return res.json({ words })
         })
    }
    else if (payload && payload.id)
    {
        Word.find({$or:[{ visibility: VISIBILITY.Visitor, validated: true }, { visibility: VISIBILITY.LoggedIn, validated: true }, {visibility: VISIBILITY.Owner, owner: payload.id }] })
        .then(word => {
            console.log('API DECK get all words as CUSTOMER')
            console.log(word);
            return res.json({ word: word })
         }) 
    }
    else{
        Word.find({ visibility: VISIBILITY.Visitor, validated: true })
        .then(word => {
            console.log('API DECK get all words as VISITOR')
            console.log(word);
            return res.json({ word: word })
         })
    }
});


router.post('/',/* auth.required,*/ (req, res, next) => {
    const { payload: { id, role } } = req;
    const { body: { decks } } = req;

    const finalDeck = role === ROLES.Admin || role === ROLES.Moderator 
        ? decks.map(deck => {return new Deck({...deck, owner: id})})
        : decks.map(deck => {return new Word({...deck, owner: id, validated: false})});

    Deck.collection.insertMany(finalDeck)
    .then(data => res.json({deck: data}))
    .catch(error => {
        console.log("Couldn't save deck");
        console.log(error);
        return res.sendStatus(400);
    });
})

module.exports = router;
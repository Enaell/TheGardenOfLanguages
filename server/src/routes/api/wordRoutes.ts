import mongoose = require('mongoose');
// const auth = require('../auth');
const Word = mongoose.model('Word');
const router = require('express').Router();
const { VISIBILITY, ROLES } = require('../../model/utils')


router.get('/', /*auth.optional,*/ (req, res, next) => {
    const {payload} = req;
    const language = req.query && req.query.language ? {language: req.query.language} : {}

    console.log(payload);
    if (payload && payload.id && payload.role !== ROLES.Customer)
    {
        Word.find(language)
        .then(word => {
            console.log('API WORD get all word as ADMIN or MODERATOR')
            console.log(word);
            return res.json({ word: word })
         })
    }
    else if (payload && payload.id)
    {
        Word.find({$or:[{ visibility: VISIBILITY.Visitor, validated: true, ...language }, { visibility: VISIBILITY.LoggedIn, validated: true, ...language }, {visibility: VISIBILITY.Owner, owner: payload.id, ...language }] })
        .then(word => {
            console.log('API WORD get all word as CUSTOMER')
            console.log(word);
            return res.json({ word: word })
         }) 
    }
    else{
        Word.find({ visibility: VISIBILITY.Visitor, validated: true, ...language })
        .then(word => {
            console.log('API WORD get all word as VISITOR')
            console.log(word);
            return res.json({ word: word })
         })
    }
});

router.post( '/', /*auth.required,*/ (req, res, next) => {
    const { payload: { id, role } } = req;
    const { body: { word } } = req;

    const finalWord = role === ROLES.Admin || role === ROLES.Moderator 
        ? word.map(word => {return new Word({...word, owner: id})})
        : word.map(word => {return new Word({...word, owner: id, validated: false})});

    Word.collection.insertMany(finalWord)
    .then(data => res.json({word: data}))
    .catch(error => {
        console.log("Couldn't save word");
        console.log(error);
        return res.sendStatus(400);
    });
})

module.exports = router;
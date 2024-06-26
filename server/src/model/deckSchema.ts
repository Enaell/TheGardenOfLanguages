
import { Schema, model } from "mongoose";
import { LANGUAGES, VISIBILITY } from './utils'

const DeckSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Users' },
  name: { type: String, required: true },
  words: [{ type: Schema.Types.ObjectId, ref: 'Words' }],
  language: { type: String, default: LANGUAGES.Fr },
  subject: { type: [String], default: 'other' },
  level: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
  validated: { type: Boolean, default: false }, //this field is to differenciate cards validated by admin from others)
  visibility: { type: String, default: VISIBILITY.Owner }, //rank of visibility wanted by the card owner (visitor, loggedin, owner)
  comments: String
});

export const Deck = model('Deck', DeckSchema);

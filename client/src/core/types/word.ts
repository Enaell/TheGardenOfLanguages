import { Language, Visibility } from "./generics"

export type Translation = {
  name: string,
  internationalName: string,
  language: Language,
  sentences: Sentence[],
  rank: number,
  comments?: string,
}

export type Sentence = {
  sentence: string,
  translatedSentence: string
}

export type Word = {
  id?: string,
  owner?: string,
  name: string,
  internationalName: string,
  language: Language,
  subject: string[],
  level: number,
  translations: Translation[],
  comments?: string,
  validated?: boolean, //(this field is to differenciate cards validated by admin from others)
  visibility?: Visibility, //(rank of visibility wanted by the card owner)  ---------- two last fields shown in case of owner wants to know on their lists
}

export type Deck = {
  id?: string,
  owner?: string,
  name: string,
  words: { [key: string]: Word },
  language: Language,
  targetLanguage: Language,
  subject: string[],
  level: number,
  rank: number,
  comments?: string,
  validated?: boolean, //(this field is to differenciate cards validated by admin from others)
  visibility?: Visibility, //(rank of visibility wanted by the card owner) ---------- two last fields shown in case of owner wants to know on their lists
}

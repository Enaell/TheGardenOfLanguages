import { Deck, Word } from "../../core/types/word";

export const getAllDecks = async (language: string, targetLanguage: string) => {
  try {
    const getDecksUrl = language && targetLanguage ? `http://localhost:5000/api/decks?language=${language}&targetlanguage=${targetLanguage}` : `http://localhost:5000/api/decks`;
    const res = await fetch(getDecksUrl,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
      });
    const json = await res.json();
    return { success: true, message: json.decks as { [key: string]: Deck } };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'api.dictionary.getAllDecks.error' }
  }
}

export const createDecks = async (decks: Deck[]) => {
  console.log('api client dictionary create decks');
  console.log(decks);
  try {
    const res = await fetch('http://localhost:5000/api/decks', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        decks
      })
    });
    const json = await res.json();
    return { success: true, message: json };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'api.dictionary.getAllDecks.error' }
  }
}

export const createWordsInDeck = async (deckId: string, words: Word[]) => {
  console.log(`api client dictionary create word id deck ${deckId}`);
  console.log(words);
  try {
    const res = await fetch(`http://localhost:5000/api/decks/${deckId}/words`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        words
      })
    });
    const json = await res.json();
    return { success: true, message: json };
  }
  catch (error) {
    console.log(error);
    return { success: false, message: 'api.dictionary.createWord.error' }
  }
}

export const updateDeck = async (deck: Deck) => {
  console.log('api client dictionary update deck');
  console.log(deck);
  try {
    const res = await fetch('http://localhost:5000/api/decks', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify({
        deck
      })
    });
    const json = await res.json();
    return { success: true, message: json };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'api.dictionary.updateDeck.error' }
  }
}

export const deleteDeck = async (deckId: string) => {
  console.log('api client dictionary delete deck');
  console.log(deckId);
  try {
    const res = await fetch(`http://localhost:5000/api/decks/${deckId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    });
    const json = await res.json();
    return { success: true, message: json };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'api.dictionary.deleteDeck.error' }
  }
}

export const removeWordFromDeck = async (_wordId: string, _deckId: string) => {
  console.log('api client dictionary remove word from deck')
}
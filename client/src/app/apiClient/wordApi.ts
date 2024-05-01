import { Word } from "../../core/types/word";

export const getAllWords = async (targetLanguage: string, token?: string) => {
  const getWordsUrl = targetLanguage ? `http://localhost:5000/api/words?language=${targetLanguage}` : `http://localhost:5000/api/words`
  const res = await fetch(getWordsUrl,
    {
      headers: token ? {
        'Authorization': `Token ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      } : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    })
  const json = await res.json();
  const words = json.words.map((word: any) => {
    const w = { ...word, id: word._id };
    delete w._id;
    return w;
  }) as Word[];

  return [...words].sort((a, b) => a.internationalName > b.internationalName ? 1 : -1)
}
// get one word
export const updateWord = async (word: Word, token: string) => {
  console.log('api client dictionary update word');
  console.log(word);
  try {
    const res = await fetch('http://localhost:5000/api/words', {
      headers: {
        'Authorization': `Token ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify({
        word
      })
    });
    const json = await res.json();
    return { success: true, message: json };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'api.dictionary.updateWord.error' }
  }
}

// delete word
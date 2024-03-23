# wordnet-dictionary

English-English Dictionary with definition, part of speech, examples, synonyms. Wordnet 3.0 database is used and return in JSON format.

Total of 147306 words are included.

## Installation

```shell
npm install wordnet-dictionary
```

## Usage

```js
import {
  search,
  searchAsync,
  listAllWords,
  listAllWordsAsync,
  isExist,
  isExistAsync,
} from "wordnet-dictionary";

const word = search("hello");

// Async
const word = await searchAsync("hello");

// Return value
const hello = {
  word: "hello",
  definitions: [
    {
      meaning: "an expression of greeting",
      examples: ["every morning they exchanged polite hellos"],
      id: 6632511,
      partOfSpeech: "noun",
      synonyms: [
        "hullo",
        "hi",
        "howdy",
        "how-do-you-do",
        "greeting",
        "salutation",
        "hello",
      ],
    },
  ],
};
```

## 3rd Party Licence

[Princeton University's WordNet License](http://wordnet.princeton.edu/wordnet/license/)

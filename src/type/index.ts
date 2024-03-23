export type Definition = {
  id: number | string;
  partOfSpeech: string;
  meaning: string;
  examples: string[];
  synonyms: string[];
};

export type Word = {
  word: string;
  definitions: Definition[];
};

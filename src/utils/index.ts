import fs from "fs";
import type { Word } from "../type";

// Make searching faster
function searchInCorrespondingDatabase(word: string, firstLetter: string) {
  const filename = /[a-z]/.test(firstLetter) ? firstLetter + ".json" : "#.json";
  const filePath = `./data/${filename}`;
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  return data[word];
}

// Search word
function search(searchText: string): Word | undefined {
  // Make sure to trim the word's space characters
  const word = searchText.trim().toLowerCase();

  // Get the first letter of search word
  const firstLetter: string = word.charAt(0);

  // Result
  return searchInCorrespondingDatabase(word, firstLetter);
}

// Promise
async function searchAsync(searchText: string): Promise<Word | undefined> {
  return new Promise((resolve, reject) => {
    resolve(search(searchText));
  });
}

// List All Words in the database
function listAllWords(): string[] {
  const result: string[] = [];

  const dirs = fs.readdirSync("./data", "utf-8");

  dirs.map((dir: string) => {
    const raw = fs.readFileSync(`./data/${dir}`, "utf-8");
    const data = JSON.parse(raw);

    result.push(...Object.keys(data));
  });

  return result;
}

// Promise
async function listAllWordsAsync(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    resolve(listAllWords());
  });
}

// Is the search text in the database
function isExist(searchText: string): boolean {
  // Make sure to trim the word's space characters
  const word = searchText.trim().toLowerCase();

  // Get the first letter of search word
  const firstLetter: string = word.charAt(0);

  const filename = /[a-z]/.test(firstLetter) ? firstLetter + ".json" : "#.json";
  const filePath = `./data/${filename}`;
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  return Boolean(data[word]);
}

// Promise
async function isExistAsync(searchText: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    resolve(isExist(searchText));
  });
}

export {
  search,
  searchAsync,
  listAllWords,
  listAllWordsAsync,
  isExist,
  isExistAsync,
};

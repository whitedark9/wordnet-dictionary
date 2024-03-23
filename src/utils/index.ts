import symbol from "../data/#";
import a from "../data/a";
import words from "../data/all";
import b from "../data/b";
import c from "../data/c";
import d from "../data/d";
import e from "../data/e";
import f from "../data/f";
import g from "../data/g";
import h from "../data/h";
import i from "../data/i";
import j from "../data/j";
import k from "../data/k";
import l from "../data/l";
import m from "../data/m";
import n from "../data/n";
import o from "../data/o";
import p from "../data/p";
import q from "../data/q";
import r from "../data/r";
import s from "../data/s";
import t from "../data/t";
import u from "../data/u";
import v from "../data/v";
import w from "../data/w";
import x from "../data/x";
import y from "../data/y";
import z from "../data/z";
import type { Word } from "../type";

// Make searching faster
function searchInCorrespondingDatabase(
  word: string,
  firstLetter: string
): Word[] {
  let result: Word[];

  switch (firstLetter) {
    // Use 'a.ts' database
    case "a":
      result = a.filter((value: Word) => value.word === word);
      break;
    case "b":
      result = b.filter((value: Word) => value.word === word);
      break;
    case "c":
      result = c.filter((value: Word) => value.word === word);
      break;
    case "d":
      result = d.filter((value: Word) => value.word === word);
      break;
    case "e":
      result = e.filter((value: Word) => value.word === word);
      break;
    case "f":
      result = f.filter((value: Word) => value.word === word);
      break;
    case "g":
      result = g.filter((value: Word) => value.word === word);
      break;
    case "h":
      result = h.filter((value: Word) => value.word === word);
      break;
    case "i":
      result = i.filter((value: Word) => value.word === word);
      break;
    case "j":
      result = j.filter((value: Word) => value.word === word);
      break;
    case "k":
      result = k.filter((value: Word) => value.word === word);
      break;
    case "l":
      result = l.filter((value: Word) => value.word === word);
      break;
    case "m":
      result = m.filter((value: Word) => value.word === word);
      break;
    case "n":
      result = n.filter((value: Word) => value.word === word);
      break;
    case "o":
      result = o.filter((value: Word) => value.word === word);
      break;
    case "p":
      result = p.filter((value: Word) => value.word === word);
      break;
    case "q":
      result = q.filter((value: Word) => value.word === word);
      break;
    case "r":
      result = r.filter((value: Word) => value.word === word);
      break;
    case "s":
      result = s.filter((value: Word) => value.word === word);
      break;
    case "t":
      result = t.filter((value: Word) => value.word === word);
      break;
    case "u":
      result = u.filter((value: Word) => value.word === word);
      break;
    case "v":
      result = v.filter((value: Word) => value.word === word);
      break;
    case "w":
      result = w.filter((value: Word) => value.word === word);
      break;
    case "x":
      result = x.filter((value: Word) => value.word === word);
      break;
    case "y":
      result = y.filter((value: Word) => value.word === word);
      break;
    case "z":
      result = z.filter((value: Word) => value.word === word);
      break;
    default:
      result = symbol.filter((value: Word) => value.word === word);
      break;
  }

  return result;
}

// Search word
function search(searchText: string): Word | null {
  // Make sure to trim the word's space characters
  const word = searchText.trim().toLowerCase();

  // Get the first letter of search word
  const firstLetter: string = word.trim().charAt(0);

  // Result
  const result: Word[] = searchInCorrespondingDatabase(word, firstLetter);

  // If not result, return null
  if (result.length === 0) {
    return null;
  }

  // If any, return Object
  return result[0];
}

// Promise
async function searchAsync(searchText: string): Promise<Word | null> {
  return new Promise((resolve, reject) => {
    resolve(search(searchText));
  });
}

// List All Words in the database
function listAllWords(): string[] {
  return words.map((e) => e.word);
}

// Promise
async function listAllWordsAsync(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    resolve(listAllWords());
  });
}

// Is the search text in the database
function isExist(searchText: string): boolean {
  const word = searchText.trim().toLowerCase();

  for (let i = 0, len = words.length; i < len; i++) {
    if (words[i].word === word) {
      return true;
    } else {
      continue;
    }
  }

  return false;
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

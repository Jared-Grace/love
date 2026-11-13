import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
export function bible_words_ordinary(bibles) {
  "The words these bibles treat as ordinary words rather than names, in lower case: those printed in lower case more than five times as often as with a capital where a sentence does not start - sin, faith, lot is not, because Lot the man is printed often enough.";
  "$plain bibles";
  "the bibles are lists of chapters, each with verses carrying their text; they are read for words, and nothing in them runs.";
  "A CAPITAL WHERE A SENTENCE STARTS SAYS NOTHING, and neither does the first word of a verse or a word just inside an opening quote, so only words standing inside a sentence are counted. A word split by a dash counts as its parts, because that is how a tapped word is read.";
  let low = new Map();
  let capital = new Map();
  for (let chapters of bibles) {
    for (let chapter of chapters) {
      for (let verse of chapter.verses) {
        let text = verse.text;
        for (let match of text.matchAll(/(?<![\p{L}’'])\p{L}[\p{L}’']*/gu)) {
          let before = text.slice(0, match.index).trimEnd();
          let opens =
            equal(before.length, 0) ||
            /[.!?:]["”’')\]]*$/.test(before) ||
            /["“‘(]$/.test(before);
          if (opens) {
            continue;
          }
          let word = match[0].replace(/['’]s?$/, "");
          let lower = word.toLowerCase();
          let counts = equal(word, lower) ? low : capital;
          counts.set(lower, (counts.get(lower) ?? 0) + 1);
        }
      }
    }
  }
  ("EACH ORDINARY WORD COMES WITH HOW MANY TIMES IT IS PRINTED IN LOWER CASE, so a caller can tell a word like of, printed tens of thousands of times, from a word like faith.");
  let r = new Map();
  for (let [word, count] of low) {
    let b = multiply(5, capital.get(word) ?? 0);
    if (greater_than(count, b)) {
      r.set(word, count);
    }
  }
  return r;
}

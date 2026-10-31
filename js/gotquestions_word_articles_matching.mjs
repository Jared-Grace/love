import { equal } from "./equal.mjs";
export function gotquestions_word_articles_matching(table, word) {
  "The articles in the table whose word is the tapped word, in the table's order; none when nothing matches.";
  "$plain table";
  "$plain word";
  "the table is rows of a word, what an article is about and the article's file, and the word is one tapped word with its punctuation taken off; both are data and neither runs.";
  "A NAME IS MATCHED BY ITS CAPITAL. The table spells a name the way a verse does, so a lower-case word - job, lot, will - never opens an article about Job or Lot.";
  "A word written all in capitals matches too, because some bibles print GOD and JESUS that way.";
  "A possessive is matched by its name, so David's opens the article about David.";
  let name = word.replace(/['’]s?$/, "");
  let r = [];
  for (let row of table) {
    let key = row[0];
    if (equal(name, key) || equal(name, key.toUpperCase())) {
      r.push(row);
    }
  }
  return r;
}

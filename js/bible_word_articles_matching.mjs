import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function bible_word_articles_matching(table, words, index) {
  "The articles in a site's table about the tapped word or about a name of several words that the tapped word stands inside in its verse, in the table's order, each article once; none when nothing matches.";
  "$plain table";
  "$plain words";
  "$plain index";
  "the table is rows of a name, what an article is about and the article's own address on its site; the words are the bare words of one verse in order and the index says which was tapped. All are data and none runs.";
  "ANY WORD OF A NAME OF SEVERAL WORDS OPENS IT. In Valley of Succoth, a tap on Valley, of or Succoth offers that article - but only where the whole name stands in the verse, so of alone never opens anything.";
  "AN ORDINARY WORD, WRITTEN IN LOWER CASE IN THE TABLE, ALSO MATCHES WITH A CAPITAL FIRST LETTER, because a verse that starts with it prints it so - Faith is the substance.";
  "A NAME OF ONE WORD IS MATCHED BY ITS CAPITAL. The table spells a name the way a verse does, so a lower-case word - job, lot, will - never opens an article about Job or Lot. A word written all in capitals matches too, because some bibles print GOD and JESUS that way.";
  "A NAME OF SEVERAL WORDS IS MATCHED WHATEVER ITS CAPITALS, because a verse prints the valley of Succoth in lower case and the whole run of words already says which name it is.";
  "A possessive is matched by its name, so David's opens the article about David.";
  "ONE ARTICLE IS OFFERED ONCE: Pilate and Pontius Pilate name the same article, and a tap on Pilate after Pontius finds both.";
  function bare(word) {
    let name = word.replace(/['’]s?$/, "");
    return name;
  }
  function word_matches(word, key, several) {
    let name = bare(word);
    if (several) {
      let left = text_lower_to(name);
      let right = text_lower_to(key);
      let eq = equal(left, right);
      return eq;
    }
    let r2 = equal(name, key) || equal(name, key.toUpperCase());
    if (r2) {
      return true;
    }
    let right2 = text_lower_to(key);
    let lower = equal(key, right2);
    let capital = key.charAt(0).toUpperCase() + key.slice(1);
    let first = lower && equal(name, capital);
    return first;
  }
  function at(keys, start) {
    let several = greater_than(keys.length, 1);
    for (let k = 0; less_than(k, keys.length); k++) {
      let b = word_matches(words[start + k], keys[k], several);
      if (not(b)) {
        return false;
      }
    }
    return true;
  }
  let r = [];
  let files = [];
  for (let row of table) {
    let keys = text_split_space(row[0]);
    let file = row[2];
    for (let offset = 0; less_than(offset, keys.length); offset++) {
      let start = subtract(index, offset);
      let inside =
        greater_than_equal(start, 0) &&
        less_than_equal(start + keys.length, words.length);
      if (inside && at(keys, start)) {
        let b2 = files.includes(file);
        if (not(b2)) {
          files.push(file);
          r.push(row);
        }
        break;
      }
    }
  }
  return r;
}

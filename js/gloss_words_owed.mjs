import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_words_back_referenced } from "./gloss_words_back_referenced.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function gloss_words_owed(fn) {
  "Every word in one gloss store still owed an explanation, commonest first, each one carrying what the dictionary was able to say about it.";
  "This is the worklist an explanation gets written from. The two halves are useless apart: the store says which words are owed something and nothing about what they are, the dictionary says what a word is built from and nothing about whether anybody is waiting on it.";
  "A word the dictionary has not been asked about yet, and a word it was asked about and could not take apart, are both carried here rather than dropped. The first is waiting on the sweep and the second never will be - one is a gap that closes by itself and the other is a word somebody has to know, and a list that dropped them both would look finished while neither was true.";
  let ranked = await gloss_words_back_referenced(fn);
  let known = await binisaya_words_known();
  let owed = [];
  function word_read(row) {
    let word = property_get(row, "value");
    let sites = property_get(row, "count");
    let entry = property_get_or_null(known, word);
    let unasked = null_is(entry);
    let analysed = false;
    let root = "";
    let affixes = "";
    if (not(unasked)) {
      analysed = property_get(entry, "analysed");
      root = property_get(entry, "root");
      affixes = property_get(entry, "affixes");
    }
    let item = {
      word,
      sites,
      unasked,
      analysed,
      root,
      affixes,
    };
    list_add(owed, item);
  }
  each(ranked, word_read);
  return owed;
}

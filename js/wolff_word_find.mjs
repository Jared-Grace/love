import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { wolff_derived_words_cache } from "./wolff_derived_words_cache.mjs";
import { wolff_word_key } from "./wolff_word_key.mjs";
import { wolff_word_read } from "./wolff_word_read.mjs";
export async function wolff_word_find(word) {
  "Where in Wolff's dictionary one Cebuano word is answered - as a headword of its own, or as a form the book spells out under some other headword - together with the entries that answer it.";
  "$plain word";
  "the word is a Cebuano word being looked up. It is respelled and used to read what is already held here; nothing reaches anywhere and nothing it is given is run.";
  "It says which of the two answered rather than handing back entries alone, because the difference decides what may then be written. Found among the headwords, the entry is about this word. Found among the built forms, the entry is about the root and this word is one thing made from it - and an explanation that took the second for the first would tell a reader that the word in front of them means what a different word means.";
  "The headwords are asked first. A spelling can be both a word in its own right and a form of another word, and the book giving something an entry of its own is the book saying it stands alone.";
  "Nothing found is not a verdict that the word is not Cebuano. It is the smaller statement that this book does not print that spelling, either on its own or under a root - which a word built in a way the book did not choose to spell out will fail exactly as a word the book never heard of does.";
  let headwords = await wolff_word_read(word);
  let none = list_empty_is(headwords);
  if (not(none)) {
    let found = {
      found: "headword",
      entries: headwords,
    };
    return found;
  }
  let derived = await wolff_derived_words_cache();
  let key = wolff_word_key(word);
  let built = property_exists(derived, key);
  if (built) {
    let entries = property_get(derived, key);
    let r = {
      found: "derived",
      entries,
    };
    return r;
  }
  let missing = {
    found: "none",
    entries: [],
  };
  return missing;
}

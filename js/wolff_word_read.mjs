import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { wolff_word_key } from "./wolff_word_key.mjs";
import { wolff_words_cache } from "./wolff_words_cache.mjs";
export async function wolff_word_read(word) {
  "Everything Wolff's dictionary prints for one Cebuano word, and an empty answer when it prints nothing.";
  "$plain word";
  "the word is a Cebuano word being looked up. It is respelled and used to read what is already held here; nothing reaches anywhere and nothing it is given is run.";
  "A word the book does not carry comes back as an empty list rather than as a failure, because not being in a dictionary is an ordinary thing for a word to be - a name, a borrowing, a spelling the book files elsewhere - and a caller asking about a whole passage would otherwise have to guard every single word against a throw.";
  "The empty answer must not be read as a verdict that no such word exists. It says this book does not carry that spelling, which is a smaller thing, and only the caller knows whether that is enough to conclude anything.";
  let words = await wolff_words_cache();
  let key = wolff_word_key(word);
  let carried = property_exists(words, key);
  if (carried) {
    let entries = property_get(words, key);
    return entries;
  }
  let none = [];
  return none;
}

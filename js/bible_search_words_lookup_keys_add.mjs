import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_word_key } from "./bible_search_word_key.mjs";
import { equal } from "./equal.mjs";
import { bible_search_words_lookup_forms_add } from "./bible_search_words_lookup_forms_add.mjs";
export function bible_search_words_lookup_keys_add(lookup) {
  "$plain lookup";
  "Files every verse of every word in the English search index under that word's key as well, so a search asked by key finds every form of the word.";
  arguments_assert(arguments, 1);
  function forms_get(word) {
    let key = bible_search_word_key(word);
    if (equal(key, word)) {
      let r = [];
      return r;
    }
    let r2 = [key];
    return r2;
  }
  bible_search_words_lookup_forms_add(lookup, forms_get);
}

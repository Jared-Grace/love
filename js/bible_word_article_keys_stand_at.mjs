import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { bible_word_article_key_matches } from "./bible_word_article_key_matches.mjs";
import { list_get } from "./list_get.mjs";
import { not } from "./not.mjs";
export function bible_word_article_keys_stand_at(keys, start, words, bare) {
  arguments_assert(arguments, 4);
  let several = greater_than(keys.length, 1);
  for (let k = 0; less_than(k, keys.length); k++) {
    let word = list_get(words, start + k);
    let b = bible_word_article_key_matches(word, keys[k], several, bare);
    if (not(b)) {
      return false;
    }
  }
  return true;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_root_word_own_is } from "./gloss_root_word_own_is.mjs";
import { equal } from "./equal.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
export function bible_word_article_key_matches(word, key, several, bare) {
  arguments_assert(arguments, 4);
  let name = bare(word);
  if (several) {
    let left = text_lower_to(name);
    let eq = gloss_root_word_own_is(key, left);
    return eq;
  }
  let r = equal(name, key) || equal(name, key.toUpperCase());
  if (r) {
    return true;
  }
  let lower = text_lower_is(key);
  let capital = key.charAt(0).toUpperCase() + key.slice(1);
  let first = lower && equal(name, capital);
  return first;
}

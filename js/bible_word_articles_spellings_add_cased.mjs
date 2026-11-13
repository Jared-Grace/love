import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_word_articles_spellings_add_cased() {
  "A function that writes a word with the capitals of another: all capitals, a capital first letter, or lower case.";
  arguments_assert(arguments, 0);
  function cased(like, word) {
    let right = like.toUpperCase();
    if (equal(like, right) && not_equal(like, like.toLowerCase())) {
      let r = word.toUpperCase();
      return r;
    }
    let right2 = like[0].toLowerCase();
    if (not_equal(like[0], right2)) {
      let r3 = word[0].toUpperCase() + word.slice(1);
      return r3;
    }
    return word;
  }
  return cased;
}

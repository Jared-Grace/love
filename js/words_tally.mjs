import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
export function words_tally(words) {
  "How many times each word appears, as an object from the word to its count.";
  let counts = {};
  function word_read(word) {
    let count = property_get_or_null(counts, word);
    if (null_is(count)) {
      count = 0;
    }
    let value = add(count, 1);
    property_set(counts, word, value);
  }
  each(words, word_read);
  return counts;
}

import { not } from "./not.mjs";
import { text_split } from "./text_split.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
export function names_leading_words_shared_count(name, name2) {
  "How many underscore-separated words two names begin with in common, counting from the left and stopping at the first word that differs. Two names sharing a leading run belong to the same corner of the repo, which is a cheap mechanical stand-in for a judgment nobody wants to make by hand.";
  let words = text_split(name, "_");
  let words2 = text_split(name2, "_");
  let size = list_size(words);
  let size2 = list_size(words2);
  let shortest = less_than(size, size2) ? size : size2;
  let count = 0;
  while (less_than(count, shortest)) {
    let word = list_get(words, count);
    let word2 = list_get(words2, count);
    let same = equal(word, word2);
    if (not(same)) {
      return count;
    }
    count = add(count, 1);
  }
  return count;
}

import { app_code_verse_words } from "./app_code_verse_words.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { range } from "./range.mjs";
import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_verse_word_pairs() {
  "adjacent word pairs drawn from the shared verse text, each two words joined by a space and commas stripped - a large single-sourced set of two-word strings for the spaces lesson. Reusing the verse is cheaper to maintain and changed in one place, and it yields many more example pairs than a hand-written list";
  let words = app_code_verse_words();
  let left = list_size(words);
  let count = subtract(left, 1);
  let indexes = range(count);
  function pair(index) {
    "the word at index joined by a space to the next word, both with commas removed";
    let a = list_get(words, index);
    let next_index = add_1(index);
    let b = list_get(words, next_index);
    let a_clean = text_replace(a, ",", "");
    let b_clean = text_replace(b, ",", "");
    let combined = text_combine_multiple([a_clean, " ", b_clean]);
    return combined;
  }
  let pairs = list_map(indexes, pair);
  return pairs;
}

import { list_size_less_1 } from "./list_size_less_1.mjs";
import { app_code_verse_words_clean } from "./app_code_verse_words_clean.mjs";
import { range } from "./range.mjs";
import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_verse_word_pairs() {
  "adjacent word pairs drawn from the shared verse text, each two clean words joined by a space - a large single-sourced set of two-word strings for the spaces lesson. Reusing the verse is cheaper to maintain and changed in one place, and it yields many more example pairs than a hand-written list";
  let words = app_code_verse_words_clean();
  let count = list_size_less_1(words);
  let indexes = range(count);
  function pair(index) {
    "the word at index joined by a space to the next word";
    let a = list_get(words, index);
    let next_index = add_1(index);
    let b = list_get(words, next_index);
    let combined = text_combine_multiple([a, " ", b]);
    return combined;
  }
  let pairs = list_map(indexes, pair);
  return pairs;
}

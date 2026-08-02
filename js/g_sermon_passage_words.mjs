import { greater_than } from "./greater_than.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter } from "./list_filter.mjs";
export function g_sermon_passage_words(text) {
  let spaced = text.replace(/[-–—]+/g, " ");
  let split = text_split_space(spaced);
  function nonempty(word) {
    let g = greater_than(word.length, 0);
    return g;
  }
  let filtered = list_filter(split, nonempty);
  return filtered;
}

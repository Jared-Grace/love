import { text_split_space } from "./text_split_space.mjs";
import { list_filter } from "./list_filter.mjs";
export function g_sermon_passage_words(text) {
  let spaced = text.replace(/[-–—]+/g, " ");
  let split = text_split_space(spaced);
  function nonempty(word) {
    return word.length > 0;
  }
  return list_filter(split, nonempty);
}

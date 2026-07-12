import { list_map_unique } from "./list_map_unique.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function text_to_words(text) {
  let v = whitespace_normalize(text);
  let lower = text_lower_to(v);
  let split = text_split_space(lower);
  let words = list_map_unique(split, text_letters_only);
  return words;
}

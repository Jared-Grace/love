import { list_map_unique } from "../../../love/public/src/list_map_unique.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
export function text_to_words(text) {
  let v2 = whitespace_normalize(text);
  let lower = text_lower_to(v2);
  let split = text_split_space(lower);
  let words = list_map_unique(split, text_letters_only);
  return words;
}

import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
export function string_to_words(text) {
  let v2 = whitespace_normalize(text);
  let lower = text_lower_to(v2);
  let split = string_split_space(lower);
  let m = list_map(split, text_letters_only);
  let words = list_unique(m);
  return words;
}

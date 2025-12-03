import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { string_letters_only } from "../../../love/public/src/string_letters_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
export function string_to_words(text) {
  marker("1");
  let v2 = whitespace_normalize(text);
  let lower = string_lower_to(v2);
  let words = string_split_space(lower);
  words = list_map(words, string_letters_only);
  let unique = list_unique(list);
  return words;
}

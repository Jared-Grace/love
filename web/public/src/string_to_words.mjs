import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
export function string_to_words(text) {
  let v2 = whitespace_normalize(text);
  let lower = string_lower_to(v2);
  let split2 = string_split_space(lower);
}

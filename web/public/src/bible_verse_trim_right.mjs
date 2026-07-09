import { text_trim_right } from "../../../love/public/src/text_trim_right.mjs";
import { text_ends_with_any } from "../../../love/public/src/text_ends_with_any.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
export function bible_verse_trim_right(text) {
  let suffixes = '"”) ’';
  let split = text_split_empty(suffixes);
  function lambda(s) {
    let ew = text_ends_with_any(s, split);
    return ew;
  }
  let trimmed = text_trim_right(lambda, text);
  return trimmed;
}

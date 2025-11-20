import { string_trim_right } from "../../../love/public/src/string_trim_right.mjs";
import { string_ends_with_any } from "../../../love/public/src/string_ends_with_any.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
export function bible_verse_trim_right(v) {
  let suffixes = '"”) ’';
  let split = string_split_empty(suffixes);
  function lambda3(s2) {
    let ew = string_ends_with_any(s2, split);
    return ew;
  }
  let s3 = string_trim_right(lambda3, v);
  return s3;
}

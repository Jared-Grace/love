import { string_to } from "../../../love/public/src/string_to.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { string_skip } from "../../../love/public/src/string_skip.mjs";
import { ebible_book_code_size } from "../../../love/public/src/ebible_book_code_size.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let count = ebible_book_code_size();
  let s = string_skip(chapter_code, count);
  let i = integer_to(s);
  let chapter_name = string_to(i);
  return chapter_name;
}

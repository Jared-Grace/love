import { string_skip } from "../../../love/public/src/string_skip.mjs";
import { ebible_book_code_size } from "../../../love/public/src/ebible_book_code_size.mjs";
export function ebible_chapter_code_to_name_code(chapter_code) {
  let count = ebible_book_code_size();
  let s = string_skip(chapter_code, count);
  return s;
}

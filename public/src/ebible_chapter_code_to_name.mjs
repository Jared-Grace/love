import { string_skip } from "./string_skip.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let count = ebible_book_code_size();
  let chapter_name = string_skip(chapter_code, count);
  return chapter_name;
}

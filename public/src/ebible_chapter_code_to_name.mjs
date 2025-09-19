import { string_to } from "./string_to.mjs";
import { integer_to } from "./integer_to.mjs";
import { string_skip } from "./string_skip.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let count = ebible_book_code_size();
  let s = string_skip(chapter_code, count);
  let i = integer_to(s);
  let s2 = string_to(input);
  return chapter_name;
}

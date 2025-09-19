import { object_property_set } from "./object_property_set.mjs";
import { integer_to } from "./integer_to.mjs";
import { string_skip } from "./string_skip.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let count = ebible_book_code_size();
  let s = string_skip(chapter_code, count);
  let i = integer_to(s);
  object_property_set(object, property_name, value);
  return chapter_name;
}

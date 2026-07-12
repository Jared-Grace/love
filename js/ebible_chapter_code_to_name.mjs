import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { text_to } from "./text_to.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let s = ebible_chapter_code_to_name_code(chapter_code);
  let i = integer_to_try(s);
  let chapter_name = text_to(i);
  return chapter_name;
}

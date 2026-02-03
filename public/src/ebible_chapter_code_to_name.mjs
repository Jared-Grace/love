import { ebible_chapter_code_to_name_code } from "../../../love/public/src/ebible_chapter_code_to_name_code.mjs";
import { string_to } from "../../../love/public/src/string_to.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let s = ebible_chapter_code_to_name_code(chapter_code);
  let i = integer_to(s);
  let chapter_name = string_to(i);
  return chapter_name;
}

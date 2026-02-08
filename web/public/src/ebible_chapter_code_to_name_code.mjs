import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { ebible_book_code_size } from "../../../love/public/src/ebible_book_code_size.mjs";
export function ebible_chapter_code_to_name_code(chapter_code) {
  let count = ebible_book_code_size();
  let name_code = text_skip(chapter_code, count);
  return name_code;
}

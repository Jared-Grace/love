import { ebible_book_code_size } from "../../../love/public/src/ebible_book_code_size.mjs";
import { text_take } from "../../../love/public/src/text_take.mjs";
export function ebible_chapter_code_to_book(chapter_code) {
  let count = ebible_book_code_size();
  let book_code = text_take(chapter_code, count);
  return book_code;
}

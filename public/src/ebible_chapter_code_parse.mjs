import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
export function ebible_chapter_code_parse(chapter_code) {
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let v = {
    book_code,
    chapter_name,
  };
  return v;
}

import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function bible_data_relative(chapter_code, type) {
  "$plain chapter_code";
  "Where one chapter's generated study data sits inside the Firebase mirror: bible/<BOOK>/<chapter>/<type>.json. This is the part of the address that is the same locally and on Firebase, so a copy in either direction is spelled once.";
  let book = ebible_chapter_code_to_book(chapter_code);
  let number = ebible_chapter_code_to_name_code(chapter_code);
  let file = file_name_json(type);
  let relative = path_join(["bible", book, number, file]);
  return relative;
}

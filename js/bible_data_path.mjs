import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function bible_data_path(chapter_code, type) {
  "dev-machine path for one generated study-data file: bible/<BOOK>/<chapter>/<type>.json — chapter is the padded number already baked into the code (2 digits, 3 for Psalms)";
  let book = ebible_chapter_code_to_book(chapter_code);
  let number = ebible_chapter_code_to_name_code(chapter_code);
  let file = file_name_json(type);
  let relative = path_join(["bible", book, number, file]);
  let path = folder_user_storage_path(relative);
  return path;
}

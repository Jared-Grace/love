import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { firebase_mirror_path } from "./firebase_mirror_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function bible_data_path(chapter_code, type) {
  "local path for one generated study-data file: bible/<BOOK>/<chapter>/<type>.json, under the Firebase mirror root (so it uploads verbatim). Chapter is the padded number already baked into the code (2 digits, 3 for Psalms)";
  let relative = bible_data_relative(chapter_code, type);
  let path = firebase_mirror_path(relative);
  return path;
}

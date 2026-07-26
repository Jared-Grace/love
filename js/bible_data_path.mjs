import { bible_data_relative } from "./bible_data_relative.mjs";
import { firebase_mirror_path } from "./firebase_mirror_path.mjs";
export function bible_data_path(chapter_code, type) {
  "$plain chapter_code";
  "local path for one generated study-data file: bible/<BOOK>/<chapter>/<type>.json, under the Firebase mirror root (so it uploads verbatim). Chapter is the padded number already baked into the code (2 digits, 3 for Psalms)";
  let relative = bible_data_relative(chapter_code, type);
  let path = firebase_mirror_path(relative);
  return path;
}
